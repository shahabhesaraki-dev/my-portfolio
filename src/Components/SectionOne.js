import React, { useEffect } from "react";
import styled from "styled-components";
import image from "./img/handsome.png";
import Aos from "aos";
import "aos/dist/aos.css";
import AVATAR from "./img/Avatar.png";

const SectionOne = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <FullSection>
      <Wrapper>
        <PartOne>
          <FirstSvg
            xmlns="http://www.w3.org/2000/svg"
            width="410"
            height="1029"
            viewBox="0 0 410 1029"
            data-shape="true"
          >
            <path
              fill="none"
              stroke="#ccf381"
              strokeMiterlimit="50"
              d="M-595.702 68.801c170.37-196.112 467.886-203.922 648.382-23.426 118.036 118.036 155.527 286.059 112.51 435.858-4.761 16.58-12.01 32.283-19.316 47.909a138.955 138.955 0 00-9.03 25.534c-11.945 47.534.67 99.913 37.845 137.087 24.143 24.144 54.677 37.886 86.17 41.312 5.473.626 11.028.919 16.625.918 32.33 3.426 63.742 17.627 88.47 42.354 61.444 61.445 57.39 163.708-12.16 219.767-51.833 41.779-127.42 43.175-180.571 3.087-34.726-26.19-54.364-63.667-58.474-102.473 0-5.596-.293-11.151-.92-16.624-3.425-31.494-17.166-62.028-41.31-86.172-37.174-37.174-89.555-49.788-137.088-37.841a140.596 140.596 0 00-25.545 9.04c-15.375 7.181-30.8 14.359-47.102 19.074-158.488 45.834-337.525 1.47-456.231-133.131-145.451-164.927-146.471-416.267-2.255-582.273zm477.57 432.312c78.526-78.524 78.527-206.402 0-284.928-78.582-78.583-206.402-78.525-284.927 0-78.583 78.583-78.583 206.345 0 284.928 78.526 78.526 206.345 78.583 284.928 0z"
            ></path>
          </FirstSvg>
          <Article>
            <TextDiv>
              <Title data-aos="fade-down">Full-Stack</Title>
              <Title data-aos="fade-down">Developer</Title>
              <Paragraph data-aos="fade-up">Hello, I'm Shahab.</Paragraph>
              <Paragraph data-aos="fade-up">
                Thank you for visiting my portfolio website.
              </Paragraph>
            </TextDiv>
          </Article>

          <Figure>
            <SecondSvg
              xmlns="http://www.w3.org/2000/svg"
              width="935"
              height="701"
              viewBox="0 0 935 701"
              data-shape="true"
            >
              <path
                fill="none"
                stroke="#ccf381"
                strokeMiterlimit="50"
                strokeWidth="2"
                d="M165.648 352.811v0l15.343 16.136v0l15.343-16.136v0l15.341 16.136v0l15.343-16.136v0l15.343 16.136v0l15.343-16.136v0l15.344 16.136v0l15.345-16.136v0"
              ></path>
              <path
                fill="#ccf381"
                d="M112.476 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM169.38 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM188.348 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM207.315 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM264.22 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM283.188 1.58a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM302.155 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM112.476 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 20.804a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM150.412 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM169.38 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM188.348 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM207.315 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM264.22 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM283.188 20.804a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM302.155 20.804a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM321.123 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM112.476 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 116.92a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .001zM150.412 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM169.38 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM188.348 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM207.315 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM264.22 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM283.188 116.92a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.002.001zM302.155 116.92a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .001zM321.123 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM112.476 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM169.38 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM188.348 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM207.315 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM264.22 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM283.188 136.142a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM302.155 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM112.476 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              ></path>
              <path
                fill="#4831d4"
                d="M692.477 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM711.444 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM749.38 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM768.348 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM787.315 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM844.22 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM863.188 418.551a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM882.155 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM692.477 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM711.444 437.774a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM730.412 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM749.38 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM768.348 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM787.315 437.774a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 437.774a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM844.22 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM863.188 437.774a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM882.155 437.774a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM901.123 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM692.477 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 456.998a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 456.998a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 456.998a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 456.998a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 456.998a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM692.477 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM711.444 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM749.38 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM768.348 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM787.315 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM844.22 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM863.188 476.22a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM882.155 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM692.477 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM711.444 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM749.38 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM768.348 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM787.315 495.443a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM806.283 495.443a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM825.252 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM844.22 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM863.188 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM882.155 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM692.477 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 514.667a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 514.667a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 514.667a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 514.667a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 514.667a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM692.477 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM711.444 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM749.38 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM768.348 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM787.315 533.89a1.5 1.5 0 11-2.998 0 1.5 1.5 0 012.998 0zM806.283 533.89a1.5 1.5 0 11-2.998 0 1.5 1.5 0 012.998 0zM825.252 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM844.22 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM863.188 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM882.155 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM692.477 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM711.444 553.113a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM730.412 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM749.38 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM768.348 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM787.315 553.113a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 553.113a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM844.22 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM863.188 553.113a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM882.155 553.113a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM901.123 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM692.477 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 572.336a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 572.336a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 572.336a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 572.336a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 572.336a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM692.477 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM711.444 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM749.38 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM768.348 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM787.315 591.558a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM806.283 591.558a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM825.252 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM844.22 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM863.188 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM882.155 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM692.477 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 610.782a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 610.782a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 610.782a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 610.782a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 610.782a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0z"
              ></path>
              <path
                fill="none"
                stroke="#4831d4"
                strokeMiterlimit="50"
                strokeWidth="2"
                d="M846.646 332.048v0l22.258.562v0l-.56-22.26v0l22.258.56v0l-.56-22.258v0l22.259.56v0l-.56-22.257v0l22.26.559v0l-.56-22.26v0"
              ></path>
              <path
                fill="none"
                stroke="#ccf381"
                strokeMiterlimit="50"
                strokeWidth="2"
                d="M2.114 541.705v0l-.56 22.258v0l22.258-.561v0l-.56 22.259v0l22.258-.56v0l-.56 22.258v0l22.258-.56v0l-.559 22.26v0l22.26-.56v0"
              ></path>
            </SecondSvg>
            <Span>
              <AvatarImageOne src={AVATAR} />
            </Span>
          </Figure>
        </PartOne>
      </Wrapper>
      <WrapperTwo>
        <PartTwo>
          <FigureTwo>
            {/* <SpanTwo> */}
            <AvatarImageTwo src={AVATAR} />
            {/* </SpanTwo> */}
          </FigureTwo>
        </PartTwo>
      </WrapperTwo>
    </FullSection>
  );
};

const FullSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  max-width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4.17rem;

  @media (min-width: 581px) {
    background: linear-gradient(90deg, #4831d4 65%, #ccf381 35%);
  }

  @media (max-width: 581px) {
    background: #4831d4;
  }

  @media (min-width: 581px) and (max-width: 1600px) {
    font-size: 1vw;
  }
`;

const FigureTwo = styled.figure`
  @media (min-width: 581px) {
    display: none;
  }
  margin: 0;
  z-index: 1;
  width: 14.334em;
  height: 15.67em;
  position: relative;
  border: 0.115rem solid #fff;
  left: 1em;
`;

const WrapperTwo = styled.div`
  @media (min-width: 581px) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4.17rem;
  background: #ccf381;
  max-width: 100%;
`;

const PartOne = styled.div`
  display: flex;
  align-items: center;
  margin-top: 200px;
  justify-content: space-around;
`;

const PartTwo = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  max-width: 100%;
`;

const FirstSvg = styled.svg`
  left: 0;
  height: 738px;
  position: absolute;
  margin-left: -6.2em;
  top: 11.12em;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Article = styled.article`
  display: block;
`;

const TextDiv = styled.div`
  display: block;
  position: relative;
`;

const Title = styled.h1`
  font-size: 5.4em;
  color: #ccf381;
  line-height: 1.1;
  font-family: Acme;
  @media (max-width: 581px) {
    font-size: 4.5em;
  }
`;

const Paragraph = styled.p`
  font-size: 1.6em;
  color: #fff;
  line-height: 1.6;
  font-family: Abel;
  @media (max-width: 581px) {
    font-size: 1.3em;
    margin-top: 20px;
    line-height: 0.5;
  }
`;

const Figure = styled.figure`
  margin: 0;
  z-index: 1;
  width: 23.334em;
  height: 24.67em;
  position: relative;
  border: 0.115rem solid #fff;
  right: 7em;

  @media (max-width: 581px) {
    display: none;
  }
  border: none;
`;

const SecondSvg = styled.svg`
  top: -25%;
  width: 40em;
  z-index: -1;
  height: 126%;
  right: -5em;
  position: absolute;
  max-width: 200%;
`;

const Span = styled.span`
  width: inherit;
  display: block;
  height: inherit;
  margin-top: -2.435em;
  margin-left: -3em;
  background-color: linear-gradient(90deg, #4831d4 50%, #ccf381 50%);
  background-size: cover;
  background-position-x: center;
  /* background-image: url(${AVATAR}); */
`;

const SpanTwo = styled.span`
  width: inherit;
  display: block;
  height: inherit;
  margin-top: -2.435em;
  background-color: #ccf381;
  background-size: cover;
  background-position-x: center;
  /* background-image: url(${AVATAR}); */
  margin-left: -2em;
`;

const AvatarImageOne = styled.img`
  width: inherit;
  display: block;
  height: inherit;
  margin-left: -25px;
  margin-top: -30px;
  border: 5px solid white;
`;

const AvatarImageTwo = styled.img`
  width: inherit;
  display: block;
  height: inherit;
  margin-left: -25px;
  margin-top: -30px;
  border: 5px solid white;
`;

export default SectionOne;
