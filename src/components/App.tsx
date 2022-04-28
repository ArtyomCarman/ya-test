import { createContext, Suspense, useState, lazy } from "react";

import { LOCALE } from "../i18n/locale";
import { messages } from "../i18n/messages";

import { SpinnerWithText } from "./SpinnerWithText";
import { ErrorBoundary } from "./ErrorBoundary";
import { ErrorText } from "./ErrorText";

import "./App.css";

const SomeConvenientWidget = lazy(async () => {
  await wait(5000);
  return import("./SomeConvenientWidget");
});

export const IntlContext = createContext(messages[LOCALE.RUSSIAN]);

export const App = () => {
  const [locale, setLocale] = useState(LOCALE.RUSSIAN);

  const changeLocale = (locale: string) => () => setLocale(locale);

  return (
    <IntlContext.Provider value={messages[locale]}>
      <div className="buttons">
        <button onClick={changeLocale(LOCALE.RUSSIAN)}>
          Change to Russian
        </button>
        <button onClick={changeLocale(LOCALE.ENGLISH)}>
          Change to English
        </button>
      </div>

      <ErrorBoundary fallback={<ErrorText />}>
        <Suspense fallback={<SpinnerWithText />}>
          <SomeConvenientWidget />
        </Suspense>
      </ErrorBoundary>
    </IntlContext.Provider>
  );
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
