import React from "react";
import { useInView } from "react-intersection-observer";
export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className="Skills col-12  gap-0 gap-sm-2 flex-column-reverse p-sm-5 p-3 d-flex flex-sm-row justify-content-evenly  align-items-center ">
      {" "}
      <div
        ref={ref}
        inView={inView}
        className="left flex-column ms-0  h-100  justify-content-center align-items-center gap-sm-4 gap-2 col-12  col-sm-6 d-flex   "
      >
        <div>
          <h2>مهارت های من</h2>
        </div>
        <div className="col-10 ">
          {" "}
          <h3 className="text-start">Html</h3>
          <div className={` ${inView ? "viewElemHtml" : ""}`}> </div>{" "}
          <h3 className="text-end p-0 pt-2 m-0 ">پیشرفته</h3>
        </div>{" "}
        <div className="col-10 ">
          {" "}
          <h3>Css</h3>
          <div className={` ${inView ? "viewElemcss" : ""}`}></div>{" "}
          <h3 className="text-end p-0 pt-2 m-0 ">پیشرفته</h3>
        </div>{" "}
        <div className="col-10 ">
          {" "}
          <h3>Sass</h3>
          <div className={` ${inView ? "viewElemsass" : ""}`}></div>{" "}
          <h3 className="text-end p-0 pt-2 m-0 ">پیشرفته</h3>
        </div>
        <div className="col-10 ">
          {" "}
          <h3>BootStrap</h3>
          <div className={` ${inView ? "viewElemBootsratp" : ""}`}></div>{" "}
          <h3 className="text-end p-0 pt-2 m-0 ">پیشرفته</h3>
        </div>
        <div className="col-10 ">
          {" "}
          <h3>JS</h3>
          <div className={` ${inView ? "viewElemjs" : ""}`}></div>{" "}
          <h3 className="text-end p-0 pt-2 m-0 ">پیشرفته</h3>
        </div>{" "}
        <div className="col-10 ">
          {" "}
          <h3>React</h3>
          <div className={` ${inView ? "viewElemReact" : ""}`}></div>{" "}
          <h3 className="text-end p-0 pt-2 m-0 ">پیشرفته</h3>
        </div>
      </div>{" "}
      <div className="right col-12 col-sm-5 mt-2 gap-3 d-flex align-items-end justify-content-center flex-column  align-self-start ">
        {" "}
        <h2 className="text-center">تحصیلات من</h2>{" "}
        <ul className="list-unstyled w-100 p-2 gap-2 gap-sm-4 d-flex flex-column align-items-center justify-content-center">
          <li className=" w-100 gap-sm-3 d-flex flex-column">
            <h3 className="text-end">دیپلم کامپیوتر</h3>
            <p className="text-end ">تهران - هنرستان پایگاه انقلاب</p>
          </li>
          <li className=" w-100 gap-sm-3 d-flex flex-column">
            <h3 className="text-end">کاردانی کامپیوتر</h3>
            <p className="text-end w-100">کرج - دانشگاه فنی حرفه ای شهید بهشتی</p>
          </li>
          <li className=" w-100 gap-sm-3 d-flex flex-column">
            <h3 className="text-end">دانشجو کارشناسی کامپیوتر</h3>
            <p className="text-end w-100">کرج - دانشگاه فنی حرفه ای شهید بهشتی</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
