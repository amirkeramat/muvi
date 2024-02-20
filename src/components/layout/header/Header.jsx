import { NavLink, Link } from "react-router-dom";
import { Container, Img, Menu, Nav, DropDownMenu } from "./header.style";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Search } from "../index";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  if (toggle) {
    window.document.body.style.overflowY = "hidden";
  } else {
    window.document.body.style.overflowY = "scroll";
  }
  return (
    <Container>
      <Nav>
        <Menu>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={"/movies"}
          >
            Movies
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={"/TvSeries"}
          >
            TvSeries
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={"/SignUp"}
          >
            Sign Up
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={"/AdvanceSearch"}
          >
            Advance Search
          </NavLink>
          <Search />
        </Menu>
        <i
          className="z-[9999] text-2xl block lg:hidden"
          onClick={() => setToggle((prv) => !prv)}
        >
          {toggle ? <CloseOutlined /> : <MenuOutlined />}
        </i>
        <DropDownMenu onBlur={() => setToggle(false)} $toggle={toggle}>
          <Search />

          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={"/movies"}
          >
            Movies
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={"/TvSeries"}
          >
            TvSeries
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={"/TvSeries"}
          >
            Sign Up
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={"/TvSeries"}
          >
            Advance Search
          </NavLink>
        </DropDownMenu>
        {toggle && (
          <div
            onClick={() => setToggle(false)}
            className="absolute z-[89]  right-0 top-0 h-screen w-full block md:hidden bg-gray-900/20"
          ></div>
        )}
        <Link to={"/"}>
          <Img src="./logo.png" />
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
