import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from "axios";
import AnimalList from "../animals/AnimalList";
import NewAnimal from "../animals/NewAnimal";
import AnimalSingle from "../animals/AnimalSingle";


const Main = () => {
  const [animals, setAnimals] = useState([]);
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "mammals",
    img: "",
    desc: "",
    link: "",
  });
  useEffect(() => {
    fetch("http://localhost:3002/animals")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data);
      });

  
  }, []);
  

  const valueChangeHandler = (e) => {
    setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
  };
  
  const submitAnimal = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/animals", newAnimal)
      .then(() => {
        return axios.get("http://localhost:3002/animals");
      })
      .then((res) => setAnimals(res.data));
    e.target.reset();
  };
  
  return (
    <main>
      <BrowserRouter>
      <Switch>
        <Route path="/:id">
          <AnimalSingle />
          </Route>
          <Route path ="/" exact>
      <AnimalList animals={animals} />
      <NewAnimal change={valueChangeHandler} submit={submitAnimal}></NewAnimal>
      </Route>
      </Switch>
      </BrowserRouter>
    </main>
  );
};


export default Main;
