const Counter = ({ inc, des, rest, count }) => {
  return (
    <div>
       <h1 style={{ color: count === 0 ? "red" : "green" }} className="{}">{count}</h1> 
      {/* <h1 style={count === 0 ? {color : 'red'} : {color : 'green'}}>{count}</h1> */}
      <button
        style={{backgroundColor : count ===0 ? 'red' : 'teal'}}
        onClick={des}
        disabled={count === 0}
      >
        -
      </button>
      <button onClick={inc}>+</button>
      <br />
      <button onClick={rest}>Reset</button>
    </div>
  );
};
// Counter.propTypes = {

// inc: PropTypes.func,   
//   des: PropTypes.func,  
//     rest: PropTypes.func,   
//      count: PropTypes.number

// }

export default Counter;
