import React from "react";
import styled from "styled-components";
import SecondHeader from "../SecondHeader";
import ConcordiaLogo from "../img/concordia.png";
import Mft from "../img/MFT.png";
import Diploma from "../File/Concordia-Certificate.pdf";
import Front from "../File/Front-end Certificates.pdf";
import Back from "../File/Back-end (PHP) Certificate.pdf";

const Certificate = () => {
  return (
    <MainDiv>
      <SecondHeader />

      <MainSection>
        <Head>
          <H1>My Certificates</H1>
          <P>Some of the courses I've taken in the past.</P>
        </Head>
        <Section>
          <Ul>
            <Li>
              <Figure>
                <LogoImage src={ConcordiaLogo} />
              </Figure>
              <Detail>
                <H2>Full-Stack web development</H2>
                <H3>Main skills:</H3>
                <Skills>HTML, CSS, JavaScript, React, Node, MongoDB</Skills>
                <DiplomaLink href={Diploma}>view certificate</DiplomaLink>
              </Detail>
            </Li>
            <Li>
              <Figure>
                <BiggerLogoImage src={Mft} />
              </Figure>
              <Detail>
                <H2>Full-Stack web development</H2>
                <H3>Main skills:</H3>
                <Skills>HTML, CSS, JavaScript, PHP, Laravel, MySQL</Skills>
                <DiplomaLink href={Back}>view certificate</DiplomaLink>
              </Detail>
            </Li>
            <Li>
              <Figure>
                <BiggerLogoImage src={Mft} />
              </Figure>
              <Detail>
                <H2>Front-End development</H2>
                <H3>Main skills:</H3>
                <Skills>HTML, CSS, JavaScript, Bootstrap, JQuery, Saas</Skills>
                <DiplomaLink href={Front}>view certificate</DiplomaLink>
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
  @media (min-width: 1300px) {
    height: 100vh;
  }
`;

const MainSection = styled.div`
  display: block;
  margin-top: 140px;
  padding: 0 2rem;
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
  width: 220px;
  height: 70px;
`;

const BiggerLogoImage = styled.img`
  height: 140px;
  width: 275px;
  margin-left: -10px;
`;

const Detail = styled.div`
  padding: 2em;
`;

const H2 = styled.h2`
  font-family: Acme;
  font-size: 28px;
  text-align: center;
  color: #071b34;
`;

const H3 = styled.h3`
  font-family: Open Sans;
  font-size: 17px;
  text-align: center;
  margin-top: 30px;
  color: Black;
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

const DiplomaLink = styled.a`
  display: flex;
  justify-content: center;
  font-family: Open Sans;
  font-size: 17px;
  text-align: center;
  margin-top: 30px;
  color: #071b34;
  cursor: pointer;
  text-decoration: none;
`;

export default Certificate;
