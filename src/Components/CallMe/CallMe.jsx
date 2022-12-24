import React from "react";
import { BsWhatsapp, BsGithub, BsTelegram, BsInstagram } from "react-icons/bs";
export default function CallMe() {
  return (
    <div className="CallMe my-3 ">
      <div>
        <h1 className="text-center">تماس با من </h1>
        <ul className="col-12 mt-3 d-flex list-unstyled  align-items-center justify-content-evenly  flex-wrap  ">
          <li>
            <a href="https://wa.me/09372617874">
              {" "}
              <BsWhatsapp></BsWhatsapp>
            </a>
          </li>
          <li>
            <a href="https://t.me/badboy_z">
              {" "}
              <BsTelegram></BsTelegram>
            </a>{" "}
          </li>
          <li>
            <a href="https://instagram.com/k2.developer?igshid=YmMyMTA2M2Y=">
              {" "}
              <BsInstagram></BsInstagram>
            </a>{" "}
          </li>
          <li>
            <a href="https://github.com/mohammadEbrahimzadeh">
              {" "}
              <BsGithub></BsGithub>
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
