import { MajorButton } from "../molecules/MajorButton";
import { MajorList } from "../molecules/MajorList";
import { MajorTitle } from "../molecules/MajorTitle";
import "../styles/Major.css";
export const Major = () => {
  return (
    <div className="Major">
      <MajorTitle />
      <MajorButton />
      <MajorList />
    </div>
  );
};
