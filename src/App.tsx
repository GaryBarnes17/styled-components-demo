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
import { workOptions, preferenceOptions } from "./data";
import { StyledForm, Row, SectionHeader, StyledTextarea } from "./elements";

const App = () => {
  const [workLocation, setWorkLocation] = useState("");
  const [workPreference, setWorkPreference] = useState("");
  const [favIceCream, setFavIceCream] = useState("");
  const [favPizza, setFavPizza] = useState("");
  const [recentVacation, setRecentVacation] = useState("");
  const [favoriteVacation, setFavoriteVacation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert(
      !isSubmitted
        ? "Your form has been submitted!"
        : "Your form has been unsubmitted!"
    );
    setIsSubmitted(!isSubmitted);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Text size={8} weight="heavy" as="h1">
        This is a Form
      </Text>
      <Callout
        content="This is a nonsensical page complete with a form. This is not up to par with Asurion design standards, and you should not design things like this"
        heading="Hello, Everyone!"
        iconSrc="Smiley"
      />
      <Row>
        <DeviceCard iconSrc="Laptop" primary="Work" />
        <DeviceCard iconSrc="Stove" primary="Food" />
        <DeviceCard iconSrc="Share" primary="Travel" />
      </Row>
      <Row>
        <SectionHeader>Work Preferences</SectionHeader>
      </Row>
      <Row>
        <Dropdown
          label="Where do you work from?"
          options={workOptions}
          value={workLocation}
          onChange={(e) => setWorkLocation(e.target.value)}
        />
        <Dropdown
          label="Preferred work location?"
          options={preferenceOptions}
          value={workPreference}
          onChange={(e) => setWorkPreference(e.target.value)}
        />
      </Row>
      <Row>
        <SectionHeader>Food Preferences</SectionHeader>
      </Row>
      <Row>
        <Text>Favorite Ice Cream</Text>
        <RadioSelectionCard
          name="favIceCream"
          onChange={(e) => setFavIceCream(e.target.value)}
          showCircle
          value="vanilla"
          checked={favIceCream === "vanilla"}
        >
          Vanilla
        </RadioSelectionCard>
        <RadioSelectionCard
          name="favIceCream"
          onChange={(e) => setFavIceCream(e.target.value)}
          showCircle
          value="chocolate"
          checked={favIceCream === "chocolate"}
        >
          Chocolate
        </RadioSelectionCard>
        <RadioSelectionCard
          name="favIceCream"
          onChange={(e) => setFavIceCream(e.target.value)}
          showCircle
          value="strawberry"
          checked={favIceCream === "strawberry"}
        >
          Strawberry
        </RadioSelectionCard>
        <Text>Favorite Pizza Topping</Text>
        <RadioSelectionCard
          name="favPizza"
          onChange={(e) => setFavPizza(e.target.value)}
          showCircle
          value="cheese"
          checked={favPizza === "cheese"}
        >
          Cheese
        </RadioSelectionCard>
        <RadioSelectionCard
          name="favPizza"
          onChange={(e) => setFavPizza(e.target.value)}
          showCircle
          value="Pepperoni"
          checked={favPizza === "Pepperoni"}
        >
          Pepperoni
        </RadioSelectionCard>
        <RadioSelectionCard
          name="favPizza"
          onChange={(e) => setFavPizza(e.target.value)}
          showCircle
          value="Veggies"
          checked={favPizza === "veggies"}
        >
          Veggies
        </RadioSelectionCard>
      </Row>
      <Row>
        <SectionHeader>Travel Preferences</SectionHeader>
      </Row>
      <Row>
        <StyledTextarea
          label="What was the destination of your most recent vacation, and why?"
          helperText="Helper text or validation goes here"
          value={recentVacation}
          onChange={(e) => setRecentVacation(e.target.value)}
        />
        <StyledTextarea
          label="Where and when is the next vacation you have planned?"
          helperText="Helper text or validation goes here"
          value={favoriteVacation}
          onChange={(e) => setFavoriteVacation(e.target.value)}
        />
      </Row>
      <Row>
        <Button variant="outline" type="submit">
          {isSubmitted ? "Un-Submit" : "Submit"}
        </Button>
      </Row>
    </StyledForm>
  );
};

export default App;
