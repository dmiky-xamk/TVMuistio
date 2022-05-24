import classes from "./Favorites.module.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import MovieCard from "../components/Movies/Movie/MovieCard";
import Section from "../components/UI/Section";
import MoviesContainer from "../components/Movies/MoviesContainer";

export default function Favorites(props) {
  const favorites = props.favorites.map((favorite) => {
    return (
      <MovieCard
        key={favorite.id}
        data={favorite}
        icon={faTrash}
        onClick={props.onDeleteFavorite}
      />
    );
  });

  const noFavorites = (
    <p className={classes["favorites-empty"]}>
      Et ole vielä lisännyt suosikkeja.
    </p>
  );

  return (
    <Section>
      <MoviesContainer>
        {favorites.length ? favorites : noFavorites}
      </MoviesContainer>
    </Section>
  );
}
