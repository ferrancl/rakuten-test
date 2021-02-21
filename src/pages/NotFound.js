import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeError } from "../actions";
import notFoundImage from "../assets/not-found.png";
import "./styles.css";

export const NotFound = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(removeError());
    };
  }, [dispatch]);

  return (
    <div className="notfound">
      <img className="notfound__image" src={notFoundImage} alt="" />
      <div className="notfound__message">
        <h4 className="notfound__message-title">¿No lo encuentras?</h4>
        <p className="notfound__message-text">
          Lo sentimos, pero nuestros pequeños extraterrestres no han podido
          encontrar lo que estás buscando. Puedes ir a la página principal para
          ver nuestras estratosféricas películas o navegar por géneros como si
          de planetas se tratase.
        </p>
      </div>
    </div>
  );
};
