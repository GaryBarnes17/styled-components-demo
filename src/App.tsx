import {
  Accordion,
  AccordionSection,
  Button,
  ButtonGroup,
} from "@soluto-private/mx-asurion-ui-react";
import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [sectionOneIsOpen, setSectionOneIsOpen] = useState(false);
  const [sectionTwoIsOpen, setSectionTwoIsOpen] = useState(false);
  const [sectionThreeIsOpen, setSectionThreeIsOpen] = useState(false);

  return (
    <>
      <Accordion>
        <AccordionSection
          header="This is a short description that goes up to two rows"
          iconSrc="IconPlaceholder"
          subheader="Short sentence or subheading"
          isOpen={sectionOneIsOpen}
          onOpenStateChange={(isOpening) => setSectionOneIsOpen(isOpening)}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
          tristique vulputate et viverra felis massa metus, condimentum ero.
        </AccordionSection>
        <AccordionSection
          header="This is a short description that goes up to two rows"
          iconSrc="IconPlaceholder"
          subheader="Short sentence or subheading"
          isOpen={sectionTwoIsOpen}
          onOpenStateChange={(isOpening) => setSectionTwoIsOpen(isOpening)}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
          tristique vulputate et viverra felis massa metus, condimentum ero.
        </AccordionSection>
        <AccordionSection
          header="This is a short description that goes up to two rows"
          iconSrc="IconPlaceholder"
          subheader="Short sentence or subheading"
          isOpen={sectionThreeIsOpen}
          onOpenStateChange={(isOpening) => setSectionThreeIsOpen(isOpening)}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
          tristique vulputate et viverra felis massa metus, condimentum ero.
        </AccordionSection>
      </Accordion>
      <br />
      <ButtonGroup>
        <Button onClick={() => setSectionOneIsOpen(!sectionOneIsOpen)}>
          {sectionOneIsOpen ? "Close" : "Open"} Section One
        </Button>
        <Button onClick={() => setSectionTwoIsOpen(!sectionTwoIsOpen)}>
          {sectionTwoIsOpen ? "Close" : "Open"} Section Two
        </Button>
        <Button onClick={() => setSectionThreeIsOpen(!sectionThreeIsOpen)}>
          {sectionThreeIsOpen ? "Close" : "Open"} Section Three
        </Button>
      </ButtonGroup>
    </>
  );
};

export default App;
