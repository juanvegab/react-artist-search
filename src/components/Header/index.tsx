import { FC } from "react";
import "./styles.css";
import { MaxWidthContainer } from "../MaxWidthContainer";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <MaxWidthContainer>
        <div className="content">
          <Link to="/">
            <img src="assets/max-logo.png" alt="Max Logo" />
          </Link>
          <nav>
            <Link to="/">
              <span>Search</span>
            </Link>
            <Link to="my-list">
              <span>My List</span>
            </Link>
          </nav>
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export { Header };
