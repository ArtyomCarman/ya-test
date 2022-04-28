import { useContext } from "react";
import { IntlContext } from "./App";

export const ErrorText = () => {
  const intl = useContext(IntlContext);

  return (
    <>
      <h1>{intl["Error.Timeout"]}</h1>
    </>
  );
};
