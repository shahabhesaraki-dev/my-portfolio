import React from "react";
import styled from "styled-components";
import Resume from "./File/Shahab-Hesaraki -CV.pdf";

const Footer = () => {
  return (
    <MainDiv>
      <Wrapper>
        <InnerDiv>
          <LinksDiv>
            <LinkUl>
              <Li>Shahabhes@gmail.com</Li>
              <Li>
                <Link
                  href="https://github.com/shahabhesaraki-dev"
                  target="_blank"
                >
                  Github
                </Link>
              </Li>
              <Li>
                <Link
                  href="https://www.linkedin.com/in/shahab-hesaraki"
                  target="_blank"
                >
                  Linkedin
                </Link>
              </Li>
            </LinkUl>
          </LinksDiv>
          <NavUl>
            <Li>
              <Link href="#myWork">My Work</Link>
            </Li>
            <Li>
              <Link href={Resume}>My Resume</Link>
            </Li>
            <Li>
              <Link href="#aboutMe">About Me</Link>
            </Li>
          </NavUl>
        </InnerDiv>
      </Wrapper>
      <Sign>© Shahab Hesaraki 2022</Sign>
    </MainDiv>
  );
};

const Link = styled.a`
  cursor: pointer;
  color: #86b2cb;
  text-decoration: none;
`;

const MainDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  color: #86b2cb;
  background: #071b34;
  font-size: 1.2em;
  margin-top: 50px;
  @media (min-width: 701px) and (max-width: 1600px) {
    font-size: 1vw;
  }
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-direction: column;
  @media (min-width: 701px) {
    padding: 2rem 10rem;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  font-size: 1.2em;
`;

const InnerDiv = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 580px) {
    justify-content: center;
  }
`;

const LinksDiv = styled.div`
  margin-right: 18vw;
  font-size: 1em;
  line-height: 2.4;
  position: relative;
`;

const LinkUl = styled.ul`
  font-size: 1.15em;
  list-style-type: none;
`;

const Li = styled.li`
  list-style-type: none;
  font-family: Abel;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const NavUl = styled.ul`
  line-height: 2.4;
  font-size: 1.15em;
  margin-top: 2.05em;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Sign = styled.h3`
  font-family: Acme;
  color: #86b2cb;
  font-size: 19px;
  font-weight: 100;
  padding: 5px;
  @media (max-width: 580px) {
    font-size: 16px;
  }
`;

export default Footer;
