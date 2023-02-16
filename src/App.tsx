import {
  Feedback,
  CheckedValueType,
  CheckedValue,
  StarRating,
} from "@soluto-private/mx-asurion-ui-react";
import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [feedbackVal, setFeedbackVal] = useState<CheckedValueType>(
    CheckedValue.UNSELECTED
  );
  return (
    <>
      <StarRating
        color="default"
        label="100+"
        tooltip="See tooltip"
        value={3.2}
        variant="static"
      />
    </>
  );
};

export default App;
