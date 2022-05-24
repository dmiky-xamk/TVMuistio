import classes from "./Input.module.css";

export default function Input(props) {
  // Esim. formissa <input type="submit"/>
  if (props.button) {
    return (
      <div className={props.className}>
        <input {...props.input} />
      </div>
    );
  }

  // Esim. teksti tulee radionappien jälkeen
  if (props.reverse) {
    return (
      <div className={props.className}>
        <input {...props.input} />
        <label htmlFor={props.input.id}>{props.label}</label>
      </div>
    );
  }
  return (
    <div className={props.className}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {props.error && <p className={classes.error}>{props.error}</p>}
    </div>
  );
}
