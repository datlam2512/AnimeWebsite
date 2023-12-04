import React, { useContext } from "react";
import "./Navfilm.css";
import { ThemeContext } from "./TnemeContext";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../Context/AuthContext";
import { Button, Dropdown, Space } from "antd";
export default function Navfilm() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const items = [
    {
      key: "1",
      label: (
      <Link to='/home' style={{textDecoration:'none'}}>
         Film List
         </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to='/' style={{textDecoration:'none'}} onClick={handleSignOut}>
         LogOut
         </Link>
      ),
    },
  ];
  return (
    <div
      className="container-nav"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div
        className=" navigation"
        style={!dark ? { padding: " 0" } : { padding: " 0" }}
      >
        <nav>
          <Navbar
            className="menu-nav"
            alignLinks="right"
            brand={<span className="brand-logo">ANICINE</span>}
            id="mobile-nav"
            menuIcon={<i class="fas fa-bars"></i>}
          >
            <ul className="menu">
              <li>
                <Link
                  style={{ textDecoration: "none", textTransform: "uppercase" }}
                  to={"/"}
                  className="navitem"
                >
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", textTransform: "uppercase" }}
                  to={"/"}
                  className="navitem"
                >
                  Dạng anime
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", textTransform: "uppercase" }}
                  to={"/"}
                  className="navitem"
                >
                  Top anime
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", textTransform: "uppercase" }}
                  to={"/"}
                  className="navitem"
                >
                  Thể loại
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", textTransform: "uppercase" }}
                  to={"/"}
                  className="navitem"
                >
                  Season
                </Link>
              </li>
              <li>
                {user?.displayName ? (
                  <button >
                    {" "}
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottom"
                    >
                      <Button style={{backgroundColor:'#000',border:'0',outline:'none',color:'#fff',borderRadius:'0',boxShadow:'0', textTransform:'uppercase'}}>Account</Button>
                    </Dropdown>
                  </button>
                ) : (
                  <Link to="/login" style={{textDecoration:'none', textTransform:'uppercase'}}>Account</Link>
                )}
              </li>
            </ul>
            <div style={{ position: "relative" }}>
              <a
                className="switch-mode"
                href="#"
                onClick={toggle}
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                  outline: "none",
                }}
                data-testid="toggle-theme-btn"
              >
                <FontAwesomeIcon
                  style={!dark ? { color: "black" } : { color: "white" }}
                  icon={faLightbulb}
                />
              </a>
            </div>
          </Navbar>
        </nav>
      </div>
    </div>
  );
}
