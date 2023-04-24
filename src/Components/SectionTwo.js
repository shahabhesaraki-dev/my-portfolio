import React, { useEffect } from "react";
import styled from "styled-components";
import HTML from "./img/html-256.png";
import CSS from "./img/css-256.png";
import JS from "./img/javascript-256.png";
import BOOTSTRAP from "./img/bootstrap-256.png";
import REACT from "./img/react-256.png";
import TYPESCRIPT from "./img/typescript-256.png";
import PHP from "./img/php-256.png";
import LARAVEL from "./img/laravel-256.png";
import NODE from "./img/node-256.png";
import GIT from "./img/git-256.png";
import GITHUB from "./img/github-256.png";
import MYSQL from "./img/mysql-256.png";
import MONGODB from "./img/mongodb-256.png";
import AMAZON from "./img/amazon-256.png";
import JAVA from "./img/javaPng.png";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionTwo = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  return (
    <>
      <Wrapper>
        <FirstSection>
          <FirstContent>
            <Title>Front-End</Title>
            <Ul data-aos="fade-left">
              <Li>
                <Image src={HTML} />
                <SkillsName>HTML</SkillsName>
              </Li>
              <Li>
                <Image src={CSS} />
                <SkillsName>CSS</SkillsName>
              </Li>
              <Li>
                <Image src={JS} />
                <SkillsName>JavaScript</SkillsName>
              </Li>
              <Li>
                <Image src={TYPESCRIPT} />
                <SkillsName>TypeScript</SkillsName>
              </Li>
              <Li>
                <Image src={REACT} />
                <SkillsName>React</SkillsName>
              </Li>
              <Li>
                <BiggerImage src={JAVA} />
                <SkillsName>Java</SkillsName>
              </Li>
              <Li>
                <Image src={BOOTSTRAP} />
                <SkillsName>Bootstrap</SkillsName>
              </Li>
            </Ul>
          </FirstContent>

          <FirstSvg
            xmlns="http://www.w3.org/2000/svg"
            width="523"
            height="214"
            viewBox="0 0 523 214"
            data-shape="true"
            aria-hidden="true"
            id="cs-pattern-right"
          >
            <path
              fill="#4831d4"
              d="M313.651 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 20.388a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM332.62 39.611a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM351.587 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM370.555 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM389.522 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM465.394 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM484.362 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM503.33 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM522.298 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM313.651 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 58.834a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 78.057a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 97.28a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 116.504a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 135.726a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 154.95a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM332.62 174.173a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.001.002zM351.587 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM370.555 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM389.522 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM465.394 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM484.362 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM503.33 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.002zM522.298 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM313.651 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM408.49 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM427.458 193.395a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM446.427 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 212.619a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0z"
            ></path>
            <path
              fill="none"
              stroke="#4831d4"
              strokeMiterlimit="50"
              strokeWidth="2"
              d="M16.753 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM44.822 9.614a7.892 7.892 0 11-15.784-.002 7.892 7.892 0 0115.784.002zM72.89 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.783 0zM100.96 9.614a7.892 7.892 0 11-15.783-.002 7.892 7.892 0 0115.783.002zM129.028 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0z"
            ></path>
          </FirstSvg>
        </FirstSection>
        <SecondSection>
          <SecondContent>
            <Title>Back-End/ Tools</Title>
            <Ul data-aos="fade-right">
              <Li>
                <LittleBigger src={NODE} />
                <SkillsName style={{ marginTop: "6px" }}>Node</SkillsName>
              </Li>
              <Li>
                <BiggerImage style={{ marginTop: "-15px" }} src={PHP} />
                <SkillsName style={{ width: "45px", marginTop: "-8px" }}>
                  PHP
                </SkillsName>
              </Li>
              <Li>
                <SoBiggerImage src={LARAVEL} />
                <SkillsName style={{ marginTop: "-12px" }}>Laravel</SkillsName>
              </Li>
              <Li>
                <SoBiggerImage src={MONGODB} />
                <SkillsName style={{ marginTop: "-16px" }}>MongoDB</SkillsName>
              </Li>
              <Li>
                <BiggerImage style={{ marginTop: "-25px" }} src={MYSQL} />
                <SkillsName style={{ marginTop: "-1px" }}>MySql</SkillsName>
              </Li>
              <Li>
                <BiggerImage style={{ marginTop: "-12px" }} src={GIT} />
                <SkillsName style={{ marginTop: "-8px" }}>GIT</SkillsName>
              </Li>
              <Li>
                <SmallerImage src={GITHUB} />
                <SkillsName style={{ marginTop: "10px" }}>Github</SkillsName>
              </Li>
              <Li>
                <SmallerImage src={AMAZON} />
                <SkillsName style={{ marginTop: "10px" }}>AWS</SkillsName>
              </Li>
            </Ul>
          </SecondContent>

          <SecondSvg
            xmlns="http://www.w3.org/2000/svg"
            width="325"
            height="193"
            viewBox="0 0 325 193"
            data-shape="true"
            aria-hidden="true"
            id="cs-pattern-left"
          >
            <path
              fill="none"
              stroke="#4831d4"
              strokeMiterlimit="50"
              strokeWidth="2"
              d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"
            ></path>
          </SecondSvg>
        </SecondSection>
      </Wrapper>

      <ResponsiveWrapper>
        <ResponsiveFirstContent>
          <Title>Front-End</Title>
          <Ul data-aos="fade-up">
            <Li>
              <Image src={HTML} />
              <SkillsName>HTML</SkillsName>
            </Li>
            <Li>
              <Image src={CSS} />
              <SkillsName>CSS</SkillsName>
            </Li>
            <Li>
              <Image src={JS} />
              <SkillsName>JavaScript</SkillsName>
            </Li>
            <Li>
              <Image src={TYPESCRIPT} />
              <SkillsName>TypeScript</SkillsName>
            </Li>
            <Li>
              <Image src={REACT} />
              <SkillsName>React</SkillsName>
            </Li>
            <Li>
              <BiggerImage src={JAVA} />
              <SkillsName>Java</SkillsName>
            </Li>
            <Li>
              <Image src={BOOTSTRAP} />
              <SkillsName>Bootstrap</SkillsName>
            </Li>
          </Ul>
        </ResponsiveFirstContent>
        <ResponsiveSecondContent>
          <Title>Back-End/Tools</Title>
          <Ul data-aos="fade-up">
            <Li>
              <LittleBigger src={NODE} />
              <SkillsName style={{ marginTop: "6px" }}>Node</SkillsName>
            </Li>
            <Li>
              <BiggerImage style={{ marginTop: "-15px" }} src={PHP} />
              <SkillsName style={{ width: "45px", marginTop: "-8px" }}>
                PHP
              </SkillsName>
            </Li>
            <Li>
              <SoBiggerImage src={LARAVEL} />
              <SkillsName style={{ marginTop: "-17px" }}>Laravel</SkillsName>
            </Li>
            <Li>
              <SoBiggerImage src={MONGODB} />
              <SkillsName style={{ marginTop: "-16px" }}>MongoDB</SkillsName>
            </Li>
            <Li>
              <BiggerImage style={{ marginTop: "-25px" }} src={MYSQL} />
              <SkillsName style={{ marginTop: "-1px" }}>MySql</SkillsName>
            </Li>
            <Li>
              <BiggerImage style={{ marginTop: "-12px" }} src={GIT} />
              <SkillsName style={{ marginTop: "-10px" }}>GIT</SkillsName>
            </Li>
            <Li>
              <SmallerImage src={GITHUB} />
              <SkillsName style={{ marginTop: "10px" }}>Github</SkillsName>
            </Li>
            <Li>
              <SmallerImage src={AMAZON} />
              <SkillsName style={{ marginTop: "10px" }}>AWS</SkillsName>
            </Li>
          </Ul>
        </ResponsiveSecondContent>
      </ResponsiveWrapper>
    </>
  );
};

