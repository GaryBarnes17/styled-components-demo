import {
  Feedback,
  CheckedValueType,
  CheckedValue,
  FeedbackVariant,
} from "@soluto-private/mx-asurion-ui-react";
import React, { useState } from "react";

const App = () => {
  const [feedbackVal, setFeedbackVal] = useState<CheckedValueType>(
    CheckedValue.UNSELECTED
  );
  return (
    <>
      <Feedback
        value={feedbackVal}
        variant={FeedbackVariant.CHECK}
        onClick={(e: React.MouseEvent) => {
          const { value } = e.target as HTMLInputElement;
          feedbackVal === value
            ? setFeedbackVal(CheckedValue.UNSELECTED)
            : setFeedbackVal(value as CheckedValueType);
        }}
      />
    </>
  );
};

export default App;
