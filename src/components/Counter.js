import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/index';
// import { INCREMENT } from '../store';
const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter.counter);
  const show =useSelector(state=>state.counter.showCounter)

  const incrementHandler=()=>{
    // dispatch({type:'increment'})
    dispatch(counterActions.increment())
  }
  const increaseHandler=()=>{
    // dispatch({type:'incrementFive',amount:5})
    dispatch(counterActions.incrementFive(5))
  }
  const decrementHandler=()=>{
    // dispatch({type:'decrement'})
    dispatch(counterActions.decrement())
  }
  const decreaseHandler=()=>{
    // dispatch({type:'decrementFive',amount:5})
    dispatch(counterActions.decrementFive(5))
  }


  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decreaseHandler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
