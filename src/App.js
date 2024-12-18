import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        < Weather defaultCity="Madrid" />
     <footer>
          This weather app was coded by{" "}
          <a
            href="https://github.com/sarahwhitehouse17"
            target="blank"
            rel="noreferrer"
          >
            Sarah Whitehouse
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sarahwhitehouse17/react-weather-app-new"
            target="blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
