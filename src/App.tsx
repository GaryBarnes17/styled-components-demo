import { Drawer, Button } from "@soluto-private/mx-asurion-ui-react";
import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show Drawer</Button>
      <Drawer
        footer={{
          primaryButton: {
            children: "Foo",
          },
          secondaryButton: {
            children: "Bar",
            variant: "outline",
          },
          view: "two",
        }}
        imgSrc="https://assets.asurion-ui.my.asurion53.com/images/stories/aui-story-img.jpg"
        onOpenUpdate={(open) => setIsOpen(open)}
        open={isOpen}
      />
    </>
  );
};

export default App;
