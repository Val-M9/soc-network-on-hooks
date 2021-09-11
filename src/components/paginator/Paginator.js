import { useState } from "react";

import style from "./paginator.module.css";

export default function Paginator({ onChangePage, quantityOnPage, currentPage, totalCount }) {
  let sectionSize = 10;
  let pages = [];
  let pagesCount = Math.ceil(totalCount / quantityOnPage);
  for (let page = 1; page <= pagesCount; page++) {
    pages.push(page);
  }
  let pageSectionsCount = Math.ceil(pagesCount / sectionSize);

  const [sectionNumber, setSectionNumber] = useState(1);

  let leftEdge = (sectionNumber - 1) * sectionSize + 1;
  let rightEdge = sectionNumber * sectionSize;

  return (
    <div className={style.paginator}>
      {sectionNumber > 1 && (
        <button className={style.button} onClick={() => setSectionNumber(sectionNumber - 1)}>
          &#171;
        </button>
      )}
      {pages
        .filter((p) => p >= leftEdge && p <= rightEdge)
        .map((p) => {
          return (
            <span
              key={p}
              className={currentPage === p ? style.selectedPage : ""}
              onClick={() => {
                console.log(p);
                onChangePage(p);
              }}>
              {p + " "}
            </span>
          );
        })}
      {pageSectionsCount > sectionNumber && (
        <button
          className={style.button}
          onClick={() => {
            setSectionNumber(sectionNumber + 1);
          }}>
          &#187;
        </button>
      )}
    </div>
  );
}
