import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Callout,
  DeviceCard,
  Dropdown,
  RadioSelectionCard,
  Text,
} from "@soluto-private/mx-asurion-ui-react";

// other things to include - meal of day, fav food, then section to describe favorite meal and submit

const StyledButton = styled(Button).attrs({ variant: "outline" })`
  color: palevioletred;
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

const StyledDeviceCard = styled(DeviceCard).attrs({ type: "selection" })`
  background-color: paleturquoise;
`;

const SectionHeader = styled(Text).attrs({ size: 3, weight: "heavy" })``;

const handleClick = () => {
  console.log("clicked");
};

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
  return (
    <PageContainer>
      <Text size={8} weight="heavy" as="h1">
        This is a Form
      </Text>
      <StyledCallout
        content="This is a nonsensical page complete with a form. This is not up to par with Asurion design standards, and you should not design things like this. Here are some devices "
        heading="Hello, Everyone!"
        iconSrc="Smiley"
      />
      <Row>
        <StyledDeviceCard iconSrc="SmartDoorBell" primary="Smart Doorbell" />
        <StyledDeviceCard iconSrc="SmartSpeaker" primary="Smart Speaker" />
        <StyledDeviceCard iconSrc="Printer" primary="Printer" />
        <StyledDeviceCard iconSrc="GamingConsole" primary="Gaming Console" />
        <StyledDeviceCard iconSrc="Printer" primary="Printer" />
        <StyledDeviceCard iconSrc="GamingConsole" primary="Gaming Console" />
      </Row>
      <Row>
        <SectionHeader>Work Prefrences</SectionHeader>
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
      </Row>
      <Row>
        <StyledButton onClick={handleClick}>Click me to Submit</StyledButton>
      </Row>
    </PageContainer>
  );
};

export default App;
