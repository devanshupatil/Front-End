
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useState } from 'react'
import { decrement, increment, incrementByAmount, reset} from './fratures/counter/counterSlice';

function App() {

  const [amount , setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleDecrementClick() {

    dispatch(decrement());
  }

  function handleIncrementClick() {

    dispatch(increment());

  }
  function handleResetClick (){

    dispatch(reset());

  }

  function handleChnage(e){

    setAmount(e.target.value);

  }

  function handleIncrementAmountClick(){

    dispatch(incrementByAmount(amount));

  }
  return (
   <div>
   <button onClick={handleIncrementClick}>+</button>
   <p>Count:{count}</p>
   <button onClick={handleDecrementClick}>-</button>
   <br /><br />
   <button onClick={handleResetClick}>Reset</button>
   <br />
   <br />
   <input type='number' value={amount} placeholder='Enter Amount' onChange={handleChnage}/>
   <br />
   <br />
   <button onClick={handleIncrementAmountClick}>Increment Amount</button>
   </div>
  )
}

export default App
