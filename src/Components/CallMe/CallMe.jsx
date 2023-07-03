import React, { useState } from "react";
import {
  BsWhatsapp,
  BsGithub,
  BsTelegram,
  BsInstagram,
  BsFillShareFill,
} from "react-icons/bs";
export default function CallMe() {
  const [isOpenMenu, setisOpenMenu] = useState({
    isOpen: false,
    className: "",
  });
  return (
    <div className="CallMe">
      <button
        className="fs-4 "
        onClick={() => {
          isOpenMenu.isOpen
            ? setisOpenMenu({ isOpen: false, className: "closeMenu" })
            : setisOpenMenu({ isOpen: true, className: "openMenu" });
        }}
      >
        <BsFillShareFill />
      </button>
      <div className="containerMenu ">
        <div className=" menu">
          <div
            className={`mainDivMenu d-flex   align-items-center justify-content-center gap-4 p-2 px-3 ${isOpenMenu.className}`}
          >
            <div className="itemSocial">
              <a href="https://wa.me/09372617874">
                <BsWhatsapp />
              </a>
            </div>
            <div className="itemSocial">
              <a href="https://github.com/mohammadEbrahimzadeh">
                <BsGithub />{" "}
              </a>
            </div>
            <div className="itemSocial">
              <a href="https://t.me/badboy_z">
                {" "}
                <BsTelegram />{" "}
              </a>
            </div>
            <div className="itemSocial">
              <a href="https://instagram.com/k2.developer?igshid=YmMyMTA2M2Y=">
                {" "}
                <BsInstagram className="itemSocial" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
