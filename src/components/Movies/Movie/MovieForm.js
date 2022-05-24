import { useEffect, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MovieForm.module.css";

const ERRORS = Object.freeze({
  FIELD_OK: null,
  FIELD_EMPTY: "Syötä nimi.",
});

export default function MovieForm(props) {
  const { TYPES } = props;

  const [name, setName] = useState("");
  const [type, setType] = useState(TYPES.MOVIE);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return setError(ERRORS.FIELD_EMPTY);
    }

    props.onSearch(name.trim(), type);
  };

  // Jotta virheilmoitus tyhjästä nimestä häviää käyttäjän alkaessa kirjoittaa siihen.
  useEffect(() => {
    if (error && name.trim()) {
      setError(ERRORS.FIELD_OK);
    }
  }, [name, error]);

  return (
    <form className={classes["movie-form"]} onSubmit={handleSubmit}>
      <Input
        className={classes.name}
        label="Nimi"
        error={error}
        input={{
          type: "text",
          id: "name",
          name: "name",
          value: name,
          onChange: (e) => setName(e.target.value),
        }}
      />
      <Input
        className={classes.movie}
        reverse
        label="Elokuva"
        input={{
          type: "radio",
          name: "type",
          id: TYPES.MOVIE,
          value: TYPES.MOVIE,
          checked: type === TYPES.MOVIE,
          onChange: (e) => setType(e.target.value),
        }}
      />
      <Input
        className={classes.series}
        reverse
        label="TV-Sarja"
        input={{
          type: "radio",
          name: "type",
          id: TYPES.SERIES,
          value: TYPES.SERIES,
          checked: type === TYPES.SERIES,
          onChange: (e) => setType(e.target.value),
        }}
      />
      <Input
        className={classes.submit}
        button
        input={{ type: "submit", value: "Hae" }}
      />
    </form>
  );
}
