import classes from "./MovieCard.module.css";
import Card from "../../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MovieCard(props) {
  return (
    <Card
      className={classes["card--flex"]}
      id={props.data.id}
      key={props.data.id}
    >
      <img className={classes.poster} src={props.data.image} alt="Poster" />
      <div className={classes["movie-content"]}>
        <p className={classes.title}>{props.data.title}</p>
        <p className={classes.description}>{props.data.description}</p>
        <FontAwesomeIcon
          className={classes.favorite}
          icon={props.icon}
          onClick={props.onClick.bind(null, props.data)}
        />
      </div>
    </Card>
  );
}
