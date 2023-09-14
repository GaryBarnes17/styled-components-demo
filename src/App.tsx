import { PredictiveTextField } from "@soluto-private/mx-asurion-ui-react";
import styled from "styled-components";
import { useState } from "react";

const ParentContainer = styled.div`
  border: solid teal 10px;
  width: 500px;
`;

const ChildContainer = styled.div`
  width: 100%;
  border: solid #5b6dcd 10px;
  padding: 5px;
`;

const suggestions: any[] = [
  {
    id: "id1",
    header: "testHeader1",
    subHeader: "testSubHeader1",
    value: "",
  },
  {
    id: "id2",
    header: "testHeader2",
    subHeader: "testSubHeader2",
    value: "",
  },
  {
    id: "id3",
    header: "testHeader3",
    subHeader: "testSubHeader3",
    value: "",
  },
  {
    id: "id4",
    header: "testHeader4",
    subHeader: "testSubHeader4",
    value: "",
  },
  {
    id: "id5",
    header: "testHeader5",
    subHeader: "testSubHeader5",
    value: "",
  },
  {
    id: "id6",
    header: "testHeader6",
    subHeader: "testSubHeader6",
    value: "",
  },
  {
    id: "id7",
    header: "testHeader7",
    subHeader: "testSubHeader7",
    value: "",
  },
  {
    id: "id8",
    header: "testHeader8",
    subHeader: "testSubHeader8",
    value: "",
  },
  {
    id: "id9",
    header: "testHeader9",
    subHeader: "testSubHeader9",
    value: "",
  },
  {
    id: "id10",
    header: "testHeader10",
    subHeader: "testSubHeader10",
    value: "",
  },
  {
    id: "id11",
    header: "testHeader11",
    subHeader: "testSubHeader11",
    value: "",
  },
  {
    id: "id12",
    header: "testHeader12",
    subHeader: "testSubHeader12",
    value: "",
  },
];

const StyledPredictiveTextField = styled(PredictiveTextField)`
  * {
    box-sizing: content-box;
  }
`;

const App = () => {
  const [val, setVal] = useState("");
  return (
    <>
      <ParentContainer>
        <ChildContainer>Hello </ChildContainer>
      </ParentContainer>
      <StyledPredictiveTextField
        label="Sample Label"
        suggestions={suggestions}
        value={val}
        handleChange={(val) => setVal(val)}
        shouldFilterSuggestions
      />
    </>
  );
};

export default App;
