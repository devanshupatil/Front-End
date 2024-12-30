document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.getElementById("search-button");
    const usernameInput = document.getElementById("username-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCricle = document.getElementById("easy-progress");
    const mediumProgressCircle = document.getElementById("medium-progress");
    const hardProgressCircle = document.getElementById("hard-progress");
    const easyLable = document.getElementById("easy-lable");
    const mediumLable = document.getElementById("medium-lable");
    const hardLable = document.getElementById("hard-lable");
    const cardStatsContainer = document.querySelector(".stats-cards");

    function validedUsername(username){

        if(!username){ // if username is empty 
            alert("Please enter a username");
            return false;
        }
        const regex = /^[a-zA-Z0-9_]{3,16}$/; // username validation
        const isMatching =regex.test(username); // matching username

        if(!isMatching){
            alert("Please enter a valid username");
            return false;
        }
        return isMatching;
    }

    async function fetchUserDetails(username){

        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
            const targetUrl = 'https://leetcode.com/graphql/';
            
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

            
            const response = await fetch(proxyUrl+targetUrl, requestOptions);
           
            if(!response.ok){
                throw new Error("User not found");
            }

            const userData = await response.json();
            console.log(userData);
            displayUserData(userData);
        }
        catch(error){
            statsContainer.innerHTML = `<p>No data Found</p>`;
            console.error("Error fetching user data", error);
            
        }
        finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
            usernameInput.value = "";
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(parsedData) {
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);

        const cardsData = [
            {label: "Overall Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
            {label: "Overall Easy Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
            {label: "Overall Medium Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
            {label: "Overall Hard Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },
        ];

        console.log("card ka data: " , cardsData);

        cardStatsContainer.innerHTML = cardsData.map(
            data => 
                    `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("")

    }

    searchButton.addEventListener("click", function(){

        const username = usernameInput.value;
        console.log(username);

        if(validedUsername(username)){
            
          const userDetails = fetchUserDetails(username); 

        }

    });
});


