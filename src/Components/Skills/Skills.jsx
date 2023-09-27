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
            <h3>Material Ui Components</h3>
            <div
              className={`animeProgress ${inView ? "viewElemMaterialUi " : ""}`}
            ></div>{" "}
          </div>
          <div className="col-10 ">
            {" "}
            <h3>Tailwind</h3>
            <div
              className={`animeProgress ${inView ? "viewElemcss" : ""}`}
            ></div>{" "}
          </div>{" "}
          <div className="col-10 ">
            {" "}
            <h3>JS</h3>
            <div
              className={`animeProgress ${inView ? "viewElemjs" : ""}`}
            ></div>{" "}
          </div>{" "}
          <div className="col-10 ">
            {" "}
            <h3>Swiper</h3>
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
            <h3>Formik & Yup</h3>
            <div
              className={`animeProgress ${inView ? "viewElemTypescript" : ""}`}
            ></div>{" "}
          </div>
          <div className="col-10 ">
            <h3>Typescript</h3>
            <div
              className={`animeProgress ${inView ? "viewElemTypescript" : ""}`}
            ></div>{" "}
          </div>
          <div className="col-10 ">
            <h3>Git & Github</h3>
            <div
              className={`animeProgress ${inView ? "viewElemGithub" : ""}`}
            ></div>{" "}
          </div>
        </div>
      </div>
      <div className=" col-12 col-md-6 ">
        <div className="col-12 right pb-3 text-center">
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
        <div className="col-12 right mt-3 pb-3 text-center">
          <h2 className="pb-3 text-center"> سوابق کاری</h2>{" "}
          <div
            className="list-unstyled rightSub w-100 gap-sm-4 d-flex flex-column
          align-items-center justify-content-center gap-3 px-3 py-4"
          >
            <li className=" w-100  d-flex flex-column  border-1  border-end  gap-3  border-white px-2  ">
              <h3 className="JoBItemTitle  text-end">
                تدریس پایه یازدهم فنی درس مدیریت سیستم های اطلاعاتی و طراحی وب
              </h3>
              <p className="fs-6  text-end">هنرستان فنی و حرفه ای بحارالعلوم</p>
              <p className="text-end ">مهر 1402 - تا اکنون</p>
            </li>{" "}
            <li className=" w-100  d-flex flex-column  border-1  border-end  gap-3  border-white px-2  ">
              <h3 className="JoBItemTitle  text-end">
                تدریس پایه یازدهم فنی درس تولید محتوای الکترونیک و برنامه سازی
              </h3>
              <p className="fs-6  text-end">هنرستان فنی و حرفه ای بحارالعلوم</p>
              <p className="text-end ">مهر 1402 - تا اکنون</p>
            </li>{" "}
            <li className=" w-100  d-flex flex-column  border-1  border-end  gap-3  border-white px-2  ">
              <h3 className="JoBItemTitle  text-end">منتورینگ</h3>
              <p className="fs-6  text-end">تدریس خصوصی</p>
              <p className="text-end ">تیر 1402 - شهریور 1402</p>
            </li>{" "}
            <li className=" w-100  d-flex flex-column  border-1  border-end  gap-3  border-white px-2  ">
              <h3 className="JoBItemTitle  text-end"> کمک منتور ری اکت</h3>
              <p className="fs-6  text-end">آکادمی سبزلرن</p>
              <p className="text-end ">خرداد 1402 - تا اکنون</p>
            </li>{" "}
            <li className=" w-100 gap-sm-3 d-flex flex-column  border-1  border-end      border-white  px-2 ">
              <h3 className="JoBItemTitle text-end">به صورت فریلنسری</h3>
              <p className="text-end ">شهریور 1401 - تا اکنون</p>
            </li>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
