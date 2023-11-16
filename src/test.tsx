import { useState } from "react";
import "./App.css";
import { TextInput } from "./TextInput";

export function App() {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const reset = () => {
    setFirstNameInput("");
    setLastNameInput("");
    setIsFormSubmitted(false);
  };

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (firstNameInput.length <= 2 || lastNameInput.length <= 2) {
              setIsFormSubmitted(true);
              return;
            }

            reset();
          }}
        >
          <TextInput
            inputProps={{
              onChange: (e) => {
                setFirstNameInput(e.target.value);
              },
              value: firstNameInput,
              placeholder: "first name",
            }}
            labelText={"First Name"}
            errorCondition={firstNameInput.length <= 2 && isFormSubmitted}
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
            errorCondition={lastNameInput.length <= 2 && isFormSubmitted}
          />

          <input value="submit" type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
