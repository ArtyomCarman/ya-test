import { useContext, useEffect, useState } from "react";
import { IntlContext } from "./App";

const DELAY = 1000;

export const SpinnerText = () => {
  const intl = useContext(IntlContext);

  const [loadingNumber, setLoadingNumber] = useState(1);

  useEffect(() => {
    const timerId = setTimeout(
      () => setLoadingNumber((prev) => (prev >= 3 ? 1 : prev + 1)),
      DELAY
    );

    return () => clearTimeout(timerId);
  }, [loadingNumber]);

  switch (loadingNumber) {
    case 1:
      return <h1>{intl["Loading.First"]}</h1>;
    case 2:
      return <h1>{intl["Loading.Second"]}</h1>;
    case 3:
      return <h1>{intl["Loading.Third"]}</h1>;

    default:
      return null;
  }
};
