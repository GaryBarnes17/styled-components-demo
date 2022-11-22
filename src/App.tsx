import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Callout,
  DeviceCard,
  Dropdown,
  RadioSelectionCard,
  Text,
  TextField,
} from "@soluto-private/mx-asurion-ui-react";

// TODO - fix text fields (or replace), center fields, fill out travel questions

const StyledButton = styled(Button).attrs({
  variant: "outline",
})<{ isSubmitted: boolean }>`
  color: ${(props) => (props.isSubmitted ? "#3EB489" : "palevioletred")};
`;

const PageContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1056px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
  }
`;

const StyledCallout = styled(Callout)`
  background-color: papayawhip;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const handleBackground = (val1: string, val2: string) => {
  if (val1 && val2) return "#3EB489";
  else if (val1 || val2) return "yellow";
  else return "palevioletred";
};

const FormCard = styled(DeviceCard)`
  background: ${(props) => handleBackground(props.value1, props.value2)};
`;

const SectionHeader = styled(Text).attrs({ size: 3, weight: "heavy" })``;

const workOptions = [
  { name: "Nashville", value: "Nashville" },
  { name: "Sterling", value: "Sterling" },
  { name: "Remote", value: "Remote" },
];
const preferenceOptions = [
  { name: "In-Person", value: "In-Person" },
  { name: "Hybrid", value: "Hybrid" },
  { name: "Remote", value: "Remote" },
];

const App = () => {
  const [location, setLocation] = useState("");
  const [preference, setPreference] = useState("");
  const [iceCream, setIceCream] = useState("");
  const [pizza, setPizza] = useState("");
  const [dummy1, setDummy1] = useState("");
  const [dummy2, setDummy2] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <PageContainer>
      <Text size={8} weight="heavy" as="h1">
        This is a Form
      </Text>
      <StyledCallout
        content="This is a nonsensical page complete with a form. This is not up to par with Asurion design standards, and you should not design things like this"
        heading="Hello, Everyone!"
        iconSrc="Smiley"
      />
      <Row>
        <FormCard
          value1={location}
          value2={preference}
          iconSrc="Laptop"
          primary="Work"
        />
        <FormCard
          value1={pizza}
          value2={iceCream}
          iconSrc="Stove"
          primary="Food"
        />
        <FormCard
          iconSrc="Share"
          primary="Travel"
          value1={dummy1}
          value2={dummy2}
        />
      </Row>
      <Row>
        <SectionHeader>Work Preferences</SectionHeader>
      </Row>
      <Row>
        <Dropdown
          label="Where do you work from?"
          options={workOptions}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Dropdown
          label="Preferred work location?"
          options={preferenceOptions}
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
        />
      </Row>
      <Row>
        <SectionHeader>Food Preferences</SectionHeader>
      </Row>
      <Row>
        <Text>Favorite Ice Cream</Text>
        <RadioSelectionCard
          name="iceCream"
          onChange={(e) => setIceCream(e.target.value)}
          showCircle
          value="vanilla"
          checked={iceCream === "vanilla"}
        >
          Vanilla
        </RadioSelectionCard>
        <RadioSelectionCard
          name="iceCream"
          onChange={(e) => setIceCream(e.target.value)}
          showCircle
          value="chocolate"
          checked={iceCream === "chocolate"}
        >
          Chocolate
        </RadioSelectionCard>
        <RadioSelectionCard
          name="iceCream"
          onChange={(e) => setIceCream(e.target.value)}
          showCircle
          value="strawberry"
          checked={iceCream === "strawberry"}
        >
          Strawberry
        </RadioSelectionCard>
        <Text>Favorite Pizza Topping</Text>
        <RadioSelectionCard
          name="pizza"
          onChange={(e) => setPizza(e.target.value)}
          showCircle
          value="cheese"
          checked={pizza === "cheese"}
        >
          Cheese
        </RadioSelectionCard>
        <RadioSelectionCard
          name="pizza"
          onChange={(e) => setPizza(e.target.value)}
          showCircle
          value="Pepperoni"
          checked={pizza === "Pepperoni"}
        >
          Pepperoni
        </RadioSelectionCard>
        <RadioSelectionCard
          name="pizza"
          onChange={(e) => setPizza(e.target.value)}
          showCircle
          value="Veggies"
          checked={pizza === "veggies"}
        >
          Veggies
        </RadioSelectionCard>
      </Row>
      <Row>
        <SectionHeader>Travel Preferences</SectionHeader>
      </Row>
      <Row>
        <TextField
          label="Where was your most recent vacation?"
          helperText="Helper text or validation goes here"
          value={dummy1}
          onChange={(e) => setDummy1(e.target.value)}
        />
        <TextField
          label="Where is the next vacation you have planned?"
          helperText="Helper text or validation goes here"
          value={dummy2}
          onChange={(e) => setDummy2(e.target.value)}
        />
      </Row>
      <Row>
        <StyledButton
          isSubmitted={isSubmitted}
          onClick={() => setIsSubmitted(!isSubmitted)}
        >
          {isSubmitted ? "Un-Submit" : "Submit"}
        </StyledButton>
      </Row>
    </PageContainer>
  );
};

export default App;
