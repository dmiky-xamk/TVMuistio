import classes from "./MoviesContainer.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";
import { Alert } from "@mui/material";

const Centered = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "6rem",
});

export default function MoviesContainer(props) {
  if (props.error) {
    return (
      <Centered>
        <Alert sx={{ fontSize: "2.4rem" }} severity="error">
          {props.error}
        </Alert>
      </Centered>
    );
  }

  if (props.isLoading) {
    return (
      <Centered>
        <CircularProgress size="6rem" />
      </Centered>
    );
  }

  return <div className={classes["movies-container"]}>{props.children}</div>;
}
