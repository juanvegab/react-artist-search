import { FC } from "react";
import "./styles.css";
import { MaxWidthContainer } from "../MaxWidthContainer";
// import { NavLink } from "react-router-dom";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer>
      <MaxWidthContainer>{/* <h2>Footer</h2> */}</MaxWidthContainer>
    </footer>
  );
};

export { Footer };
