import { Textarea } from "@soluto-private/mx-asurion-ui-react";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({});
  return (
    <>
      <textarea
        onChange={(e) =>
          setFormData({ ...formData, textAreaOne: e.target.value })
        }
        value={formData?.textAreaOne}
      />
      <textarea
        onChange={(e) =>
          setFormData({ ...formData, textAreaTwo: e.target.value })
        }
        value={formData?.textAreaTwo}
      />
      <Textarea
        maxCharCount={100}
        onChange={(e) =>
          setFormData({ ...formData, textAreaThree: e.target.value })
        }
        label="Enter Some Text!"
        value={formData?.textAreaThree}
      />
      <Textarea
        onChange={(e) =>
          setFormData({ ...formData, textAreaFour: e.target.value })
        }
        label="Enter Some Text!"
        value={formData?.textAreaFour}
      />
      {JSON.stringify(formData)}
    </>
  );
};

export default App;
