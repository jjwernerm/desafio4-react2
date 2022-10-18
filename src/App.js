import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Context from "./Context";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./views/Home";

export default function App() {

  const [pizzasJSON, setPizzasJSON] = useState([]);

  const url = "/pizzas.json";

  const getPizzasJSON = async () => {
    const get = await fetch(url);
    const {pizzas} = await get.json();
    setPizzasJSON(pizzas);
  }

  useEffect(() => {
    getPizzasJSON();
  }, []);

  return (
    <>
      <Context.Provider value={{pizzasJSON}}>
        <Navbar />
        <Header />
        <br />
        <Home />
      </Context.Provider>
    </>
  );
}