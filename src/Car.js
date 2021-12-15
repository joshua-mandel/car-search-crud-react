import {useState, useEffect} from 'react';

function Car(props){
  const[editMode,setEditMode] = useState(false);
  const[make,setMake] = useState("");
  const[model,setModel] = useState("");
  const[year,setYear] = useState("");

  useEffect(() => {
    setMake(props.car.make);
  },[props.car]);

  let cardClasses = 'card mb-3';

  if(props.color==='danger'){
      cardClasses += ' bg-danger text-white';
  }

  function onChangeMake(evt) {
    const newMake = evt.currentTarget.value;
    setMake(newMake);
  }

  function onChangeModel(evt) {
    const newModel = evt.currentTarget.value;
    setModel(newModel);
  }

  function onChangeYear(evt) {
    const newYear = evt.currentTarget.value;
    setYear(newYear);
  }

  function onEdit() {
    setEditMode(true);
    setMake(props.car.make);
    setModel(props.car.model);
    setYear(props.car.year);
  }
return(
  <div className={cardClasses}>
  <img src={props.car.img} height="175" className="card-img-top" alt="..."></img>
  {!editMode && <div className="card-body">
        <h2 className="card-title">{props.car.make}</h2>
         <p>{props.car.model} {props.car.year} </p>
         <button type="button" className='btn btn-sm btn-secondary' onClick={onEdit}>Edit</button>
         
    </div>}
    {editMode && 
    <form>
        <div className="card-body">
        
        <label htmlFor='txtMake'>Car Make</label>
        <input type="text" id='txtMake' className="form-control" value={make} onChange={onChangeMake} />
        <label htmlFor='txtModel'>Car Model</label>
        <input type="text" id='txtModel' className="form-control" value={model} onChange={onChangeModel} />
        <label htmlFor='txtYear'>Car Year</label>
        <input type="text" id='txtYear' className="form-control mb-3" value={year} onChange={onChangeYear} />
        <button className='btn btn-sm btn-secondary' type="button" onClick={() => console.log("Save")}>Save</button>
        <button type="button" className='btn btn-sm btn-secondary ms-2' onClick={() => setEditMode(false)}>Cancel</button>
        </div>
    </form>
    }
</div>
);
}

export default Car;