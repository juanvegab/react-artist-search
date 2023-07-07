import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ArtistSearchStateProvider } from "./services/stateProvider";
import { Routes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <ArtistSearchStateProvider>
          <Routes />
        </ArtistSearchStateProvider>
      </Router>
    </div>
  );
}

export default App;
