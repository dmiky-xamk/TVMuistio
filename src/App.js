import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import useFetch from "./hooks/useFetch";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const API_KEY = "k_y3f7c5ob";

const API_URLS = Object.freeze({
  movie: `https://imdb-api.com/fi/API/SearchMovie/${API_KEY}/`,
  series: `https://imdb-api.com/fi/API/SearchSeries/${API_KEY}/`,
});

const TYPES = Object.freeze({
  MOVIE: "movie",
  SERIES: "series",
});

function App() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const { isLoading, fetchData } = useFetch();

  // Tarkastetaan, tuliko palvelimelta virheitä, tai tyhjä taulukko.
  const inspectShows = (showsObj) => {
    if (showsObj.errorMessage) {
      return setError(showsObj.errorMessage);
    }

    if (showsObj.results.length === 0) {
      return setError("Haullasi ei löytynyt tuloksia.");
    }

    setShows(showsObj.results);
  };

  const handleSearch = (name, type) => {
    const url = `${API_URLS[type]}${name}`;

    // Haetaan käyttäjän hakemaa elokuvaa / sarjaa.
    // url: Osoite, josta haetaan.
    // setError: Mahdollistaa haun aikana tapahtuneiden virheiden näyttämisen.
    // inspectShows: Funktio, jolle saatu data lähetetään hoidettavaksi.
    fetchData(url, setError, inspectShows);
  };

  const handleAddFavorite = (data) => {
    setFavorites((favorites) => [...favorites, data]);
  };

  const handleDeleteFavorite = (data) => {
    setFavorites((favorites) =>
      favorites.filter((favorite) => favorite.id !== data.id)
    );
  };

  const loadFavorites = () => {
    const favorites = localStorage.getItem("favorites");

    favorites ? setFavorites(JSON.parse(favorites)) : setFavorites([]);
  };

  const saveFavorites = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  useEffect(loadFavorites, []);
  useEffect(saveFavorites, [favorites]);

  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                TYPES={TYPES}
                shows={shows}
                favorites={favorites}
                error={error}
                isLoading={isLoading}
                onAddFavorite={handleAddFavorite}
                onDeleteFavorite={handleDeleteFavorite}
                onSearch={handleSearch}
              />
            }
          />
          <Route
            path="suosikit"
            element={
              <Favorites
                favorites={favorites}
                onDeleteFavorite={handleDeleteFavorite}
              />
            }
          />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
