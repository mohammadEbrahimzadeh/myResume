import React from "react";
import img2 from "../../img/2.jpg";
import { AiTwotoneCheckCircle } from "react-icons/ai";
export default function AboutMe() {
  return (
    <div className="AboutMe  gap-5 gap-sm-2 flex-column p-sm-5 p-3 d-flex flex-sm-row justify-content-center  align-items-center ">
      <div className="left flex-column  gap-sm-4 gap-2 col-12  col-sm-8 d-flex align-items-center align-self-start justify-content-start  ">
        <h1>درباره من</h1>
        <h3 className="text-center">
          من یک توسعه دهنده فرانت اند فریلنسر با بیش از یک سال تجربه هستم.
        </h3>{" "}
        <p className="m-0 p-0 text-center text-sm-end">
          در ابتدای راه در سنین نوجوانی شروع به یادگیری پایتون کردم اما بعد ها با مباحث فرانت اند
          اشنا شدم و پس از وقفه طولانی و کار در بازارهای مالی فارکس دوباره به حوزه مورد علاقه خود
          بازگشتم و مسیر طراحی سایت رو ادامه دادم
        </p>
      </div>
      <span className=" m-sm-3 d-none d-sm-block divImoji">
        <AiTwotoneCheckCircle></AiTwotoneCheckCircle>
      </span>
      <div className="right col-5 col-sm-3">
        {" "}
        <img src={img2} alt="img2" className="w-100 " />{" "}
      </div>
    </div>
  );
}
