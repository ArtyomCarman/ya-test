import { LOCALE } from "./locale";

export const messages: Messages = {
  [LOCALE.RUSSIAN]: {
    "Loading.First": "Виджет грузится",
    "Loading.Second": "Виджет ещё грузится",
    "Loading.Third": "Загрузка идёт дольше чем обычно. Пожалуйста, подождите",
    "Error.Timeout": "Ошибка при загрузке. Пожалуйста -- обновите окно",
    "Success.LoadingFinished": "Виджет загружен!",
  },
  [LOCALE.ENGLISH]: {
    "Loading.First": "Widget is loading",
    "Loading.Second": "Widget is still loading",
    "Loading.Third": "Loading takes longer than usual. Wait, please",
    "Error.Timeout": "Error while loading. Please refresh the window",
    "Success.LoadingFinished": "Widget loaded!",
  },
};

interface Messages {
  [key: string]: Record<string, string>;
}
