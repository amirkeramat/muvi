import { NavLink } from "react-router-dom";
import { Container, Img, Menu, Nav, SearchIcon } from "./header.style";
import {Search} from '../index'
const Header = () => {
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
            to={"/TvSeries"}
          >
            Sign Up
          </NavLink>
          <Search/>
        </Menu>
        <Img src="./logo.png" />
      </Nav>
    </Container>
  );
};

export default Header;