const SkillsName = styled.p`
  font-family: Abel;
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto 60px auto;
  padding: 20px 0;
`;

const Li = styled.li`
  list-style: none;
  width: 100px;
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-right: 10px;
`;

const SmallerImage = styled.img`
  width: 50px;
`;

const Image = styled.img`
  width: 60px;
`;

const LittleBigger = styled.img`
  width: 70px;
`;

const BiggerImage = styled.img`
  width: 80px;
`;

const SoBiggerImage = styled.img`
  width: 90px;
  height: 95px;
  margin-top: -25px;
`;

const ResponsiveWrapper = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ResponsiveFirstContent = styled.article`
  padding: 2rem 1rem;
`;

const ResponsiveSecondContent = styled.article`
  padding: 0 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 701px) {
    padding: 3rem 6rem;
  }

  @media (min-width: 1000px) and (max-width: 1500px) {
    max-width: 1500px;
    font-size: 1vw;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const FirstSection = styled.article`
  display: flex;
  position: relative;
`;

const FirstContent = styled.div`
  position: relative;
  text-align: left;
  @media (min-width: 1145px) {
    width: 50%;
  }
  @media (min-width: 1000px) and (max-width: 1144px) {
    width: 60%;
  }
`;

const FirstSvg = styled.svg`
  width: 20em;
  height: 14.87em;
  margin-right: 10em;
  top: 0;
  right: 0;
  position: absolute;
`;

const SecondSection = styled.article`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const SecondContent = styled.div`
  position: relative;
  @media (min-width: 1145px) {
    width: 50%;
  }
  @media (min-width: 1000px) and (max-width: 1144px) {
    width: 60%;
  }
`;

const SecondSvg = styled.svg`
  left: 0;
  top: 5em;
  width: 13em;
  height: 13.41em;
  margin-left: 15em;
  right: 0;
  position: absolute;
`;

const Title = styled.h1`
  font-family: Acme;
  @media (min-width: 701px) {
    max-width: 40vw;
  }
  font-size: 2.8em;
  font-weight: 900;
  line-height: 1.1;
  color: #144361;
`;

export default SectionTwo;
