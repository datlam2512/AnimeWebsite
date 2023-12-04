import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Footer } from "react-materialize";
export default function Footeranime() {
  return (
    <div className="Footer">
      <Footer
        className="example"
        copyrights={<p>&copy 2023 Copyright </p>}
        links={
          <ul className="link-footer">
            <li>
              <Link to={"/contact"} style={{ textDecoration: "none" }}>
                <p>Contact</p>
              </Link>
            </li>
            <li>
              <Link to={"/about"} style={{ textDecoration: "none" }}>
                <p >
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link to={"/news"} style={{ textDecoration: "none" }}>
                <p >
                  News
                </p>
              </Link>
            </li>
          </ul>
        }
      >
        <h5
          className=""
         
        >
          Anime Cinemania
        </h5>
        <p className="">
          Anime Cinemania is your ultimate destination to explore, celebrate,
          and revel in the magic of anime on the big screen.
        </p>
      </Footer>
    </div>
  );
}
