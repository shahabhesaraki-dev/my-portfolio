import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionFive = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <MainSection>
      <Wrapper>
        <Article data-aos="fade-up">
          <DivArticle>
            <Title>Send me a message!</Title>
            <Paragraph>
              Got a question or proposal, or just want to say hello? Go ahead.
            </Paragraph>
          </DivArticle>
        </Article>
        <FormDiv data-aos="fade-up">
          <InputDiv>
            <InnerInputDiv>
              <Label>Your Name</Label>
              <Input
                value={"" || name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter your name"
              ></Input>
            </InnerInputDiv>
            <InnerInputDiv>
              <Label>Your Email</Label>
              <Input
                type="email"
                value={"" || email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email address"
              ></Input>
            </InnerInputDiv>
          </InputDiv>

          <ResponseInputDiv>
            <InnerInputDiv>
              <Label>Your Name</Label>
              <Input
                value={"" || name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter your name"
              ></Input>
            </InnerInputDiv>
            <InnerInputDiv>
              <Label>Your Email</Label>
              <Input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={"" || email}
                placeholder="Enter your email address"
              ></Input>
            </InnerInputDiv>
          </ResponseInputDiv>

          <MessageDiv>
            <InnerMessageDiv>
              <Label>Your Message</Label>
              <TextArea
                value={"" || comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                placeholder="Hi..."
              />
            </InnerMessageDiv>
          </MessageDiv>

          <ResponseMessageDiv>
            <InnerMessageDiv>
              <Label>Your Message</Label>
              <TextArea
                value={"" || comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                placeholder="Hi..."
              />
            </InnerMessageDiv>
          </ResponseMessageDiv>

          <Button
            onClick={() => {
              if (
                name.length !== 0 &&
                email.length !== 0 &&
                comment.length !== 0
              ) {
                setComment("");
                setEmail("");
                setName("");
                setMessage(
                  `Thanks for your message, ${name}! Please contact me by email.`
                );
              }
            }}
          >
            <DivButton>
              <P>Shoot</P>
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
          {message.length > 0 ? <Message>{message}</Message> : null}
        </FormDiv>
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2.78em;
  padding: 1rem 10rem;

  @media (min-width: 581px) and (max-width: 700px) {
    padding: 0 7rem;
  }
  @media (max-width: 580px) {
    padding: 0 10vw;
  }
`;

const Article = styled.article`
  margin-bottom: 5.2em;
  position: relative;
  text-align: center;
`;

const DivArticle = styled.div`
  position: relative;
  text-align: center;
`;

const Title = styled.h1`
  font-family: Acme;
  font-size: 39px;
  margin: 0;
  font-weight: 900;
  line-height: 1.1;
  color: #144361;
`;

const Paragraph = styled.p`
  font-family: Abel;
  margin: 0 auto;
  font-size: 1.6em;
  line-height: 1.2;
  margin-top: 15px;
  letter-spacing: 0.02em;
  max-width: 701px;
  color: #144361;
`;

const FormDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  min-width: 390px;
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const InputDiv = styled.div`
  @media (max-width: 701px) {
    display: none;
  }
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const ResponseInputDiv = styled.div`
  @media (min-width: 702px) {
    display: none;
  }
  width: 70%;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const InnerInputDiv = styled.div`
  width: 45%;
  color: rgba(61, 21, 95, 0.5);
  display: flex;
  position: relative;
  flex-direction: column;
  color: #86b2cb;
  @media (max-width: 701px) {
    margin-top: 2rem;
    width: 100%;
  }
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
  min-width: 19.222em;
  font-family: Abel;
  text-decoration: none;
  margin-top: 20px;
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

const Label = styled.label`
  font-weight: 200;
  margin-bottom: 5px;
  font-family: Acme;
  color: #144361 !important;
`;

const Input = styled.input`
  font-weight: 200;
  border-color: currentColor;
  line-height: 1.5;
  font-size: 1.05em;
  border: 0;
  padding: 0.6em;
  padding-left: 0;
  position: relative;
  color: black;
  background: transparent;
  border-bottom: 1px solid #86b2cb;
  border-top: none;
  outline: none;
  &::placeholder {
    font-family: Abel;
  }
`;

const MessageDiv = styled.div`
  @media (max-width: 701px) {
    display: none;
  }
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const ResponseMessageDiv = styled.div`
  @media (min-width: 702px) {
    display: none;
  }
  width: 70%;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const InnerMessageDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  color: #86b2cb;
`;

const TextArea = styled.textarea`
  font-weight: 200;
  border-color: currentColor;
  height: 4.2em;
  border: 0;
  padding: 0.6em;
  padding-left: 0;
  position: relative;
  color: black;
  background: transparent;
  border-bottom: 1px solid #86b2cb;
  border-top: none;
  outline: none;
  line-height: 1.5;
  font-size: 1.05em;
  &::placeholder {
    font-family: Abel;
  }
`;

const Message = styled.h3`
  font-family: Abel;
  font-size: 17px;
  margin-top: 10px;
  color: darkgreen;
`;

export default SectionFive;
