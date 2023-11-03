import { ComponentProps } from "react";

interface TextInputProps {
  labelText: string;
  inputProps: ComponentProps<"input">;
  errorCondition: boolean;
}

export function TextInput({
  labelText,
  inputProps,
  errorCondition,
}: TextInputProps) {
  return (
    <div>
      <label htmlFor="name">{labelText}: </label>
      <input type="text" {...inputProps} />
      {errorCondition && (
        <div className="error">
          The {labelText} is invalid, it should be more than 2 letters
        </div>
      )}
    </div>
  );
}
