import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ArtistSearchStateProvider } from "./services/stateProvider";
import { Routes } from "./routes/routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MaxWidthContainer } from "./components/MaxWidthContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <ArtistSearchStateProvider>
          <Header />
          <div className="main-content">
            <MaxWidthContainer isPageWrapper>
              <Routes />
            </MaxWidthContainer>
          </div>
          <Footer />
        </ArtistSearchStateProvider>
      </Router>
    </div>
  );
}

export default App;
