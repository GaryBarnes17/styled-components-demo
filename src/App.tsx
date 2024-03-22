import {
  AuiContainer,
  Button,
  colors,
  FlexTemplate,
  space,
  Text,
} from "@soluto-private/mx-asurion-ui-react";

import { styled } from "styled-components";
import StoryScheduler from "./Scheduler";

const CustomAuiContainer = styled(AuiContainer).attrs({
  alignItems: "center",
})`
  padding: ${space[200]};
  background-color: ${colors.white};
  border: 1px dashed ${colors.primaryDeep};
`;

const CustomText = styled(Text).attrs({
  size: 4,
})`
  text-align: center;
`;

const App = () => {
  const MyProgressStepper = () => (
    <FlexTemplate.ProgressStepperContainer>
      <FlexTemplate.ProgressStepper
        orientation="horizontal"
        size="small"
        steps={[
          {
            state: "complete",
          },
          {
            state: "inprogress",
            subSteps: [
              {
                state: "inprogress",
              },
            ],
          },
          {
            state: "incomplete",
          },
        ]}
      />
    </FlexTemplate.ProgressStepperContainer>
  );

  const appVerticalOffset = "0rem";

  return (
    <FlexTemplate
      upperVerticalOffset={appVerticalOffset}
      progressStepper={<MyProgressStepper />}
    >
      <FlexTemplate.MainContentContainer>
        <FlexTemplate.PageTitleContainer>
          <FlexTemplate.Heading>
            Defined h1 Style - Page Title Section
          </FlexTemplate.Heading>
          <FlexTemplate.Subheading>
            Subheading style. Spacing between sections is fixed to 48px. Further
            spacing options are available within children sections.
          </FlexTemplate.Subheading>
        </FlexTemplate.PageTitleContainer>
        <FlexTemplate.MainPanelContainer>
          <StoryScheduler />
        </FlexTemplate.MainPanelContainer>
      </FlexTemplate.MainContentContainer>
      <FlexTemplate.SidePanelContainer>
        <AuiContainer gap={space[600]}>
          <AuiContainer gap={space[300]} style={{ backgroundColor: "#F7E7FF" }}>
            <CustomAuiContainer>
              <CustomText>Child section (24px spacing between)</CustomText>
            </CustomAuiContainer>
            <CustomAuiContainer>
              <CustomText>
                + Add AUI components or nest custom local components here
              </CustomText>
            </CustomAuiContainer>
            <CustomAuiContainer>
              <CustomText>Child section (24px spacing between)</CustomText>
            </CustomAuiContainer>
            <CustomAuiContainer>
              <CustomText>Child section (24px spacing between)</CustomText>
            </CustomAuiContainer>
          </AuiContainer>
          <AuiContainer gap={space[300]} style={{ backgroundColor: "#F7E7FF" }}>
            <CustomAuiContainer>
              <CustomText>Child section (24px spacing between)</CustomText>
            </CustomAuiContainer>
            <CustomAuiContainer>
              <CustomText>
                + Add AUI components or nest custom local components here
              </CustomText>
            </CustomAuiContainer>
            <CustomAuiContainer>
              <CustomText>Child section (24px spacing between)</CustomText>
            </CustomAuiContainer>
            <CustomAuiContainer>
              <CustomText>Child section (24px spacing between)</CustomText>
            </CustomAuiContainer>
          </AuiContainer>
        </AuiContainer>
      </FlexTemplate.SidePanelContainer>
      <FlexTemplate.ButtonGroup alignment="end">
        <Button color="secondary">Continue</Button>
        <Button color="secondary" variant="outline">
          Back
        </Button>
      </FlexTemplate.ButtonGroup>
    </FlexTemplate>
  );
};

export default App;
