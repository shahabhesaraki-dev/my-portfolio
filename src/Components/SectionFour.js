import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionFour = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <MainSection id="myWork">
      <Wrapper>
        <SubDiv>
          <AllDives>
            <FirstPart>
              <Article data-aos="fade-right">
                <ContentDiv>
                  <Title>Projects</Title>
                  <Paragraph>
                    I worked on a range of projects and applications during my
                    studies. I share some of them to show my knowledge and
                    skills.
                  </Paragraph>
                </ContentDiv>
              </Article>
              <Button
                onClick={() => {
                  navigate("/works");
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 0);
                }}
              >
                <DivButton data-aos="fade-up">
                  <P>See my works</P>
                  <SvgButton
                    width="72"
                    height="22"
                    viewBox="0 0 72 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#144361"
                      strokeWidth="2"
                      strokeMiterlimit="0"
                      d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
                    ></path>
                    <Path
                      fill="none"
                      stroke="#144361"
                      strokeWidth="2"
                      strokeMiterlimit="0"
                      d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
                    ></Path>
                  </SvgButton>
                </DivButton>
              </Button>
            </FirstPart>
            <SecondPart>
              <Article data-aos="fade-left">
                <ContentDiv>
                  <Title>Certificates</Title>
                  <Paragraph>
                    I've graduated from some amazing bootcamps and courses in
                    frontend and backend programming and received their degrees.
                  </Paragraph>
                </ContentDiv>
              </Article>
              <Button
                onClick={() => {
                  navigate("/certificate");
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 0);
                }}
              >
                <DivButton data-aos="fade-up">
                  <P>See my certificates</P>
                  <SvgButton
                    width="72"
                    height="22"
                    viewBox="0 0 72 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#144361"
                      strokeWidth="2"
                      strokeMiterlimit="0"
                      d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
                    ></path>
                    <Path
                      fill="none"
                      stroke="#144361"
                      strokeWidth="2"
                      strokeMiterlimit="0"
                      d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
                    ></Path>
                  </SvgButton>
                </DivButton>
              </Button>
            </SecondPart>
          </AllDives>
        </SubDiv>
      </Wrapper>
      <ResponsiveWrapper>
        <SubDiv>
          <AllDives>
            <FirstPart data-aos="fade-up">
              <Article>
                <ContentDiv>
                  <Title>Projects</Title>
                  <Paragraph>
                    I worked on a range of projects and applications during my
                    studies. I share some of them to show my knowledge and
                    skills.
                  </Paragraph>
                </ContentDiv>
              </Article>
              <Button
                onClick={() => {
                  navigate("/works");
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 0);
                }}
              >
                <DivButton>
                  <P>See my works</P>
                  <SvgButton
                    width="72"
                    height="22"
                    viewBox="0 0 72 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#144361"
                      strokeWidth="2"
                      strokeMiterlimit="0"
                      d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
                    ></path>
                    <Path
                      fill="none"
                      stroke="#144361"
                      strokeWidth="2"
                      strokeMiterlimit="0"
                      d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
                    ></Path>
                  </SvgButton>
                </DivButton>
              </Button>
            </FirstPart>
            <SecondPart data-aos="fade-up">
              <Article>
                <ContentDiv>
                  <Title>Certificates</Title>
                  <Paragraph>
                    I've graduated from some amazing bootcamps and courses in
                    frontend and backend programming and received their degrees.
                  </Paragraph>
                </ContentDiv>
              </Article>
              <Button
                onClick={() => {
                  navigate("/certificate");
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 0);
                }}
              >
                <DivButton>
                  <P>See my certificates</P>
                  <SvgButton
                    width="72"
                    height="22"
                    viewBox="0 0 72 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#144361"
                      strokeWidth="2"
                      strokeMiterlimit="0"
                      d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
                    ></path>
                    <Path
                      fill="none"
                      stroke="#144361"
                      strokeWidth="2"
                      strokeMiterlimit="0"
                      d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
                    ></Path>
                  </SvgButton>
                </DivButton>
              </Button>
            </SecondPart>
          </AllDives>
        </SubDiv>
      </ResponsiveWrapper>
    </MainSection>
  );
};

const MainSection = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  @media (min-width: 701px) and (max-width: 1600px) {
    font-size: 1vw;
  }
`;

const ResponsiveWrapper = styled.div`
  @media (min-width: 901px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  max-width: 100%;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 1500px) {
    padding: 0 calc(6em - 2em);
  }

  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  margin-top: 10px;
`;

const SubDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;

  @media (min-width: 1024px) and (min-height: 665px) and (max-height: 1500px) {
    min-height: 30em;
  }

  @media (max-width: 900px) {
    padding: 0 4vw;
  }
`;

const AllDives = styled.div`
  @media (min-width: 1024px) and (min-height: 665px) and (max-height: 1500px) {
    min-height: 30em;
  }
  width: 100%;
  display: flex;
  background-color: #fff;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const FirstPart = styled.div`
  @media (min-width: 900px) {
    border-bottom-width: 0;
    border-right-width: 0.15rem;
  }

  border-style: solid;
  border-width: 0 0 0.15rem 0;
  border-color: #144361;
  width: 50%;
  padding: 6.95em;
  padding-left: 8em;

  @media (max-width: 900px) {
    width: 100%;
    border-style: solid;
    border-width: 0 0 0.15rem 0;
    border-color: #144361;
    padding: 5.95em;
    padding-left: 3em;
  }
`;

const SecondPart = styled.div`
  @media (min-width: 581px) {
    border-bottom-width: 0;
  }
  width: 50%;
  padding: 6.95em;
  padding-left: 8em;
  @media (max-width: 900px) {
    width: 100%;
    padding: 5.95em;
    padding-left: 3em;
  }
`;

const Article = styled.article`
  text-align: left;
  position: relative;
  margin-bottom: 4.5em;
`;

const ContentDiv = styled.div`
  position: relative;
`;

const Title = styled.h1`
  font-family: Acme;
  font-size: 3.2em;
  margin: 0;
  font-weight: 900;
  line-height: 1.1;
  color: #144361;
  letter-spacing: 1px;
`;

const Paragraph = styled.p`
  font-family: Abel;
  line-height: 1.2;
  font-size: 1.6em;
  letter-spacing: 0.02em;
  max-width: 701px;
  color: #144361;
  margin-top: 20px;
`;

const Button = styled.a`
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.9em;
  user-select: none;
  display: inline-flex;
  overflow: hidden;
  background: transparent;
  white-space: nowrap;
  min-width: 23.222em;
  font-family: Abel;
  text-decoration: none;
`;

const SvgButton = styled.svg`
  width: 3.1em;
  height: 1.7em;
  margin-left: 1.55em;
`;

const Path = styled.path``;

const P = styled.p`
  color: #144361;
  z-index: 10;
`;

const DivButton = styled.div`
  z-index: 1;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1.25em 3em;
  width: 100%;
  color: #144361;
  border: 1px solid currentColor;
  &::before {
    content: "";
    width: 101%;
    height: 108%;
    pointer-events: none;
    z-index: -1;
    position: absolute;
    top: -0.1em;
    bottom: 0;
    left: 0;
    right: 0;
    background: currentColor;
    transform: translateX(-100%);
    transition: 200ms ease-in-out;
  }

  &:hover {
    &::before {
      transform: translateX(0);
    }
  }

  &:hover ${Path} {
    stroke: #fff;
  }

  &:hover ${P} {
    color: #fff;
  }
`;

export default SectionFour;
