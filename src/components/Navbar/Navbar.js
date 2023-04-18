import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <Link to="/">Logo</Link>
            </Logo>
            <NavLinks>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Register</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/about">Search</NavLink>
            </NavLinks>
        </Nav>
    );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  height: 60px;
  padding: 0 1rem;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  & > a {
    text-decoration: none;
    color: black;
  }
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 1rem;
`;

export default Navbar;