import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  /* padding: 2em; */
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#161a1d")}; */
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#f9f9f9")};
  /* background: ${({ lightBg }) =>
    lightBg
      ? "#f9f9f9"
      : "linear-gradient(to bottom right, #000000, #434343)"}; */
  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
    /* padding: 4em; */
  } ;
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1000px;
  width: 100%;
  max-width: 1100px;
  /* margin-right: auto;
  margin-left: auto; */
  margin: auto;
  /* padding: 0 24px; */
  justify-content: center;

  @media screen and (max-width: 600px) {
    height: 900px;
  }

  @media screen and (max-width: 375px) {
    height: 700px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  /* height: 20px; */
  align-items: center;
  /* margin: 40px; */
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  @media screen and (max-width: 540px) {
    /* display: flex; */
    /* height: 20px; */
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 15px; */
  /* background: red; */
  /* padding: 0 15px; */
  grid-area: col1;
  @media screen and (max-width: 480px) {
    margin: 40px 40px 0 40px;
    /* margin: 20px; */
  }
`;

export const Column2 = styled.div`
  /* margin-bottom: 15px; */
  /* padding: 0 15px; */
  grid-area: col2;

  @media screen and (max-width: 480px) {
    margin: 40px 40px 40px 40px;
    /* margin: 20px; */
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  /* padding-bottom: 60px; */
`;

export const TopLine = styled.p`
  color: #d3001f;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  /* margin-bottom: 16px; */
`;

export const Heading = styled.h1`
  /* color: #000; */
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  /* color: ${({ lightText }) => (lightText ? "#010606" : `fff`)}; */
  color: ${({ lightText }) => (lightText ? "#010606" : `#010606`)};
  /* color: ${({ lightText }) => (lightText ? "#f7f8fa" : `#f7f8fa`)}; */

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  /* margin-bottom: 35px; */
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  /* color: ${({ darkText }) => (darkText ? "#010606" : "#fff")}; */
  color: ${({ darkText }) => (darkText ? "#010606" : "#010606")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  /* margin-bottom: 40px; */
`;

export const Img = styled.img`
  width: 100%;
  /* background: red; */
  /* margin: 0 0 10px 0; */
  @media screen and (max-width: 375px) {
    /* background: red; */
    /* margin-bottom: 100px; */
  }
`;
