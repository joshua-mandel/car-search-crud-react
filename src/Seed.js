import React, { useState, useEffect } from 'react';
import AddCar from './AddCar';
import Car from './Car';
import _ from 'lodash';

function Seed() {
  const [allCars, setAllCars] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(0);

  // useEffect is a side effect hook that runs after every render
  useEffect(() => {
    if (localStorage) {
      const cars = JSON.parse(localStorage.getItem('cars'));
      if (cars) {
        setAllCars(cars);
        setSearchResults(cars);
      }
    }
  }, []);

  function resetCars() {
    // Save the car data to local storage
    const seedCarData = [
      {
        make: 'Toyota',
        model: 'T100',
        year: 1993,
        img: './images/toyota93.png',
      },
      {
        make: 'Ford',
        model: 'Bronco',
        year: 1993,
        img: './images/bronco93.jfif',
      },
      {
        make: 'Saab',
        model: '9-5',
        year: 2010,
        img: './images/10saab.jpg',
      },
      {
        make: 'Infiniti',
        model: 'QX',
        year: 2003,
        img: './images/03infiniti.jfif',
      },
      {
        make: 'Maserati',
        model: '228',
        year: 1990,
        img: './images/90maserati.jpg',
      },
      {
        make: 'Volkswagen',
        model: 'CC',
        year: 2011,
        img: './images/11volkswagon.jpg',
      },
      {
        make: 'Pontiac',
        model: 'Grand Am',
        year: 1993,
        img: './images/93pontiac.jpg',
      },
      {
        make: 'Ford',
        model: 'Bronco',
        year: 1988,
        img: './images/88bronco.jfif',
      },
      {
        make: 'Mercury',
        model: 'Topaz',
        year: 1986,
        img: './images/86mercury.jpg',
      },
      {
        make: 'Acura',
        model: 'RL',
        year: 1996,
        img: './images/96acura.jfif',
      },
      {
        make: 'Dodge',
        model: 'Ram 1500',
        year: 2001,
        img: './images/01ram',
      },
      {
        make: 'Dodge',
        model: 'Ram 2500',
        year: 2010,
        img: './images/10ram.jpg',
      },
    ];
    setAllCars(seedCarData);
    if (localStorage) {
      localStorage.setItem('cars', JSON.stringify(seedCarData));
      console.log('seed data saved to local storage');
    }
  }

  function searchCars(evt) {
    evt.preventDefault();

    let keywordsArray = [];

    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(' ');
    }
    if (make) {
      keywordsArray.push(make.toLowerCase());
    }
    if (model) {
      keywordsArray.push(model.toLowerCase());
    }
    if (year) {
      keywordsArray.push(year.toString());
    }

    if (keywordsArray.length > 0) {
      const results = allCars.filter((car) => {
        for (const word of keywordsArray) {
          if (
            car.make.toLowerCase().includes(word) ||
            car.model.toLowerCase().includes(word) ||
            car.year === parseInt(word)
          ) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(results);
    } else {
      setSearchResults(allCars);
    }
  }

  return (
    <div className="container rounded-3 mb-3">
      <form>
        <div className="input-group mb-3">
          <input type="text" className="form-control" onChange={(evt) => setKeywords(evt.currentTarget.value)}></input>
          <button type="submit" className="btn btn-primary col-sm-2" onClick={searchCars}>
            Search
          </button>
          <button className="btn btn-outline-secondary" onClick={resetCars}>
            Reset Local Storage
          </button>
        </div>
        <div className="d-flex d-column flex-sm-row">
          <div className="mb-3 me-2">
            <label htmlFor="carMake" className="form-label">
              Make
            </label>
            <select
              name="carMake"
              id="carMake"
              className="form-select"
              onChange={(evt) => setMake(evt.currentTarget.value)}
            >
              <option value="">Select Make</option>
              {/* {allCars &&
                allCars.map((car, index) => (
                  <option key={index} value={car.make}>
                    {car.make}
                  </option>
                ))} */}
              {_(allCars)
                .map((car) => car.make)
                .sort()
                .uniq()
                .map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))
                .value()}
            </select>
          </div>
          <div className="mb-3 me-2">
            <label htmlFor="carModel" className="form-label">
              Model
            </label>
            <select
              name="carModel"
              id="carModel"
              className="form-select"
              onChange={(evt) => setModel(evt.currentTarget.value)}
            >
              <option value="">Select Model</option>
              {/* {allCars &&
                allCars.map((car, index) => (
                  <option key={index} value={car.model}>
                    {car.model}
                  </option>
                ))} */}
              {_(allCars)
                .map((car) => car.model)
                .sort()
                .uniq()
                .map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))
                .value()}
            </select>
          </div>
          <div className="mb-3 me-2">
            <label htmlFor="carYear" className="form-label">
              Year
            </label>
            <select
              name="carYear"
              id="carYear"
              className="form-select"
              onChange={(evt) => setYear(evt.currentTarget.value)}
            >
              <option value="">Select Year</option>
              {/* {allCars &&
                allCars.map((car, index) => (
                  <option key={index} value={car.year}>
                    {car.year}
                  </option>
                ))} */}
              {_(allCars)
                .map((car) => car.year)
                .sort()
                .uniq()
                .map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))
                .value()}
            </select>
          </div>
        </div>
        <AddCar
          allCars={allCars}
          setAllCars={setAllCars}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      </form>
      <div className="row mt-3">
        {!allCars && (
          <button className="btn btn-lg btn-warning" onClick={resetCars}>
            Save Seed Data to Local Storage
          </button>
        )}
        {searchResults &&
          searchResults.map((car, index) => {
            return (
              <div className="col-md-3" key={index}>
                <Car car={car} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Seed;
