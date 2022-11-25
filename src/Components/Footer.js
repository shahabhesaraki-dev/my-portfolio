import styled from "styled-components";

const Footer = () => {
  return (
    <MainDiv>
      <Wrapper>
        <InnerDiv>
          <LinksDiv>
            <LinkUl>
              <Li>Shahabhes@gmail.com</Li>
              <Li>+1 (438) 883-9936</Li>
              <Li>
                <Link href="https://github.com/shahabhesaraki-dev">Github</Link>
              </Li>
              <Li>
                <Link href="https://www.linkedin.com/in/shahab-hesaraki-80132317a">
                  Linkedin
                </Link>
              </Li>
            </LinkUl>
          </LinksDiv>
          <NavUl>
            <Li>
              <Link>My Work</Link>
            </Li>
            <Li>
              <Link>My Resume</Link>
            </Li>
            <Li>
              <Link>About Me</Link>
            </Li>
          </NavUl>
        </InnerDiv>
      </Wrapper>
    </MainDiv>
  );
};

const Link = styled.a`
  cursor: pointer;
  color: #badd76;
  text-decoration: none;
`;

const MainDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  color: #badd76;
  background: #3d155f;
  font-size: 1.2em;
  margin-top: 50px;
  @media (min-width: 701px) and (max-width: 1600px) {
    font-size: 1vw;
  }
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

export default Footer;
