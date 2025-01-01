import { useState } from 'react'
import './App.css'
import { Form, useForm } from "react-hook-form"


function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
  } = useForm();

  async function onSubmit(data) {

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Sumbmitting the from', data);
    
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label >
          First Name: </label>
        <input 
        className={errors.firstName ? 'input-error' : ''}
        {...register('firstName',
          { 
            required: true,
             minLength: {value:3, message:"Minimum length should be 3"},
             maxLength: {value:10, message:"Maximum length should be 10"} 
          
          })} />

          {
            errors.firstName && <p className='error-msg'>{errors.firstName.message}</p> // show error message
          }
      </div>

      <br />
      <div>
        <label >
          Middle Name: </label>
        <input {...register('middleName', { required: true, minLength: 3 , maxLength:10})}/>
      </div>

      <br />

      <div>
        <label >
          Last Name: </label>
        <input {...register('lastName',{required:true, minLength:3})}/>
      
      <br />
     
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'Submitting...' : 'Submit'}/>

      </div>

    </form>
  )
}

export default App
