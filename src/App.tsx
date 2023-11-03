import { useState, useRef } from "react";
import "./App.css";
import { TextInput } from "./TextInput";

export function App() {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    formRef.current?.reset();
  };

  return (
    <>
      <div>
        <form ref={formRef} onSubmit={handleFormSubmit}>
          <TextInput
            inputProps={{
              onChange: (e) => {
                setFirstNameInput(e.target.value);
              },
              value: firstNameInput,
              placeholder: "first name",
            }}
            labelText={"First Name"}
            errorCondition={firstNameInput.length < 2 && isFormSubmitted}
          />
          <TextInput
            inputProps={{
              onChange: (e) => {
                setLastNameInput(e.target.value);
              },
              value: lastNameInput,
              placeholder: "last name",
            }}
            labelText={"Last Name"}
            errorCondition={lastNameInput.length < 2 && isFormSubmitted}
          />

          <input value="submit" type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
