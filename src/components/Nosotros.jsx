import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    // console.log(users);
    setEquipo(users);
  };

  return (
    <div>
      <h1>Nosotros</h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            <Link to={`/nosotros/${item.id}`}>
              {item.name} - {item.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nosotros;
