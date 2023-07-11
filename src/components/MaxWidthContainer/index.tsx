import { FC, ReactNode } from "react";
import "./styles.css";

interface MaxWidthContainerProps {
  isPageWrapper?: boolean;
  children: ReactNode | Array<ReactNode>;
}

const MaxWidthContainer: FC<MaxWidthContainerProps> = ({
  children,
  isPageWrapper = false,
}) => {
  return (
    <div
      className={`max-width-container ${isPageWrapper ? "page-wrapper" : ""}`}
    >
      {children}
    </div>
  );
};

export { MaxWidthContainer };
