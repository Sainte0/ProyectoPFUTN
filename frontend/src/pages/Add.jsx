import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Añadir nuevo libro</h1>
      <input
        type="text"
        placeholder="Titulo del libro"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Descripción del libro"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Precio del libro"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Portada del libro"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Añadir</button>
      {error && "Algo fallo!"}
      <Link to="/">Mirar todos los libros</Link>
    </div>
  );
};

export default Add;
