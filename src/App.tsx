import { useState } from "react";
import { Tabs, Button } from "@soluto-private/mx-asurion-ui-react";
import styled from "styled-components";

const StyledTabs = styled(Tabs)`
  padding-bottom: 1rem !important;

  button {
    color: purple;
  }
`;

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <StyledTabs
        activeTabIndex={tabIndex}
        onChange={({ value }) => setTabIndex(value)}
        tabs={[
          {
            iconSrc: "IconPlaceholder",
            title: "Nav Item",
          },
          {
            iconSrc: "IconPlaceholder",
            title: "Nav Item",
          },
          {
            iconSrc: "IconPlaceholder",
            title: "Nav Item",
          },
        ]}
      />
      <Button
        onClick={() => {
          if (tabIndex === 2) setTabIndex(0);
          else setTabIndex(tabIndex + 1);
        }}
      >
        Increment
      </Button>
    </>
  );
};

export default App;
