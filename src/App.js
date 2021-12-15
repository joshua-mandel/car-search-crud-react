import React, { useState } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState('');

  function add(evt) {
    if (evt.currentTarget.id === 'txtNum1') {
      setNum1(evt.currentTarget.value);
    }

    if (evt.currentTarget.id === 'txtNum2') {
      setNum2(evt.currentTarget.value);
    }

    let sum = parseInt(num1) + parseInt(num2);

    setSum(sum);
  }

  return (
    <div className="container rounded-3">
      <h1 className="mt-3 mb-3 form-label">Add two numbers together</h1>
      <div className="d-flex flex-column">
        <label className="me-3 form-label col-sm-1 mb-3">Number 1</label>
        <div className="col-sm-2 mb-3">
          <input id="txtNum1" type="text" value={num1} onChange={(evt) => add(evt)} className="form-control" />
        </div>
        <label className="me-3 form-label col-sm-1 mb-3">Number 2</label>
        <div className="col-sm-2 mb-3">
          <input id="txtNum2" type="text" value={num2} onChange={(evt) => add(evt)} className="form-control" />
        </div>
        <span className="display-5 mb-5">
          {num1} + {num2} = {sum}
        </span>
      </div>
      <p>You clicked {count} times</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
