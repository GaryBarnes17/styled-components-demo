import {
  Carousel,
  CarouselIndicator,
  DeviceCard,
  Card,
} from "@soluto-private/mx-asurion-ui-react";
import styled from "styled-components";
import { useState } from "react";

const data = [
  "Item One",
  "Item Two",
  "Item Three",
  "Item Four",
  "Item Five",
  "Item Six",
  "Item Seven",
  "Item Eight",
  "Item Nine",
];

const Container = styled.div`
  padding-top: 1rem;
`;

const IndicatorContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: center;
`;

const App = () => {
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <Carousel
        minWidth={9.5}
        options={{
          hideScrollbar: true,
          scrollHint: 0.5,
          scrollInterval: undefined,
          scrollSnapAlign: "center",
          scrollStep: "full-width",
          suggestiveFade: false,
        }}
        handleCurrentDotIndexChange={(i) => {
          setIndex(i);
        }}
        currentIndex={index}
      >
        {data.map((text, i) => (
          <Card key={i}>{text}</Card>
        ))}
      </Carousel>
      <IndicatorContainer>
        <CarouselIndicator
          currentIndex={index}
          totalItems={data.length}
          handleCarouselIndicatorClick={(i) => setIndex(i)}
        />
      </IndicatorContainer>
    </Container>
  );
};

export default App;
