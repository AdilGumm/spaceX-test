import { IMajorListItem } from "../molecules/MajorList";
import "../styles/MajorListItem.css";

export const MajorListItem = (params: IMajorListItem) => {

    return (
        <div className="MajorListItem">
            <div className="MajorListItem__headerTitle">
                {params.headerTitle}
            </div>
            <div className="MajorListItem__middleTitle">
                {params.middleTitle}
            </div>
            <div className="MajorListItem__footerTitle">
                {params.footerTitle}
            </div>
        </div>
    );
};
