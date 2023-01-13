import styled from "styled-components";
import {
  RadioSelectionCard,
  Text,
  colors,
} from "@soluto-private/mx-asurion-ui-react";

const StyledRadio = styled(RadioSelectionCard)`
  width: 80px;
  height: 80px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const App = () => {
  return (
    <StyledRadio showCircle={false}>
      <Container>
        <Text size={2}>Mon</Text>
        <Text size={1} color={colors.neutralDeeper}>
          8/12
        </Text>
      </Container>
    </StyledRadio>
  );
};

export default App;
