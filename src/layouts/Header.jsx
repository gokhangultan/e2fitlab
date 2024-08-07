import React, { useState } from "react";
import {
  faDumbbell,
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useHistory } from "react-router";

export default function Header() {
  const history = useHistory();

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <div className="container my-2">
      <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
        <logo>
          <img
            src="/e2textlogo.png"
            className="lg:max-w-[250px] max-w-[320px] object-contain  "
          />
        </logo>
        <nav className=" hidden lg:flex flex-col sm:flex-row justify-between gap-3 basis-2/6 header-nav ">
          <button
            className="hover:text-[#24D075]"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </button>
          <button
            className="hover:text-[#24D075]"
            onClick={() => {
              history.push("/about");
            }}
          >
            About
          </button>
          <button
            className="hover:text-[#24D075]"
            onClick={() => {
              history.push("/team");
            }}
          >
            Team
          </button>
          <button
            className="hover:text-[#24D075]"
            onClick={() => {
              history.push("/products");
            }}
          >
            Product
          </button>
          <button
            className="hover:text-[#24D075]"
            onClick={() => {
              history.push("/contact");
            }}
          >
            Contact
          </button>
        </nav>
        <div className="flex flex-col sm:flex-row justify-between gap-5 basis-1/12 items-center ">
          <button>
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl "
              style={{ color: "#24D075" }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-2xl "
              style={{ color: "#24D075" }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-2xl "
              style={{ color: "#24D075" }}
            />
          </button>
          <button className="flex lg:hidden" onClick={toggleNavVisibility}>
            <FontAwesomeIcon icon={faDumbbell} className="text-4xl" />
          </button>
        </div>
      </div>
      <nav className=" hidden lg:flex flex-col sm:flex-row justify-between gap-3 basis-2/6 header-nav ">
        <button
          className="hover:text-[#24D075]"
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </button>
        <button
          className="hover:text-[#24D075]"
          onClick={() => {
            history.push("/about");
          }}
        >
          About
        </button>
        <button
          className="hover:text-[#24D075]"
          onClick={() => {
            history.push("/team");
          }}
        >
          Team
        </button>
        <button
          className="hover:text-[#24D075]"
          onClick={() => {
            history.push("/products");
          }}
        >
          Product
        </button>
        <button
          className="hover:text-[#24D075]"
          onClick={() => {
            history.push("/contact");
          }}
        >
          Contact
        </button>
      </nav>
    </div>
  );
}
