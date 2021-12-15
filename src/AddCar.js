import React, { useState} from 'react';

function AddCar(props) {
  
  const[carMake,setCarMake] = useState("");
  const[carModel,setCarModel] = useState("");
  const[carYear,setCarYear] = useState("");

  function doWork() {
    props.setAllCars([...props.allCars,{"make":carMake,"model":carModel,"year":parseInt(carYear),img:null}]);
        props.setSearchResults([...props.searchResults,{"make":carMake,"model":carModel,"year":parseInt(carYear)}]);

        if(localStorage) {
          localStorage.setItem('cars',JSON.stringify([...props.allCars,{"make":carMake,"model":carModel,"year":parseInt(carYear)}]));
          console.log('Saved new car to local storage');
      }
  }

  return (
    <div className="row">
      <div className="col-md-3">
        <input type="text" id="txtMake" placeholder="Car Make" className="form-control" onChange={(evt) => setCarMake(evt.currentTarget.value)}></input>
      </div>
      <div className="col-md-3">
        <input type="text" id="txtModel" placeholder="Car Model" className="form-control" onChange={(evt) => setCarModel(evt.currentTarget.value)}></input>
      </div>
      <div className="col-md-3">
        <input type="text" id="txtYear" placeholder="Car Year" className="form-control" onChange={evt => setCarYear(evt.currentTarget.value)}></input>
      </div>
      <div className="col-md-3">
        <button type="button" id="btnAdd" className="btn btn-secondary" onClick={doWork}>Add New Car</button>
      </div>
    </div>
  );
}


export default AddCar;