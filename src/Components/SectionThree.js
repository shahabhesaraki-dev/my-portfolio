import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import MYAVATAR from "./img/NewAvatar.png";

const SectionThree = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  return (
    <>
      <MainSection id="aboutMe">
        <Wrapper>
          <Article>
            <ContentDiv>
              <Title data-aos="fade-up">About me</Title>
              <br />
              <Paragraph data-aos="fade-up">
                Hello again! Thanks for scrolling this far!! I am a full-stack
                web developer with over 3 years of learning experience and over
                1 year of work experience in a couple of programming languages.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I consider myself a MERN stack developer. I've been working
                part-time as a Junior Full-Stack web developer at Araz IT
                Solutions in Canada since February 2022.
              </Paragraph>
              <Paragraph>
                Iam also learning new languages to expand and improve my skills.
                During my most recent bootcamp at Concordia University, I
                studied Front-end and Back-end development that focused strongly
                on using MERN stack. I started with React for the front-end and
                continued with Express, Node, and MongoDB for the back-end. I
                also completed some projects using MERN stack, including HTML,
                CSS, and JavaScript.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I am also able to work on PHP projects. As I have two years of
                learning experience in PHP and Laravel in Tehran institute of
                technology and one year of experience as an intern in Iran.
              </Paragraph>
              <Paragraph style={{ marginBottom: "10px" }} data-aos="fade-up">
                I'm currently working on a new project (Animal Care). You may
                find it among my works. In addition, I am learning Typescript. I
                really enjoy learning new languages. When I'm not programming or
                studying, I'm probably watching football. This is my favourite
                activity.
              </Paragraph>
            </ContentDiv>
          </Article>
          <Figure data-aos="fade-left">
            <Avatar src={MYAVATAR} />
          </Figure>
        </Wrapper>
        <ResponsiveWrapper>
          <Article>
            <ContentDiv>
              <Title data-aos="fade-up">About me</Title>
              <br />
              <Paragraph data-aos="fade-up">
                Hello again! Thanks for scrolling this far!! I am a full-stack
                web developer with over 3 years of learning experience and over
                1 year of work experience in a couple of programming languages.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I consider myself a MERN stack developer. I've been working
                part-time as a Junior Full-Stack web developer at Araz IT
                Solutions in Canada since February 2022.
              </Paragraph>
              <Paragraph>
                Iam also learning new languages to expand and improve my skills.
                During my most recent bootcamp at Concordia University, I
                studied Front-end and Back-end development that focused strongly
                on using MERN stack. I started with React for the front-end and
                continued with Express, Node, and MongoDB for the back-end. I
                also completed some projects using MERN stack, including HTML,
                CSS, and JavaScript.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I am also able to work on PHP projects. As I have two years of
                learning experience in PHP and Laravel in Tehran institute of
                technology and one year of experience as an intern in Iran.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I'm currently working on a new project (Animal Care). You may
                find it among my works. In addition, I am learning Typescript. I
                really enjoy learning new languages. When I'm not programming or
                studying, I'm probably watching football. This is my favourite
                activity.
              </Paragraph>
            </ContentDiv>
          </Article>
        </ResponsiveWrapper>
      </MainSection>
    </>
  );
};

const MainSection = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #071b34;
`;

const ResponsiveWrapper = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2em;
  padding: 0 15vw;
  font-size: 0.8rem;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 701px) {
    padding: 0 10rem;
    margin-top: 1.5vh;
    align-items: center;
  }
  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }
  @media (min-width: 701px) and (max-width: 1600px) {
    font-size: 1vw;
  }
`;

const Article = styled.article`
  text-align: left;
  position: relative;
`;

const Figure = styled.figure`
  display: flex;
  position: relative;
  width: 46em;
  max-width: 100%;

  @media (min-width: 581px) {
    margin: 0;
  }
`;

const ContentDiv = styled.div`
  text-align: left;
  position: relative;
`;

const Title = styled.h1`
  @media (min-width: 1000px) {
    max-width: 27.6vw;
  }

  @media (max-width: 1000px) {
    font-size: 3em;
  }
  color: #86b2cb;
  font-size: 4em;
  font-weight: 900;
  line-height: 1.1;
  font-family: Acme;
`;

const Paragraph = styled.p`
  @media (min-width: 1000px) {
    width: 27vw;
  }
  color: #fff;
  max-width: 701px;
  font-size: 1.2em;
  @media (min-width: 1000px) {
    width: 28vw;
  }
  font-family: Abel;
  margin-top: 15px;
  line-height: 1.3;
`;

const Avatar = styled.img`
  @media (min-width: 1000px) {
    height: 42.14em;
    margin-left: 100px;
  }
  flex-shrink: 0;
  max-width: inherit;

  @media (max-width: 1000px) {
    height: 40vh;
    min-height: 300px;
    margin-top: 20px;
  }
`;

export default SectionThree;
