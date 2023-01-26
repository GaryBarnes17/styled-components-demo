import { Feedback, CheckedValue } from "@soluto-private/mx-asurion-ui-react";
import { useState } from "react";

const App = () => {
  const [checked, setChecked] = useState(CheckedValue.UNSELECTED);
  return (
    <>
      <Feedback
        value={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = e.target as HTMLInputElement;
          value === checked
            ? setChecked(CheckedValue.UNSELECTED)
            : setChecked(value as CheckedValue);
        }}
      />
    </>
  );
};

export default App;
