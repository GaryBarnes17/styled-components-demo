import { SelectionChips } from "@soluto-private/mx-asurion-ui-react";
import React, { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <SelectionChips
        chips={[
          {
            label: "Chip 1",
          },
          {
            label: "Chip 2",
          },
          {
            label: "Chip 3",
          },
          {
            label: "Chip 4",
          },
        ]}
        layout="nowrap"
        options={{
          defaultSelectionIndex: 1,
          edgeItemsMargin: "0px",
          multiSelect: true,
        }}
        size="small"
        type="selection"
        variant="normal"
        onSelectionChange={(chips) => console.log(chips)}
      />
    </>
  );
};

export default App;
