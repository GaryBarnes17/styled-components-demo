import styled from "styled-components";
import { Button } from "@soluto-private/mx-asurion-ui-react";

const StyledButton = styled(Button)`
  color: palevioletred;
`;

const App = () => {
  return (
    <StyledButton variant="outline" onClick={() => console.log("clicked")}>
      Click me
    </StyledButton>
  );
};

export default App;
