import React from "react";
import img from "./../../img/ebrahimzadehk2_.jpg";
function Header() {
  return (
    <div className="Header  flex-column flex-sm-row-reverse p-sm-5 d-flex justify-content-evenly align-items-center w-100 h-100  gap-5 p-4">
      <div className="divRight col-sm-8 col-12 gap-sm-3 d-flex flex-column justify-content-center align-items-center align-items-sm-end gap-3 ">
        <h1 className="text-sm-end m-0 p-0 text-center">
          {" "}
          به وبسایت من خوش آمدید
        </h1>
        <h2 className="text-sm-end m-0 p-0 text-center"> K2</h2>
        <p className="text-sm-end  m-0 p-0 text-center">
          من یک توسعه دهنده فرانت هستم
        </p>
        <p className="text-sm-end  m-0 p-0 text-center">
          من خدمات طراحی و توسعه برای مشتریان در هر مقیاس ارائه می دهم. متخصص در
          ایجاد وب سایت ها، خدمات وب و فروشگاه های آنلاین زیبا و مدرن
        </p>
        <a href="https://uupload.ir/view/4_5816907571725865046_5ozf.pdf">
          <button className="p-2">دریافت رزومه</button>
        </a>
      </div>
      <div className="divLeft col-sm-3  col-5 ">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Header;
