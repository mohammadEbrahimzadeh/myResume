import React from "react";
import img2 from "../../img/2.jpg";
import { AiTwotoneCheckCircle } from "react-icons/ai";
export default function AboutMe() {
  return (
    <div className="AboutMe  gap-sm-2 flex-column p-sm-5 d-flex flex-sm-row justify-content-center align-items-center gap-5  p-3 ">
      <div className="left flex-column  gap-sm-4 col-12 col-sm-8  d-flex align-items-center align-self-start justify-content-start gap-2  ">
        <h1>درباره من</h1>
        <h3 className="text-center">
          به شدت لجباز هستم مخصوصا هنگام مواجه شدن با مشکلات
        </h3>{" "}
        <p className="text-sm-end aboutMeCOntent m-0 p-0 text-center">
          در ابتدای راه در سنین نوجوانی شروع به یادگیری پایتون کردم اما بعد ها
          با مباحث فرانت اند اشنا شدم و پس از وقفه طولانی و کار در بازارهای مالی
          فارکس دوباره به حوزه مورد علاقه خود بازگشتم و مسیر توسعه سایت رو ادامه
          دادم هم اکنون درحال فعالیت در حوزه فریلنسری هستم و اماده به کار برای
          فعالیت حضوری در تهران و کرج و به صورت ریموت خواهم بود
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
