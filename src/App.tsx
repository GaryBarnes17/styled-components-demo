import { FlexTemplate } from "@soluto-private/mx-asurion-ui-react";
import StoryScheduler from "./Scheduler";
import styled from "styled-components";

const StyledFlex = styled(FlexTemplate)`
  grid-template-areas: "main-panel";
  grid-template-columns: auto;
`;

const App = () => {
  return (
    <StyledFlex upperVerticalOffset="0">
      <FlexTemplate.MainPanelContainer>
        <StoryScheduler />
      </FlexTemplate.MainPanelContainer>
    </StyledFlex>
  );
};

export default App;
