import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroByID } from "../../selectors/getHeroById";

const HeroesSreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroByID(heroeId), [heroeId]);

  console.log(hero);
  console.log("hola");

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInBottomLeft"
        />
      </div>
      <div className="col-8">
        <h3 style={{ fontSize: "3.2rem" }}> {superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b> {first_appearance}
          </li>
        </ul>

        <h5 style={{ fontSize: "2.5rem" }}>characters</h5>
        <p style={{ fontSize: "2rem" }}>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          return
        </button>
      </div>
    </div>
  );
};

export default HeroesSreen;
