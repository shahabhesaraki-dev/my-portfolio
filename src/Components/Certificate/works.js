import React from "react";
import styled from "styled-components";
import SecondHeader from "../SecondHeader";
import PORTFOLIO from "../img/Portfolio.png";
import ANIMAL from "../img/AnimalProject.png";
import ECOMMERCE from "../img/Ecommerce-project.png";
import NEWS from "../img/NewProject.png";
import SLINGAIR from "../img/Slingair-project.png";
import COOKIEGAME from "../img/cookieGame-project.png";
import HANGMAN from "../img/hangMan.png";
import { useNavigate } from "react-router-dom";

const Works = () => {
  const navigate = useNavigate();
  return (
    <MainDiv>
      <SecondHeader />

      <MainSection>
        <Head>
          <H1>My Projects</H1>
          <P>Some of the projects I've worked on.</P>
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
                <Skills>HTML, CSS, JavaScript, React</Skills>
                <FlexDiv>
                  <Github href="https://github.com/shahabhesaraki-dev/my-portfolio">
                    Github
                  </Github>
                  <Live
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        window.scrollTo(0, 0);
                      }, 0);
                    }}
                  >
                    Live (Responsive)
                  </Live>
                </FlexDiv>
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
                <FlexDiv>
                  <Github href="https://github.com/shahabhesaraki-dev/E-Commerce-Project">
                    Github
                  </Github>
                  <Live href="https://myecommerceapps.netlify.app">
                    Live (Non Responsive)
                  </Live>
                </FlexDiv>
              </Detail>
            </Li>
            <Li>
              <Figure>
                <LogoImage src={ANIMAL} />
              </Figure>
              <Detail>
                <H2>Animal Care</H2>
                <H3>Main skills:</H3>
                <Skills>
                  HTML, CSS, JavaScript, React, Node, Express, MongoDB
                </Skills>
                <FlexDiv>
                  <Github href="https://github.com/shahabhesaraki-dev/NewAnimalCare">
                    Github
                  </Github>
                  <Live href="https://www.youtube.com/watch?v=psBpBCLUfX8">
                    Live
                  </Live>
                </FlexDiv>
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
                <FlexDiv>
                  <Github href="https://github.com/shahabhesaraki-dev/Concordia-FinalProject">
                    Github
                  </Github>
                  <Live href="https://www.youtube.com/watch?v=UiRDtMnco44&ab_channel=ShahabHesaraki">
                    Live (Non Responsive)
                  </Live>
                </FlexDiv>
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
                <FlexDiv>
                  <Github href="https://github.com/shahabhesaraki-dev/SlingAir">
                    Github
                  </Github>
                  <Live href="https://myslingairapp.netlify.app">
                    Live (Responsive)
                  </Live>
                </FlexDiv>
              </Detail>
            </Li>
            <Li>
              <Figure>
                <LogoImage src={COOKIEGAME} />
              </Figure>
              <Detail>
                <H2>CookieGame</H2>
                <H3>Main skills:</H3>
                <Skills>HTML, CSS, JavaScript, React</Skills>
                <FlexDiv>
                  <Github href="https://github.com/shahabhesaraki-dev/Cookie-Game">
                    Github
                  </Github>
                  <Live href="https://mycookiegameapp.netlify.app">
                    Live (Responsive)
                  </Live>
                </FlexDiv>
              </Detail>
            </Li>
            <Li>
              <Figure>
                <LogoImage src={HANGMAN} />
              </Figure>
              <Detail>
                <H2>HangMan</H2>
                <H3>Main skills:</H3>
                <Skills>HTML, CSS, JavaScript, React</Skills>
                <FlexDiv>
                  <Github href="https://github.com/shahabhesaraki-dev/HangMan">
                    Github
                  </Github>
                  <Live href="https://myhangmanproject.netlify.app">
                    Live (Responsive)
                  </Live>
                </FlexDiv>
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
  margin-top: 150px;
  padding: 0 1.5rem;
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
  width: 380px;
  @media (min-width: 940px) {
    flex-basis: calc((90%) / 3);
  }

  @media (min-width: 661px) and (max-width: 940px) {
    flex-basis: calc((90%) / 2);
  }

  &:hover {
    transform: translate(0, -10px);
    box-shadow: 0px 8px 6px -6px rgb(235, 234, 242, 58%);
  }

  @media (max-width: 480px) {
    width: 380px;
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
  color: #071b34;
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
  font-family: Abel;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
  color: #071b34;
  cursor: pointer;
  text-decoration: none;
  margin-right: 3px;
`;

const Live = styled.a`
  &::before {
    content: "|";
    color: black;
    margin-right: 3px;
  }
  display: flex;
  justify-content: center;
  font-family: Abel;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
  color: #071b34;
  cursor: pointer;
  text-decoration: none;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default Works;
