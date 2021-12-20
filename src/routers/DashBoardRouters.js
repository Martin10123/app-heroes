import { Navbar } from "../components/ui/Navbar";
import MarvelScreen from "../components/marvel/MarvelScreen";
import HeroesSreen from "../components/heroes/HeroesSreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchScreen";

import { Routes, Route } from "react-router-dom";

const DashBoardRouters = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/hero/:heroeId" element={<HeroesSreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashBoardRouters;
