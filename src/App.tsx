import { useState } from "react";
import { Success, ValidationForm } from "./components";

const App = () => {
  const [validatedEmail, setValidatedEmail] = useState("");
  const [isFormValidated, setIsFormValidated] = useState(false);

  if (isFormValidated)
    return (
      <Success
        email={validatedEmail}
        setsetIsFormValidated={setIsFormValidated}
      />
    );

  return (
    <ValidationForm
      setIsFormValidated={setIsFormValidated}
      setValidatedEmail={setValidatedEmail}
    />
  );
};

export default App;
