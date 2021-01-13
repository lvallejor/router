import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  //   console.log(useParams());
  const { id } = useParams();
  console.log(id);

  const [user, setUser] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const users = await data.json();
    // console.log(users);
    setUser(users);
  };

  return (
    <div>
      <h3>{user.name}</h3>
      <h4>{user.username}</h4>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default User;
