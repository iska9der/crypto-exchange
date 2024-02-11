import React, { createContext, useContext, useEffect, useState } from "react";
import { TelegramWebApps } from "telegram-webapps";

interface TgData {
  app: TelegramWebApps.WebApp;
  mainButton: {
    state: TelegramWebApps.MainButton;
    disableButton: () => void;
    enableButton: () => void;
  };
}

const TgContext = createContext({} as TgData);

export const useTg = () => useContext(TgContext);

export const TgProvider = ({ children }: { children: React.ReactNode }) => {
  const webApp = Telegram.WebApp;

  const mainButton = webApp.MainButton;
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const buttonColor = isButtonEnabled ? "#2585BB" : "#D5DEE3";
  const textColor = isButtonEnabled ? "#F5F8FA" : "#3E3F40";

  useEffect(() => {
    mainButton.setParams({
      text: "Отправить заявку",
      is_visible: true,
      is_active: false,
      color: buttonColor,
      text_color: textColor,
    });
    mainButton.onClick(handleClick);
  }, []);

  useEffect(() => {
    mainButton.setParams({
      color: buttonColor,
      text_color: textColor,
    });

    if (isButtonEnabled) {
      mainButton.enable();
    } else {
      mainButton.disable();
    }
  }, [isButtonEnabled]);

  const handleClick = () => {
    console.log("Main button pressed");
  };

  const enableButton = () => {
    setButtonEnabled(true);
  };

  const disableButton = () => {
    setButtonEnabled(false);
  };

  return (
    <TgContext.Provider
      value={{
        app: webApp,
        mainButton: {
          state: mainButton,
          disableButton: disableButton,
          enableButton: enableButton,
        },
      }}
    >
      {children}
    </TgContext.Provider>
  );
};
