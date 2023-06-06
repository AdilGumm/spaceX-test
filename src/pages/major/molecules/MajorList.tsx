import { useState } from "react";
import { MajorListItem } from "../atoms/MajorListItem";
import "../styles/MajorList.css";
export interface IMajorListItem {
  headerTitle: string
  middleTitle: string
  footerTitle: string
}
export const MajorList = () => {
  const [value, setValue] = useState<IMajorListItem[]>(
    [
      {
        headerTitle: "мы",
        middleTitle: "1",
        footerTitle: "на рынке"
      },
      {
        headerTitle: "гарантируем",
        middleTitle: "50%",
        footerTitle: "безопасность"
      },
      {
        headerTitle: "календарик за",
        middleTitle: "2001",
        footerTitle: "в подарок"
      },
      {
        headerTitle: "путешествие",
        middleTitle: "597",
        footerTitle: "дней"
      }
    ]
  )
  return (
    <div className="MajorList">
      {
        value && value.map((e: IMajorListItem) =>
          <MajorListItem headerTitle={e.headerTitle} middleTitle={e.middleTitle} footerTitle={e.footerTitle} />
        )
      }
    </div>
  );
};
