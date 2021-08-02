import React, { useState } from "react";

import {
  ContactContainer,
  ContactInfoWrapper,
  ContactInfo,
  ContactList,
  ContactListItem,
  ContactWrapper,
  ContactH1,
  ContactH3,
  ContactP,
  ContactI,
  ContactRow,
  ContactLabel,
  ContactInput,
  ContactMsg,
  ContactButton,
  ContactBottomWrapper,
  ContactTextWrapper,
  ContactForm,
  ContactText,
  ContactBtnWrapper,
} from "./ContactElement";
import { Button } from "../ButtonElements";

const Contact = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div>
      <ContactContainer>
        <ContactWrapper>
          {/* <ContactInfoWrapper> */}
          <ContactInfo>
            <ContactH3>Taz Bulldogs</ContactH3>
            <ContactList>
              <ContactListItem>
                <ContactI className="fa fa-phone"></ContactI>(702) 555-5555
              </ContactListItem>
              <ContactListItem>taz-bulldogs@gmail.com</ContactListItem>
            </ContactList>
          </ContactInfo>
          {/* </ContactInfoWrapper> */}
          <ContactBottomWrapper id="contact">
            <ContactH1>Contact Us</ContactH1>
            <ContactForm>
              <ContactP>
                <ContactLabel>Name</ContactLabel>
                <ContactInput placeholder="Full Name" />
              </ContactP>
              <ContactP>
                <ContactLabel>Email</ContactLabel>
                <ContactInput placeholder="Email Address" />
              </ContactP>

              <ContactP>
                <ContactLabel>Phone</ContactLabel>
                <ContactInput placeholder="Phone Number" />
              </ContactP>
              <ContactP>
                <ContactLabel>Subject</ContactLabel>
                <ContactInput placeholder="Subject"></ContactInput>
              </ContactP>
              {/* <ContactTextWrapper> */}
              <ContactP className="full">
                <ContactLabel>Message</ContactLabel>
                <ContactText placeholder="Message" />
              </ContactP>

              {/* </ContactTextWrapper> */}
              {/* <ContactBtnWrapper> */}
              {/* <Button
                  to="/available-puppies"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
                >
                  Send Message
                </Button> */}
              <ContactP className="full">
                <ContactButton>Send Message</ContactButton>
              </ContactP>

              {/* </ContactBtnWrapper> */}
            </ContactForm>
          </ContactBottomWrapper>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
