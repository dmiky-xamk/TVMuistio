import classes from "./Header.module.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.headings}>
        <h1 className={classes["heading-primary"]}>TV-Muistio</h1>
        <h2 className={classes["heading-secondary"]}>
          Etsi ja tallenna suosikki elokuvasi sekä TV-sarjasi
        </h2>
      </div>
      <Navigation />
    </header>
  );
}
