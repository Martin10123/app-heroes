import React, { useMemo } from "react";
import queryString from "query-string";
import HeroCard from "../heroes/HeroCard";
import { useForm } from "../../Hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

const SearchScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({ name: q });

  const { name } = values;

  const heroesFilters = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${name}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4> Search Form </h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="name"
              placeholder="Find your hero"
              className="form-control"
              value={name}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn m-1 btn-clock btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {heroesFilters.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
