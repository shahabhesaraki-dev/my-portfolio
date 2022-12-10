import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

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
                web developer with over 4 years of learning experience in couple
                of programing languages.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I consider mylself a mern stack developer. During my most recent
                bootcamp at Concordia University, I studied Front-end and
                Back-end development that focused strongly on using MERN stack.
                I started with React for the front-end and continued with
                Express, Node and MongoDB for the back-end. I also completed
                some projects using MERN stack, including HTML, CSS and
                JavaScript.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I am also able to work on PHP projects. As I have two years of
                learning experience in PHP and Laravel in Tehran institute of
                technology and one year of experience as an intern in Iran.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I'm currently working on a new project (Animal Care). You may
                find it among my works. In addition, I am learning Typescript. I
                really enjoy learning new languages.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                When I'm not programming or studying, I'm probably watching
                football. This is my favourite activity.
              </Paragraph>
            </ContentDiv>
          </Article>
          <Figure data-aos="fade-left">
            <Svg
              width="1003"
              height="722"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1003 722"
            >
              <path
                fill="none"
                stroke="#4831D4"
                strokeWidth="2"
                strokeMiterlimit="50"
                d="M438.8 420.9h-36m18 18v-36M239.2 15.7c0 4.4-3.6 7.9-8 7.8-4.3 0-7.8-3.5-7.8-7.8 0-4.4 3.5-7.9 7.9-7.9s7.9 3.5 7.9 7.9h0zm28.1 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9 4.3 0 7.8 3.6 7.9 7.9zm28 0c0 4.4-3.6 7.9-8 7.8-4.3 0-7.8-3.5-7.8-7.8 0-4.4 3.5-7.9 7.9-7.9s7.9 3.5 7.9 7.9h0zm28.1 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9 3.5-7.9 7.9-7.9 7.9 3.6 7.9 7.9zm28.1 0c0 4.4-3.6 7.9-8 7.8-4.3 0-7.8-3.5-7.8-7.8 0-4.4 3.5-7.9 7.9-7.9s7.9 3.6 7.9 7.9zm332.9 697c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9 4.4.1 7.9 3.6 7.9 7.9zm28.1 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9s7.9 3.6 7.9 7.9h0zm28 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9 4.4.1 7.9 3.6 7.9 7.9zm28.1 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9s7.9 3.6 7.9 7.9h0zm28.1 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9 4.3.1 7.9 3.6 7.9 7.9zM717 298.8h0l22.3.6h0l-.6-22.3h0l22.3.6h0l-.6-22.3h0l22.3.6h0l-.6-22.3h0l22.3.6h0l-.6-22.3h0"
              ></path>
              <path
                fill="#EFEFEF"
                d="M937.7 205.7c0 15.7-12.7 28.4-28.4 28.4s-28.4-12.7-28.4-28.4 12.7-28.4 28.4-28.4 28.4 12.7 28.4 28.4zm-8.7-49.2h-39.5V-.1H929v156.6zM396.2 406c0 15.7-12.7 28.4-28.4 28.4s-28.4-12.7-28.4-28.4 12.7-28.4 28.4-28.4 28.4 12.7 28.4 28.4zm-8.7-49.2H348V200.2h39.5v156.6zM80 531.8c-50.7 0-82.1-55.2-56.2-98.8 25.3-42.6 87-42.6 112.3 0 26 43.6-5.4 98.8-56.1 98.8zm491.8-352.1c-50.7 0-82.1-55.2-56.2-98.8 25.3-42.6 87-42.6 112.3 0 26 43.6-5.4 98.8-56.1 98.8zM937.1 579c-50.7 0-82.1-55.2-56.2-98.8 25.3-42.6 87-42.6 112.3 0 26 43.6-5.4 98.8-56.1 98.8zM162.4 215.5c0 15.7-12.7 28.4-28.4 28.4s-28.4-12.7-28.4-28.4 12.7-28.4 28.4-28.4 28.4 12.7 28.4 28.4zm-8.8-49.2h-39.5V9.7h39.5v156.6z"
              ></path>
              <path fill="#3361C2" d="M601.1 80.6l.1 5.2"></path>
              <path
                fill="#432FC6"
                d="M740.6 59.6v164H601.2V26H707l33.6 33.6z"
              ></path>
              <path
                fill="#C9784B"
                d="M601.1 127.7l-26.3 1.1s11-54 26.2-59.9l.1 29.9c5.3-4.4 10.9-8.4 12.9-7.3 3.8 2.1-12.9 36.2-12.9 36.2z"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeMiterlimit="50"
                d="M601 68.9s-13.5 1.4-26.2 59.2"
              ></path>
              <path
                fill="#3D155F"
                d="M708.7 606l-.6 34.4c-.1 7.6 7.1 13.3 14.5 11.4l78.2-20.2c6.3-1.6 6.3-10.6 0-12.3l-36.2-9.5-55.9-3.8zm86.8-329.7l23.6 1.7c7.6.6 13.7-6.3 12.2-13.8l-13.8-69.6c-1.3-6.3-10-7-12.2-.9l-16.6 47 6.8 35.6zm-332.2 85.4l12.3 42.8 68.5-18.9 18.1 55.5-106.9 44.4c-20.3 8.4-43.2-3.7-47.7-25.1-11.4-55-19.3-149.5 55-165.6 19.6-4.3 70.1-85.1 70.1-85.1L546 131l58.2-5.9-6.9 96.6c-.7 10.3-4.3 20.2-10.4 28.6l-48.8 67.4 43.8 74.2-112.4 64-6.2-94.2z"
              ></path>
              <path
                fill="#CCF381"
                d="M571.8 427.2c1.1-1.1 13.9-74 22-120.9 4.1-23.6 21.4-42.6 44.5-48.8l146.4-39.4 23.6 73.2L677 335.9l-8 94.3-97.2-3z"
              ></path>
              <path
                fill="#CCF381"
                d="M472.1 436.9l5.3 12.1c11.2 25.5 37.3 41.1 65 38.8l92.9-7.6L693 628.4s86.7-21.5 84.2-24.8c-1.8-2.4-41.6-111.1-65.4-176.3-10.2-28-38.6-45.2-68.1-41.3l-131.8 17.4-39.8 33.5z"
              ></path>
              <path
                fill="#3D155F"
                d="M481.1 474.8l81.1-33.7-16.4-50.5-88.8 21.5 24.1 62.7z"
              ></path>
              <defs>
                <path
                  id="olaolu-work-illo_svg__a"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__b">
                <use
                  xlinkHref="#olaolu-work-illo_svg__a"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__b)">
                <path
                  fill="#432FC6"
                  d="M460.1 398.6c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__c"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__d">
                <use
                  xlinkHref="#olaolu-work-illo_svg__c"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__d)">
                <path
                  fill="#432FC6"
                  d="M527.2 404c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__e"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__f">
                <use
                  xlinkHref="#olaolu-work-illo_svg__e"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__f)">
                <path
                  fill="#432FC6"
                  d="M594.4 409.5c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__g"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__h">
                <use
                  xlinkHref="#olaolu-work-illo_svg__g"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__h)">
                <path
                  fill="#432FC6"
                  d="M497.4 354.9c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__i"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__j">
                <use
                  xlinkHref="#olaolu-work-illo_svg__i"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__j)">
                <path
                  fill="#432FC6"
                  d="M564.6 360.3c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__k"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__l">
                <use
                  xlinkHref="#olaolu-work-illo_svg__k"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__l)">
                <path
                  fill="#432FC6"
                  d="M631.7 365.8c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__m"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__n">
                <use
                  xlinkHref="#olaolu-work-illo_svg__m"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__n)">
                <path
                  fill="#432FC6"
                  d="M430.3 349.4c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__o"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__p">
                <use
                  xlinkHref="#olaolu-work-illo_svg__o"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__p)">
                <path
                  fill="#432FC6"
                  d="M489.7 447.7c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__q"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__r">
                <use
                  xlinkHref="#olaolu-work-illo_svg__q"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__r)">
                <path
                  fill="#432FC6"
                  d="M556.9 453.2c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__s"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__t">
                <use
                  xlinkHref="#olaolu-work-illo_svg__s"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__t)">
                <path
                  fill="#432FC6"
                  d="M624 458.6c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__u"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__v">
                <use
                  xlinkHref="#olaolu-work-illo_svg__u"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__v)">
                <path
                  fill="#432FC6"
                  d="M422.5 442.2c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.3.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__w"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__x">
                <use
                  xlinkHref="#olaolu-work-illo_svg__w"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__x)">
                <path
                  fill="#432FC6"
                  d="M475.4 212.9c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__y"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__z">
                <use
                  xlinkHref="#olaolu-work-illo_svg__y"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__z)">
                <path
                  fill="#432FC6"
                  d="M542.6 218.4c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__A"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__B">
                <use
                  xlinkHref="#olaolu-work-illo_svg__A"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__B)">
                <path
                  fill="#432FC6"
                  d="M609.7 223.8c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__C"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__D">
                <use
                  xlinkHref="#olaolu-work-illo_svg__C"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__D)">
                <path
                  fill="#432FC6"
                  d="M408.2 207.4c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3 16.1 8.9 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__E"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__F">
                <use
                  xlinkHref="#olaolu-work-illo_svg__E"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__F)">
                <path
                  fill="#432FC6"
                  d="M505 262c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18c.7-9.2 8.8-16 18-15.3s16.1 8.9 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__G"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__H">
                <use
                  xlinkHref="#olaolu-work-illo_svg__G"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__H)">
                <path
                  fill="#432FC6"
                  d="M572.2 267.5c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18c.7-9.2 8.8-16 18-15.3 9.2.8 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__I"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__J">
                <use
                  xlinkHref="#olaolu-work-illo_svg__I"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__J)">
                <path
                  fill="#432FC6"
                  d="M437.9 256.6c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18c.7-9.2 8.8-16 18-15.3 9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__K"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__L">
                <use
                  xlinkHref="#olaolu-work-illo_svg__K"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__L)">
                <path
                  fill="#432FC6"
                  d="M512.8 169.2c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__M"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__N">
                <use
                  xlinkHref="#olaolu-work-illo_svg__M"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__N)">
                <path
                  fill="#432FC6"
                  d="M580 174.7c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__O"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__P">
                <use
                  xlinkHref="#olaolu-work-illo_svg__O"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__P)">
                <path
                  fill="#432FC6"
                  d="M445.7 163.8c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__Q"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__R">
                <use
                  xlinkHref="#olaolu-work-illo_svg__Q"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__R)">
                <path
                  fill="#432FC6"
                  d="M534.9 311.2c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__S"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__T">
                <use
                  xlinkHref="#olaolu-work-illo_svg__S"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__T)">
                <path
                  fill="#432FC6"
                  d="M602.1 316.7c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__U"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__V">
                <use
                  xlinkHref="#olaolu-work-illo_svg__U"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__V)">
                <path
                  fill="#432FC6"
                  d="M400.6 300.3c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <path
                fill="#3D155F"
                d="M463 319.3c-.7 0-1.4 0-2.1-.1-9.6-1.1-16.4-9.8-15.3-19.4l7.6-64.6c1.1-9.6 9.8-16.4 19.4-15.3 9.6 1.1 16.4 9.8 15.3 19.4l-7.6 64.7c-1.1 8.8-8.6 15.3-17.3 15.3z"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeMiterlimit="50"
                d="M646.1 481h0l-12.7-1.3h0l4.2-16h0m-178.9-54.1l11.4-2.9"
              ></path>
              <path
                fill="#C9784B"
                d="M554.1 417c0-.1 23.8-21.8 23.8-21.8l28.2-5.9s-23.2-22.3-58.8 6.3l6.8 21.4z"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeMiterlimit="50"
                d="M677.9 322.8h0l1.8 14.7h0l-18.9-.3h0m-201 24.5h0l10.3 45.2h0l74.1-21.4h0l10.4 32h0l24.1-23.6h0l65.8-8.7h0s19-3 28.4 3"
              ></path>
              <path
                fill="#432FC6"
                d="M400.3 311.2v152H93.4V344.8l33.6-33.6h273.3zm598.1 8.1v119.2h-239L725.8 405v-85.6l272.6-.1zM331.5 629.5h306.4V488.2h-340v107.6l33.6 33.7zM900.8 203H841V102.4h59.8V203z"
              ></path>
              <path
                fill="#CCF381"
                d="M333.3 102.2c-16.3 0-26.4-17.7-18-31.7 8.1-13.7 27.9-13.7 36.1 0 8.3 14-1.8 31.7-18.1 31.7z"
              ></path>
              <path
                fill="#432FC6"
                d="M505.3 151.1c0 7.4-6 13.5-13.5 13.5s-13.5-6-13.5-13.5c0-7.4 6-13.5 13.5-13.5 7.5.1 13.5 6.1 13.5 13.5zm-4.1-23.2h-18.7V53.8h18.7v74.1z"
              ></path>
              <path
                fill="#CCF381"
                d="M251.5 432.7c0 2.6-2 4.7-4.6 4.7s-4.7-2-4.7-4.6v-.1c0-2.6 2.2-4.6 4.7-4.6 2.5.1 4.5 2.1 4.6 4.6zm637.3-288.6c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2 1.9-4.2 4.2-4.2c2.3 0 4.2 1.9 4.2 4.2zm-1.3-7.3h-5.9v-23.3h5.9v23.3z"
              ></path>
              <path
                fill="none"
                stroke="#FFEB5C"
                strokeWidth="2"
                strokeMiterlimit="50"
                d="M965.4 344.4h14.8m-7.4-7.4v14.8M312.6 510.9h16.1m-8.1-8.1v16.1M107.5 444h15.2m-7.6-7.6v15.2m257.8-121h17.7m-8.9-8.8v17.7m333.7-133.3h12M721.4 200.2v12M848 189.6h10.5M853.3 184.4v10.5"
              ></path>
              <path fill="#432FC6" d="M930 639.3h-85.8v-70.5H930v70.5z"></path>
              <path fill="#432FC6" d="M930 639.3h-85.8v-70.5H930v70.5z"></path>
              <path
                fill="none"
                stroke="#FFEB5C"
                strokeWidth="2"
                strokeMiterlimit="50"
                d="M879.1 604.1h16M887.1 596.1v16"
              ></path>
              <path
                fill="#432FC6"
                d="M335.3 214.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zM333.6 205.2h-7.3v-29h7.3v29z"
              ></path>
              <path
                fill="none"
                stroke="#FFEB5C"
                strokeWidth="2"
                strokeMiterlimit="50"
                d="M405.1 133l14.9 14.9M420 133l-14.9 14.9"
              ></path>
              <path
                fill="#24272D"
                d="M481.1 297l-11.5-1.4 10.7 8.4.8-7z"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeMiterlimit="50"
                d="M575.8 381.5s18.5-4.9 30.3 7.7"
              ></path>
              <path
                fill="#C9784B"
                d="M473.6 297.3h3.9c19.1-.2 33.3-18.9 29.5-38.8l-4.4-23.2c-2.9-15.5-15.9-26.5-30.7-26.2-16.9.4-30.2 15.3-29.8 33.2l.5 23.3c.5 17.7 14.3 31.9 31 31.7z"
              ></path>
              <path
                fill="none"
                stroke="#252B2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="50"
                d="M485.8 247.2h0l3.1 12.6c.8 3.2-1.1 6.5-4.4 7.3l-.7.2h0"
              ></path>
              <path
                fill="#24272D"
                d="M455.2 266.4l4.8-35.1 1.1-8.3c2.3 1.9 4.9 3.4 7.7 4.5 10.1 3.9 38.4-1.7 39.9-22.2 1.2-16.7-15-5.2-24-5.1-14.1.1-24.9-6.9-42.7 5.8-21.3 15.2-6.7 44.2-6.7 44.2s9.6-5.2 19.9 16.2z"
              ></path>
              <path
                fill="#24272D"
                d="M469.2 252.7c.9 1.6 2.9 2.2 4.6 1.3 1.6-.9 2.2-2.9 1.3-4.6-.9-1.6-3-2.1-4.6-1.2-1.6 1-2.2 2.9-1.3 4.5zM489.8 250.5c.9 1.6 2.9 2.2 4.6 1.3 1.6-.9 2.2-2.9 1.3-4.6-.9-1.6-3-2.1-4.6-1.2-1.6 1-2.2 3-1.3 4.5z"
              ></path>
              <path
                fill="none"
                stroke="#252B2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="50"
                d="M469.1 273.9s1 6.9 8.8 7.3"
              ></path>
              <path
                fill="#C9784B"
                d="M457.2 278c5.1-4.1 6-11.7 1.9-16.8l-7.2-9c-4.1-5.1-11.7-6-16.8-1.9-5.1 4.1-6 11.7-1.9 16.8l7.2 9c4.1 5.2 11.7 6 16.8 1.9z"
              ></path>
              <path
                fill="none"
                stroke="#252B2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="50"
                d="M439.2 260.2l7.2 5.9"
              ></path>
              <path
                fill="#3D155F"
                d="M127 311.2v33.6H93.4l33.6-33.6zM331.5 629.5l-33.6-33.6h33.6v33.6zM759.5 405v33.6L725.8 405h33.7z"
              ></path>
              <g>
                <path fill="#3D155F" d="M707 25.9l33.6 33.6H707V25.9z"></path>
              </g>
              <g>
                <path
                  fill="#432FC6"
                  d="M288.5 278.5h-74.1V172.3l16.9-14.6h57.2z"
                ></path>
                <path fill="#3D155F" d="M231.3 172.3h-16.9l16.9-14.6z"></path>
                <path
                  d="M273.4 171.5h8m-4-4v8"
                  fill="none"
                  stroke="#FFEB5C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                ></path>
              </g>
            </Svg>
          </Figure>
        </Wrapper>
        <ResponsiveWrapper>
          <Article>
            <ContentDiv>
              <Title data-aos="fade-up">About me</Title>
              <br />
              <Paragraph data-aos="fade-up">
                Hello again! Thanks for scrolling this far!! I am a full-stack
                web developer with over 4 years of learning experience in couple
                of programing languages.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I consider mylself a mern stack developer. During my most recent
                bootcamp at Concordia University, I studied Front-end and
                Back-end development that focused strongly on using MERN stack.
                I started with React for the front-end and continued with
                Express, Node and MongoDB for the back-end. I also completed
                some projects using MERN stack, including HTML, CSS and
                JavaScript.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I am also able to work on PHP projects. As I have two years of
                learning experience in PHP and Laravel in Tehran institute of
                technology and one year of experience as an intern in Iran.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                I'm currently working on a new project (Animal Care). You may
                find it among my works. In addition, I am learning Typescript. I
                really enjoy learning new languages.
              </Paragraph>
              <Paragraph data-aos="fade-up">
                When I'm not programming or studying, I'm probably watching
                football. This is my favourite activity.
              </Paragraph>
            </ContentDiv>
          </Article>
          <Figure data-aos="fade-up">
            <Svg
              width="1003"
              height="722"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1003 722"
            >
              <path
                fill="none"
                stroke="#4831D4"
                strokeWidth="2"
                strokeMiterlimit="50"
                d="M438.8 420.9h-36m18 18v-36M239.2 15.7c0 4.4-3.6 7.9-8 7.8-4.3 0-7.8-3.5-7.8-7.8 0-4.4 3.5-7.9 7.9-7.9s7.9 3.5 7.9 7.9h0zm28.1 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9 4.3 0 7.8 3.6 7.9 7.9zm28 0c0 4.4-3.6 7.9-8 7.8-4.3 0-7.8-3.5-7.8-7.8 0-4.4 3.5-7.9 7.9-7.9s7.9 3.5 7.9 7.9h0zm28.1 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9 3.5-7.9 7.9-7.9 7.9 3.6 7.9 7.9zm28.1 0c0 4.4-3.6 7.9-8 7.8-4.3 0-7.8-3.5-7.8-7.8 0-4.4 3.5-7.9 7.9-7.9s7.9 3.6 7.9 7.9zm332.9 697c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9 4.4.1 7.9 3.6 7.9 7.9zm28.1 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9s7.9 3.6 7.9 7.9h0zm28 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9 4.4.1 7.9 3.6 7.9 7.9zm28.1 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9s7.9 3.6 7.9 7.9h0zm28.1 0c0 4.4-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9h0c0-4.4 3.5-7.9 7.9-7.9 4.3.1 7.9 3.6 7.9 7.9zM717 298.8h0l22.3.6h0l-.6-22.3h0l22.3.6h0l-.6-22.3h0l22.3.6h0l-.6-22.3h0l22.3.6h0l-.6-22.3h0"
              ></path>
              <path
                fill="#EFEFEF"
                d="M937.7 205.7c0 15.7-12.7 28.4-28.4 28.4s-28.4-12.7-28.4-28.4 12.7-28.4 28.4-28.4 28.4 12.7 28.4 28.4zm-8.7-49.2h-39.5V-.1H929v156.6zM396.2 406c0 15.7-12.7 28.4-28.4 28.4s-28.4-12.7-28.4-28.4 12.7-28.4 28.4-28.4 28.4 12.7 28.4 28.4zm-8.7-49.2H348V200.2h39.5v156.6zM80 531.8c-50.7 0-82.1-55.2-56.2-98.8 25.3-42.6 87-42.6 112.3 0 26 43.6-5.4 98.8-56.1 98.8zm491.8-352.1c-50.7 0-82.1-55.2-56.2-98.8 25.3-42.6 87-42.6 112.3 0 26 43.6-5.4 98.8-56.1 98.8zM937.1 579c-50.7 0-82.1-55.2-56.2-98.8 25.3-42.6 87-42.6 112.3 0 26 43.6-5.4 98.8-56.1 98.8zM162.4 215.5c0 15.7-12.7 28.4-28.4 28.4s-28.4-12.7-28.4-28.4 12.7-28.4 28.4-28.4 28.4 12.7 28.4 28.4zm-8.8-49.2h-39.5V9.7h39.5v156.6z"
              ></path>
              <path fill="#3361C2" d="M601.1 80.6l.1 5.2"></path>
              <path
                fill="#432FC6"
                d="M740.6 59.6v164H601.2V26H707l33.6 33.6z"
              ></path>
              <path
                fill="#C9784B"
                d="M601.1 127.7l-26.3 1.1s11-54 26.2-59.9l.1 29.9c5.3-4.4 10.9-8.4 12.9-7.3 3.8 2.1-12.9 36.2-12.9 36.2z"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeMiterlimit="50"
                d="M601 68.9s-13.5 1.4-26.2 59.2"
              ></path>
              <path
                fill="#3D155F"
                d="M708.7 606l-.6 34.4c-.1 7.6 7.1 13.3 14.5 11.4l78.2-20.2c6.3-1.6 6.3-10.6 0-12.3l-36.2-9.5-55.9-3.8zm86.8-329.7l23.6 1.7c7.6.6 13.7-6.3 12.2-13.8l-13.8-69.6c-1.3-6.3-10-7-12.2-.9l-16.6 47 6.8 35.6zm-332.2 85.4l12.3 42.8 68.5-18.9 18.1 55.5-106.9 44.4c-20.3 8.4-43.2-3.7-47.7-25.1-11.4-55-19.3-149.5 55-165.6 19.6-4.3 70.1-85.1 70.1-85.1L546 131l58.2-5.9-6.9 96.6c-.7 10.3-4.3 20.2-10.4 28.6l-48.8 67.4 43.8 74.2-112.4 64-6.2-94.2z"
              ></path>
              <path
                fill="#CCF381"
                d="M571.8 427.2c1.1-1.1 13.9-74 22-120.9 4.1-23.6 21.4-42.6 44.5-48.8l146.4-39.4 23.6 73.2L677 335.9l-8 94.3-97.2-3z"
              ></path>
              <path
                fill="#CCF381"
                d="M472.1 436.9l5.3 12.1c11.2 25.5 37.3 41.1 65 38.8l92.9-7.6L693 628.4s86.7-21.5 84.2-24.8c-1.8-2.4-41.6-111.1-65.4-176.3-10.2-28-38.6-45.2-68.1-41.3l-131.8 17.4-39.8 33.5z"
              ></path>
              <path
                fill="#3D155F"
                d="M481.1 474.8l81.1-33.7-16.4-50.5-88.8 21.5 24.1 62.7z"
              ></path>
              <defs>
                <path
                  id="olaolu-work-illo_svg__a"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__b">
                <use
                  xlinkHref="#olaolu-work-illo_svg__a"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__b)">
                <path
                  fill="#432FC6"
                  d="M460.1 398.6c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__c"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__d">
                <use
                  xlinkHref="#olaolu-work-illo_svg__c"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__d)">
                <path
                  fill="#432FC6"
                  d="M527.2 404c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__e"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__f">
                <use
                  xlinkHref="#olaolu-work-illo_svg__e"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__f)">
                <path
                  fill="#432FC6"
                  d="M594.4 409.5c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__g"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__h">
                <use
                  xlinkHref="#olaolu-work-illo_svg__g"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__h)">
                <path
                  fill="#432FC6"
                  d="M497.4 354.9c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__i"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__j">
                <use
                  xlinkHref="#olaolu-work-illo_svg__i"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__j)">
                <path
                  fill="#432FC6"
                  d="M564.6 360.3c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__k"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__l">
                <use
                  xlinkHref="#olaolu-work-illo_svg__k"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__l)">
                <path
                  fill="#432FC6"
                  d="M631.7 365.8c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__m"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__n">
                <use
                  xlinkHref="#olaolu-work-illo_svg__m"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__n)">
                <path
                  fill="#432FC6"
                  d="M430.3 349.4c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__o"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__p">
                <use
                  xlinkHref="#olaolu-work-illo_svg__o"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__p)">
                <path
                  fill="#432FC6"
                  d="M489.7 447.7c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__q"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__r">
                <use
                  xlinkHref="#olaolu-work-illo_svg__q"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__r)">
                <path
                  fill="#432FC6"
                  d="M556.9 453.2c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__s"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__t">
                <use
                  xlinkHref="#olaolu-work-illo_svg__s"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__t)">
                <path
                  fill="#432FC6"
                  d="M624 458.6c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__u"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__v">
                <use
                  xlinkHref="#olaolu-work-illo_svg__u"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__v)">
                <path
                  fill="#432FC6"
                  d="M422.5 442.2c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.3.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__w"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__x">
                <use
                  xlinkHref="#olaolu-work-illo_svg__w"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__x)">
                <path
                  fill="#432FC6"
                  d="M475.4 212.9c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__y"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__z">
                <use
                  xlinkHref="#olaolu-work-illo_svg__y"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__z)">
                <path
                  fill="#432FC6"
                  d="M542.6 218.4c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__A"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__B">
                <use
                  xlinkHref="#olaolu-work-illo_svg__A"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__B)">
                <path
                  fill="#432FC6"
                  d="M609.7 223.8c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__C"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__D">
                <use
                  xlinkHref="#olaolu-work-illo_svg__C"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__D)">
                <path
                  fill="#432FC6"
                  d="M408.2 207.4c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3 16.1 8.9 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__E"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__F">
                <use
                  xlinkHref="#olaolu-work-illo_svg__E"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__F)">
                <path
                  fill="#432FC6"
                  d="M505 262c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18c.7-9.2 8.8-16 18-15.3s16.1 8.9 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__G"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__H">
                <use
                  xlinkHref="#olaolu-work-illo_svg__G"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__H)">
                <path
                  fill="#432FC6"
                  d="M572.2 267.5c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18c.7-9.2 8.8-16 18-15.3 9.2.8 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__I"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__J">
                <use
                  xlinkHref="#olaolu-work-illo_svg__I"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__J)">
                <path
                  fill="#432FC6"
                  d="M437.9 256.6c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18c.7-9.2 8.8-16 18-15.3 9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__K"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__L">
                <use
                  xlinkHref="#olaolu-work-illo_svg__K"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__L)">
                <path
                  fill="#432FC6"
                  d="M512.8 169.2c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__M"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__N">
                <use
                  xlinkHref="#olaolu-work-illo_svg__M"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__N)">
                <path
                  fill="#432FC6"
                  d="M580 174.7c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__O"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__P">
                <use
                  xlinkHref="#olaolu-work-illo_svg__O"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__P)">
                <path
                  fill="#432FC6"
                  d="M445.7 163.8c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__Q"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__R">
                <use
                  xlinkHref="#olaolu-work-illo_svg__Q"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__R)">
                <path
                  fill="#432FC6"
                  d="M534.9 311.2c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.8 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__S"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__T">
                <use
                  xlinkHref="#olaolu-work-illo_svg__S"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__T)">
                <path
                  fill="#432FC6"
                  d="M602.1 316.7c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16 8.8 15.3 18z"
                ></path>
              </g>
              <defs>
                <path
                  id="olaolu-work-illo_svg__U"
                  d="M546.1 131l-13.3 78.6s-50.5 80.8-70.1 85.1c-74.3 16.1-66.5 110.6-55 165.6 4.5 21.5 27.4 33.6 47.7 25.1l25.8-10.7 81-33.7-10.4-32 30.2-17.2-43.8-74.2 48.8-67.4c6.1-8.4 9.7-18.3 10.4-28.6l6.9-96.6-58.2 6z"
                ></path>
              </defs>
              <clipPath id="olaolu-work-illo_svg__V">
                <use
                  xlinkHref="#olaolu-work-illo_svg__U"
                  overflow="visible"
                ></use>
              </clipPath>
              <g clipPath="url(#olaolu-work-illo_svg__V)">
                <path
                  fill="#432FC6"
                  d="M400.6 300.3c-.7 9.2-8.8 16-18 15.3s-16-8.8-15.3-18 8.8-16 18-15.3c9.2.7 16.1 8.8 15.3 18z"
                ></path>
              </g>
              <path
                fill="#3D155F"
                d="M463 319.3c-.7 0-1.4 0-2.1-.1-9.6-1.1-16.4-9.8-15.3-19.4l7.6-64.6c1.1-9.6 9.8-16.4 19.4-15.3 9.6 1.1 16.4 9.8 15.3 19.4l-7.6 64.7c-1.1 8.8-8.6 15.3-17.3 15.3z"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeMiterlimit="50"
                d="M646.1 481h0l-12.7-1.3h0l4.2-16h0m-178.9-54.1l11.4-2.9"
              ></path>
              <path
                fill="#C9784B"
                d="M554.1 417c0-.1 23.8-21.8 23.8-21.8l28.2-5.9s-23.2-22.3-58.8 6.3l6.8 21.4z"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeMiterlimit="50"
                d="M677.9 322.8h0l1.8 14.7h0l-18.9-.3h0m-201 24.5h0l10.3 45.2h0l74.1-21.4h0l10.4 32h0l24.1-23.6h0l65.8-8.7h0s19-3 28.4 3"
              ></path>
              <path
                fill="#432FC6"
                d="M400.3 311.2v152H93.4V344.8l33.6-33.6h273.3zm598.1 8.1v119.2h-239L725.8 405v-85.6l272.6-.1zM331.5 629.5h306.4V488.2h-340v107.6l33.6 33.7zM900.8 203H841V102.4h59.8V203z"
              ></path>
              <path
                fill="#CCF381"
                d="M333.3 102.2c-16.3 0-26.4-17.7-18-31.7 8.1-13.7 27.9-13.7 36.1 0 8.3 14-1.8 31.7-18.1 31.7z"
              ></path>
              <path
                fill="#432FC6"
                d="M505.3 151.1c0 7.4-6 13.5-13.5 13.5s-13.5-6-13.5-13.5c0-7.4 6-13.5 13.5-13.5 7.5.1 13.5 6.1 13.5 13.5zm-4.1-23.2h-18.7V53.8h18.7v74.1z"
              ></path>
              <path
                fill="#CCF381"
                d="M251.5 432.7c0 2.6-2 4.7-4.6 4.7s-4.7-2-4.7-4.6v-.1c0-2.6 2.2-4.6 4.7-4.6 2.5.1 4.5 2.1 4.6 4.6zm637.3-288.6c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2 1.9-4.2 4.2-4.2c2.3 0 4.2 1.9 4.2 4.2zm-1.3-7.3h-5.9v-23.3h5.9v23.3z"
              ></path>
              <path
                fill="none"
                stroke="#FFEB5C"
                strokeWidth="2"
                strokeMiterlimit="50"
                d="M965.4 344.4h14.8m-7.4-7.4v14.8M312.6 510.9h16.1m-8.1-8.1v16.1M107.5 444h15.2m-7.6-7.6v15.2m257.8-121h17.7m-8.9-8.8v17.7m333.7-133.3h12M721.4 200.2v12M848 189.6h10.5M853.3 184.4v10.5"
              ></path>
              <path fill="#432FC6" d="M930 639.3h-85.8v-70.5H930v70.5z"></path>
              <path fill="#432FC6" d="M930 639.3h-85.8v-70.5H930v70.5z"></path>
              <path
                fill="none"
                stroke="#FFEB5C"
                strokeWidth="2"
                strokeMiterlimit="50"
                d="M879.1 604.1h16M887.1 596.1v16"
              ></path>
              <path
                fill="#432FC6"
                d="M335.3 214.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zM333.6 205.2h-7.3v-29h7.3v29z"
              ></path>
              <path
                fill="none"
                stroke="#FFEB5C"
                strokeWidth="2"
                strokeMiterlimit="50"
                d="M405.1 133l14.9 14.9M420 133l-14.9 14.9"
              ></path>
              <path
                fill="#24272D"
                d="M481.1 297l-11.5-1.4 10.7 8.4.8-7z"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeMiterlimit="50"
                d="M575.8 381.5s18.5-4.9 30.3 7.7"
              ></path>
              <path
                fill="#C9784B"
                d="M473.6 297.3h3.9c19.1-.2 33.3-18.9 29.5-38.8l-4.4-23.2c-2.9-15.5-15.9-26.5-30.7-26.2-16.9.4-30.2 15.3-29.8 33.2l.5 23.3c.5 17.7 14.3 31.9 31 31.7z"
              ></path>
              <path
                fill="none"
                stroke="#252B2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="50"
                d="M485.8 247.2h0l3.1 12.6c.8 3.2-1.1 6.5-4.4 7.3l-.7.2h0"
              ></path>
              <path
                fill="#24272D"
                d="M455.2 266.4l4.8-35.1 1.1-8.3c2.3 1.9 4.9 3.4 7.7 4.5 10.1 3.9 38.4-1.7 39.9-22.2 1.2-16.7-15-5.2-24-5.1-14.1.1-24.9-6.9-42.7 5.8-21.3 15.2-6.7 44.2-6.7 44.2s9.6-5.2 19.9 16.2z"
              ></path>
              <path
                fill="#24272D"
                d="M469.2 252.7c.9 1.6 2.9 2.2 4.6 1.3 1.6-.9 2.2-2.9 1.3-4.6-.9-1.6-3-2.1-4.6-1.2-1.6 1-2.2 2.9-1.3 4.5zM489.8 250.5c.9 1.6 2.9 2.2 4.6 1.3 1.6-.9 2.2-2.9 1.3-4.6-.9-1.6-3-2.1-4.6-1.2-1.6 1-2.2 3-1.3 4.5z"
              ></path>
              <path
                fill="none"
                stroke="#252B2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="50"
                d="M469.1 273.9s1 6.9 8.8 7.3"
              ></path>
              <path
                fill="#C9784B"
                d="M457.2 278c5.1-4.1 6-11.7 1.9-16.8l-7.2-9c-4.1-5.1-11.7-6-16.8-1.9-5.1 4.1-6 11.7-1.9 16.8l7.2 9c4.1 5.2 11.7 6 16.8 1.9z"
              ></path>
              <path
                fill="none"
                stroke="#252B2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="50"
                d="M439.2 260.2l7.2 5.9"
              ></path>
              <path
                fill="#3D155F"
                d="M127 311.2v33.6H93.4l33.6-33.6zM331.5 629.5l-33.6-33.6h33.6v33.6zM759.5 405v33.6L725.8 405h33.7z"
              ></path>
              <g>
                <path fill="#3D155F" d="M707 25.9l33.6 33.6H707V25.9z"></path>
              </g>
              <g>
                <path
                  fill="#432FC6"
                  d="M288.5 278.5h-74.1V172.3l16.9-14.6h57.2z"
                ></path>
                <path fill="#3D155F" d="M231.3 172.3h-16.9l16.9-14.6z"></path>
                <path
                  d="M273.4 171.5h8m-4-4v8"
                  fill="none"
                  stroke="#FFEB5C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                ></path>
              </g>
            </Svg>
          </Figure>
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
  background-color: #4831d4;
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
  color: #ccf381;
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

const Svg = styled.svg`
  @media (min-width: 1000px) {
    height: 42.14em;
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
