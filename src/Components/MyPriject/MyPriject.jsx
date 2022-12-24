import React from "react";
import MyProjects from "../../MyProjects";
export default function MyPriject() {
  return (
    <div className="MyPriject py-3 px-3 px-sm-5  d-flex flex-column gap-sm-5 gap-3 ">
      <h1 className="text-center"> نمومه کار های من </h1>
      <div className="col-12 d-flex gap-sm-3 gap-4 justify-content-evenly align-items-start flex-wrap">
        {MyProjects.map((item, index) => {
          return (
            <div
              key={index}
              className={`${item.ClassNames} col-sm-5  col-12 projectCard  d-flex flex-column  justify-content-center align-items-center gap-3  `}
            >
              <img src={item.cover} className="w-100" alt="Loading" />
              <h3 className="text-end">{item.title}</h3>
              <ul className="text-end   col-11 col-sm-10">
                {item.technologies.map((liElm, index) => {
                  return <li key={index}>{liElm}</li>;
                })}
              </ul>
              <div className="overlayCard">
                <a href={item.link}>
                  <button className="p-1">{item.Completed ? "مشاهده" : " ...درحال توسعه"}</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
