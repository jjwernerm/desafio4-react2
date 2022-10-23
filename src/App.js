import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Context from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";

export default function App() {

  const [pizzasJSON, setPizzasJSON] = useState([]);

  const url = "/pizzas.json";

  const getPizzasJSON = async () => {
    const get = await fetch(url);
    const pizzas = await get.json();
    setPizzasJSON(pizzas);
  }

  useEffect(() => {
    getPizzasJSON();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Context.Provider value={{pizzasJSON, setPizzasJSON}}>
          <Navbar />
          <Header />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:pizzaid" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}