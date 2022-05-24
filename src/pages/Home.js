import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import MovieForm from "../components/Movies/Movie/MovieForm";
import MovieCard from "../components/Movies/Movie/MovieCard";
import Section from "../components/UI/Section";
import MoviesContainer from "../components/Movies/MoviesContainer";

export default function Home(props) {
  const receivedData = props.shows?.map((data) => {
    // .includes ei toimi, koska objektit eivät ole samoja (=== vertailu).
    const isInFavorites = props.favorites.some(
      (favorite) => favorite.id === data.id
    );
    const icon = isInFavorites ? faTrash : faHeart;
    const handler = isInFavorites
      ? props.onDeleteFavorite
      : props.onAddFavorite;

    return (
      <MovieCard key={data.id} data={data} icon={icon} onClick={handler} />
    );
  });

  return (
    <Section>
      <MovieForm TYPES={props.TYPES} onSearch={props.onSearch} />
      <MoviesContainer isLoading={props.isLoading} error={props.error}>
        {receivedData}
      </MoviesContainer>
    </Section>
  );
}
