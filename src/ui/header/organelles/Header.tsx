import { HeaderLogo } from "../molecules/HeaderLogo";
import { HeaderMenu } from "../molecules/HeaderMenu";
import "../styles/Header.css";

export const Header = () => {

  return (
    <div className="Header">
      <HeaderLogo />
      <HeaderMenu />
    </div>
  );
};
