import React, { useEffect, useState } from "react";
import MyProjects from "../../MyProjects";
// import PaginatedItems from "./PaginatedItems";
import ReactPaginate from "react-paginate";
export default function MyPriject() {
  let MyProjectsArray = MyProjects.reverse();
  const pageSize = 4;
  const [ItemSForShow, setItemSForShow] = useState();
  const [PageActive, setPageActive] = useState(0);
  const pageCount = Math.ceil(MyProjectsArray.length / pageSize);
  const elementsShow = (PageActive = 0) => {
    const start = pageSize * PageActive;
    const end = pageSize + start;
    const arraySlice = MyProjectsArray.slice(start, end);
    setItemSForShow(arraySlice);
  };
  useEffect(() => {
    elementsShow(PageActive);
  }, [PageActive]);

  return (
    <>
      <div className="MyPriject px-sm-5 d-flex flex-column  gap-sm-5 gap-3 px-3 py-3 ">
        <h1 className="text-center"> نمومه کار های من </h1>
        <div className="col-12 d-flex gap-sm-3 justify-content-evenly align-items-start flex-wrap gap-4">
          {ItemSForShow
            ? ItemSForShow.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${item.ClassNames} col-md-5  col-12 projectCard  d-flex flex-column  justify-content-center align-items-center gap-3  `}
                  >
                    <img src={item.cover} className="w-100" alt="Loading" />
                    <h3 className="text-end">{item.title}</h3>
                    <ul className="col-11   col-sm-10 text-end">
                      {item.technologies.map((liElm, index) => {
                        return <li key={index}>{liElm}</li>;
                      })}
                    </ul>
                    <div className="overlayCard">
                      <a href={item.link}>
                        <button className="p-1">
                          {item.Completed ? "مشاهده" : " ...درحال توسعه"}
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className=" col-12  d-flex justify-content-center  align-items-center ">
        <ReactPaginate
          className="d-flex gap-sm-5 justify-content-center  list-unstyled  align-items-center col-10 mt-3 gap-3 rounded "
          breakLabel="..."
          nextLabel=""
          onPageChange={(event) => {
            setPageActive(event.selected);
          }}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          activeLinkClassName=" activePage"
          pageLinkClassName="baseClassPageNaite"
          pageClassName={
            " baseClassPageNaite   text-center d-flex align-items-center justify-content-evenly  "
          }
        />
      </div>{" "}
    </>
  );
}
