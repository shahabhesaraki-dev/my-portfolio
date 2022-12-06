import React from "react";
import styled from "styled-components";
import SecondHeader from "../SecondHeader";
import PORTFOLIO from "../img/Portfolio.png";
import ANIMAL from "../img/AnimalProject.png";
import ECOMMERCE from "../img/Ecommerce-project.png";
import NEWS from "../img/NewProject.png";
import SLINGAIR from "../img/Slingair-project.png";
import FACESPACE from "../img/Facespace-project.png";

const Works = () => {
  return (
    <MainDiv>
      <SecondHeader />

      <MainSection>
        <Head>
          <H1>My Projects</H1>
          <P>Some of the projects I've made.</P>
        </Head>
        <Section>
          <Ul>
            <Li>
              <Figure>
                <LogoImage src={PORTFOLIO} />
              </Figure>
              <Detail>
                <H2>Portfolio</H2>
                <H3>Main skills:</H3>
                <Skills>
                  HTML, CSS, JavaScript, React, Node, Express, MongoDB
                </Skills>
                <Github href="https://github.com/shahabhesaraki-dev/my-portfolio">
                  view github
                </Github>
              </Detail>
            </Li>
            <Li>
              <Figure>
                <LogoImage src={ECOMMERCE} />
              </Figure>
              <Detail>
                <H2>E-Commerce</H2>
                <H3>Main skills:</H3>
                <Skills>
                  HTML, CSS, JavaScript, React, Node, Express, MongoDB
                </Skills>
                <Github href="https://github.com/shahabhesaraki-dev/E-Commerce-Project">
                  view github
                </Github>
              </Detail>
            </Li>
            <Li>
              <Figure>
                <LogoImage src={ANIMAL} />
              </Figure>
              <Detail>
                <H2>Animal care</H2>
                <H3>Main skills:</H3>
                <Skills>
                  HTML, CSS, JavaScript, React, Node, Express, MongoDB
                </Skills>
                <Github href="https://github.com/shahabhesaraki-dev/animalCare">
                  view github
                </Github>
              </Detail>
            </Li>
            <Li>
              <Figure>
                <LogoImage src={NEWS} />
              </Figure>
              <Detail>
                <H2>News</H2>
                <H3>Main skills:</H3>
                <Skills>
                  HTML, CSS, JavaScript, React, Node, Express, MongoDB
                </Skills>
                <Github href="https://github.com/shahabhesaraki-dev/Concordia-FinalProject">
                  view github
                </Github>
              </Detail>
            </Li>
            <Li>
              <Figure>
                <LogoImage src={SLINGAIR} />
              </Figure>
              <Detail>
                <H2>SlingAir</H2>
                <H3>Main skills:</H3>
                <Skills>
                  HTML, CSS, JavaScript, React, Node, Express, MongoDB
                </Skills>
                <Github href="https://github.com/shahabhesaraki-dev/SlingAir">
                  view github
                </Github>
              </Detail>
            </Li>
            <Li>
              <Figure>
                <LogoImage src={FACESPACE} />
              </Figure>
              <Detail>
                <H2>FaceSpace</H2>
                <H3>Main skills:</H3>
                <Skills>HTML, CSS, JavaScript, React, Node, Express</Skills>
                <Github href="https://github.com/shahabhesaraki-dev/FaceSpace">
                  view github
                </Github>
              </Detail>
            </Li>
          </Ul>
        </Section>
      </MainSection>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f4fc;
`;

const MainSection = styled.div`
  display: block;
  margin-top: 200px;
  padding: 0 4.5rem;
  @media (min-width: 651px) {
    font-size: 0.9rem;
  }
`;

const Head = styled.div`
  position: relative;
  text-align: center;
  margin-top: 1.1em;
  margin-bottom: 20px;
  padding-bottom: 40px;
`;

const H1 = styled.h1`
  font-family: Acme;
  font-size: 45px;
`;

const P = styled.p`
  font-family: Abel;
  margin-top: 18px;
  font-size: 22px;
`;

const Section = styled.div``;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const Li = styled.li`
  margin-bottom: 1.2em;
  border-radius: 0.2rem;
  background-color: white !important;
  box-shadow: 0px 8px 6px -6px rgb(235, 234, 242, 58%);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transition-property: transform, box-shadow;
  list-style-type: none;
  width: 410px;
  @media (min-width: 940px) {
    flex-basis: calc((100% - 2em) / 3);
  }

  @media (min-width: 661px) and (max-width: 940px) {
    flex-basis: calc((100% - 1em) / 2);
  }

  &:hover {
    transform: translate(0, -10px);
    box-shadow: 0px 8px 6px -6px rgb(235, 234, 242, 58%);
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const Figure = styled.figure`
  margin: 0;
  height: 15em;
  display: flex;
  align-items: center;
  transition: filter 0.3s;
  justify-content: center;
  background: rgba(245, 244, 252, 0.62);
  background-color: white;
`;

const LogoImage = styled.img`
  width: 340px;
  height: 180px;
  @media (max-width: 480px) {
    width: 280px;
    height: 160px;
  }
`;

const Detail = styled.div`
  padding: 2em;
`;

const H2 = styled.h2`
  font-family: Acme;
  font-size: 40px;
  text-align: center;
  color: #4831d4;
`;

const H3 = styled.h3`
  font-family: Open Sans;
  font-size: 17px;
  text-align: center;
  margin-top: 30px;
  color: black;
`;

const Skills = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  text-align: center;
  margin-top: 8px;
  color: black;
  width: 100%;
  line-height: 1.4;
`;

const Github = styled.a`
  display: flex;
  justify-content: center;
  font-family: Open Sans;
  font-size: 17px;
  text-align: center;
  margin-top: 30px;
  color: #4831d4;
  cursor: pointer;
  text-decoration: none;
`;

export default Works;
