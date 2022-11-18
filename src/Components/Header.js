import { useState } from "react";
import styled from "styled-components";
import logo from "./img/myLogo.png";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <StyledLink exact to="/">
        <Logo src={logo} />
      </StyledLink>
      <Button
        type="button"
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      ></Button>
      <Nav open={open}>
        <Ul>
          <Li>
            <Link>My Work</Link>
          </Li>
          <Li>
            <Link>My Resume</Link>
          </Li>
          <Li>
            <Link>About Me</Link>
          </Li>
        </Ul>
      </Nav>
    </Wrapper>
  );
};

const Link = styled.a`
  cursor: pointer;
`;

const Nav = styled.nav`
  @media (max-width: 581px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    font-size: 2.2rem;
    justify-content: space-around;
    padding: 3.473em;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }

  @media (min-width: 581px) {
    font-size: 1.7rem;
    margin-top: 50px;
    line-height: 1.8;
  }
`;

const Ul = styled.ul`
  @media (max-width: 581px) {
    font-size: 0.9em;
    line-height: 2.5;
  }
`;

const Li = styled.li`
  font-family: Acme;
  color: #4831d4;
`;

const Button = styled.button`
  z-index: 999;
  width: 2.78em;
  height: 2.09em;
  background: none;
  position: relative;
  display: inline-flex;
  margin-top: 0.699em;
  border: none;
  color: #ccf381;

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.4s ease;
    transform: rotate(0deg);
    background-color: currentColor;
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    color: ${({ open }) => (open ? "#4831d4;" : "currentColor")};
  }

  &::after {
    content: "";
    width: 100%;
    top: 1.13em;
    height: 2px;
    position: absolute;
    transition: 0.4s ease;
    transform: rotate(0deg);
    background-color: currentColor;
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    margin-top: ${({ open }) => (open ? "-15px" : "0px")};
    color: ${({ open }) => (open ? "#4831d4;" : "currentColor")};
  }

  @media (min-width: 581px) {
    display: none;
  }

  :first-child {
  }

  :nth-child(2) {
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 11.12em;
  padding-left: 5em;
  padding-right: 4em;
  z-index: 1000;
  @media (max-width: 581px) {
    padding-left: 3em;
    padding-right: 3em;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #ccf381 !important;
  font-family: Abel;
  font-size: 3em;
  color: white;
  margin-top: 10px;
  letter-spacing: -0.05em;
  display: inline-block;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 230px;
  height: 40px;

  @media (max-width: 581px) {
    width: 210px;
    height: 30px;
  }
`;

export default Header;
