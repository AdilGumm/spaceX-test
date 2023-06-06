import { useState } from "react";
import "../styles/HeaderLogo.css";
import DefaultLogo from '../../../assets/header/logo/Logo.png'
interface IHeaderLogo {
  image: string
}
export const HeaderLogo = () => {
  const [value, setValue] = useState<IHeaderLogo>({ image: DefaultLogo })
  return (
    <div className="HeaderLogo">

    </div>
  );
};
