import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #0c0c0c;
  font-family: "Poppins", sans-serif;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* padding: 0 30px;
  height: 1000px;
  position: relative;
  z-index: 1; */
  /* max-width: 1170px; */
  margin-left: auto;
  margin-right: auto;
  padding: 1em;

  /* @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 375px) {
    height: 1500px;
  } ; */
`;

export const ContactWrapper = styled.div`
  /* z-index: 1;
  height: 1000px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center; */
  /* margin-right: auto;
  margin-left: auto; */
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);

  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  @media screen and (min-width: 375px) {
  }
`;

export const ContactInfoWrapper = styled.div``;

export const ContactH3 = styled.h3`
  text-align: center;
  margin: 0 0 1rem 0;

  @media screen and (min-width: 700px) {
    text-align: left;
  }
`;

export const ContactI = styled.i`
  color: blue;
`;

export const ContactInfo = styled.div`
  color: #fff;
  /* background: rgb(98, 2, 0); */
  padding: 20px;
  background: #bf0303; /* Old browsers */
  background: linear-gradient(to bottom right, #870000, #190a05);
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  margin: 0 0 1rem 0;

  @media screen and (min-width: 700px) {
    text-align: left;
  }
`;

export const ContactListItem = styled.li``;

export const ContactBottomWrapper = styled.div``;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;
  padding-top: 40px;
`;

export const ContactP = styled.p`
  margin: 0;
`;

export const ContactRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  } ;
`;

export const ContactLabel = styled.label`
  color: #fff;
  display: block;
  padding-bottom: 0.5em;
`;

export const ContactInput = styled.input`
  color: #fff;
  /* padding: 2rem 2rem 2rem 1rem; */
  /* margin: 0 2rem; */
  /* height: 2rem; */
  /* width: 30rem; */
  /* font-size: 20px; */
  /* margin-top: 1rem; */
  width: 95%;
  padding: 1em;
  margin-bottom: 2em;
  background-color: rgb(8, 10, 22);
  border-radius: 5px;
  /* @media screen and (max-width: 1000px) {
    max-width: 20rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 15rem;
  }

  @media screen and (max-width: 375px) {
    max-width: 20rem;
  } ; */
`;

export const ContactMsg = styled.div`
  margin-top: 2.5rem;
  width: 200px;
`;

export const ContactBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  column-gap: 60px;
  padding: 2em;

  .full {
    grid-column: 1 / 3;
  }

  @media screen and (max-width: 700px) {
    padding: 1em;
    column-gap: 20px;
  }
  @media screen and (max-width: 375px) {
  }
`;

// export const ContactTextWrapper = styled.div`
//   z-index: 1;
//   height: 1000px;
//   width: 100%;
//   max-width: 1100px;
//   margin-right: auto;
//   margin-left: auto;
//   /* padding: 0 24px; */
//   justify-content: center;
// `;

export const ContactButton = styled.button`
  width: 100%;
  padding: 1em;
  background: linear-gradient(to bottom right, #870000, #190a05);
  color: #f9f9f9;
  /* background: #c9e6ff; */

  border: 0;
  text-transform: uppercase;

  :hover,
  :hover {
    /* background: #92bde7; */
    background: #bf0303; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #bf0303 0%,
      #ae0202 45%,
      #9a0000 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #bf0303 0%,
      #ae0202 45%,
      #9a0000 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #bf0303 0%,
      #ae0202 45%,
      #9a0000 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bf0303', endColorstr='#9a0000',GradientType=0 ); /* IE6-9 */

    color: #fff;
    transition: background-color 2s ease-out;
  }
`;

export const ContactText = styled.textarea`
  /* margin: 2.5rem 2rem 0 2rem; */
  /* padding: 1rem 2rem 2rem 1rem; */

  /* min-width: 61.5rem; */
  /* max-width: 65rem; */
  /* width: 61.5rem; */
  /* min-height: 300px; */
  /* font-size: 20px; */
  width: 98%;
  padding: 1em;
  min-height: 300px;
  background-color: rgb(8, 10, 22);
  border-radius: 5px;
  color: #fff;

  /* @media screen and (max-width: 1000px) {
    max-width: 52rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 38rem;
  }
  @media screen and (max-width: 375px) {
    max-width: 20rem;
  } ; */
`;
