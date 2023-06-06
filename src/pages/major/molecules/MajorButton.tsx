import { useState } from "react";
import "../styles/MajorButton.css";
export interface IMajorButton {
  title: string
  link: string
}
export const MajorButton = () => {
  const [value, setValue] = useState<IMajorButton>({ title: "Начать путешествие", link: "" })
  return (
    <div className="MajorButton">

    </div>
  );
};
