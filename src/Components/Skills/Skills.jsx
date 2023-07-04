import React from "react";
import { useInView } from "react-intersection-observer";
export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  // let inview = InView;
  return (
    <div
      className="col-12 d-flex Skills flex-column-reverse flex-md-row align-items-center  justify-content-start
    align-items-md-start justify-content-md-center  flex-wrap p-3
    
    "
    >
      <div
        ref={ref}
        // InView={InView}
        className="left col-12 col-md-6 pe-md-4 md-0  my-md-0 mt-4"
      >
        <h2 className="pb-3 text-center">مهارت های من</h2>
        <div className="flex-column  leftSub  justify-content-center  align-items-center  col-12  d-flex gap-4 p-4">
          <div className="col-10 ">
            {" "}
            <h3 className="text-start">Html</h3>
            <div className={`animeProgress ${inView ? "viewElemHtml" : ""}`}>
              {" "}
            </div>{" "}
          </div>{" "}
          <div className="col-10 ">
            {" "}
            <h3>Css</h3>
            <div
              className={`animeProgress ${inView ? "viewElemcss" : ""}`}
            ></div>{" "}
          </div>{" "}
          <div className="col-10 ">
            {" "}
            <h3>Sass</h3>
            <div
              className={`animeProgress ${inView ? "viewElemsass" : ""}`}
            ></div>{" "}
          </div>
          <div className="col-10 ">
            {" "}
            <h3>BootStrap</h3>
            <div
              className={`animeProgress ${inView ? "viewElemBootsratp" : ""}`}
            ></div>{" "}
          </div>
          <div className="col-10 ">
            {" "}
            <h3>JS</h3>
            <div
              className={`animeProgress ${inView ? "viewElemjs" : ""}`}
            ></div>{" "}
          </div>{" "}
          <div className="col-10 ">
            {" "}
            <h3>swiper</h3>
            <div
              className={`animeProgress ${inView ? "viewElemSwiper" : ""}`}
            ></div>{" "}
          </div>{" "}
          <div className="col-10 ">
            {" "}
            <h3>Axios</h3>
            <div
              className={`animeProgress ${inView ? "viewElemAxios" : ""}`}
            ></div>{" "}
          </div>{" "}
          <div className="col-10 ">
            {" "}
            <h3>React</h3>
            <div
              className={`animeProgress ${inView ? "viewElemReact" : ""}`}
            ></div>{" "}
          </div>
          <div className="col-10 ">
            {" "}
            <h3>Redux</h3>
            <div
              className={`animeProgress ${inView ? "viewElemRedux" : ""}`}
            ></div>{" "}
          </div>
          <div className="col-10 ">
            <h3>Regex</h3>
            <div
              className={`animeProgress ${inView ? "viewElemRegex" : ""}`}
            ></div>{" "}
          </div>
          <div className="col-10 ">
            <h3>Typescript</h3>
            <div
              className={`animeProgress ${inView ? "viewElemTypescript" : ""}`}
            ></div>{" "}
          </div>
        </div>
      </div>
      <div className="right col-12 col-md-6 ">
        <h2 className="pb-3 text-center">تحصیلات من</h2>{" "}
        <div
          className="list-unstyled rightSub w-100 gap-sm-4 d-flex flex-column
          align-items-center justify-content-center gap-2 p-4"
        >
          <li className=" w-100 gap-sm-3 d-flex flex-column">
            <h3 className="text-end">دیپلم کامپیوتر</h3>
            <p className="text-end ">تهران - هنرستان پایگاه انقلاب</p>
          </li>{" "}
          <li className=" w-100 gap-sm-3 d-flex flex-column">
            <h3 className="text-end">کاردانی کامپیوتر</h3>
            <p className="w-100 text-end">
              کرج - دانشگاه فنی حرفه ای شهید بهشتی
            </p>
          </li>
          <li className=" w-100 gap-sm-3 d-flex flex-column">
            <h3 className="text-end">دانشجو کارشناسی کامپیوتر</h3>
            <p className="w-100 text-end">
              کرج - دانشگاه فنی حرفه ای شهید بهشتی
            </p>
          </li>
        </div>
      </div>
    </div>
  );
}
