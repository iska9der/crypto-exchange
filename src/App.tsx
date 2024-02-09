import { useEffect, useState } from "react";
import SourceTarget from "./components/SourceAndTarget";

function App() {
  const webApp = Telegram.WebApp;

  //////
  // Main button init
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const buttonColor = isButtonEnabled ? "#2585BB" : "#D5DEE3";
  const textColor = isButtonEnabled ? "#F5F8FA" : "#3E3F40";

  useEffect(() => {
    webApp.MainButton.setParams({
      text: "Отправить заявку",
      color: buttonColor,
      text_color: textColor,
      is_visible: true,
    });
    webApp.MainButton.disable();
    webApp.MainButton.show();
    webApp.MainButton.onClick(handleClick);
  }, []);

  useEffect(() => {
    webApp.MainButton.setParams({
      color: buttonColor,
      text_color: textColor,
    });

    if (isButtonEnabled) {
      webApp.MainButton.enable();
    } else {
      webApp.MainButton.disable();
    }
  }, [isButtonEnabled]);

  const handleClick = () => {
    webApp.showAlert("HELLO KAK GOVORITSYA!");
  };
  //////

  return (
    <div className="px-5">
      <header className="pt-4 pb-8">
        <p className="text-[30px] text-center">Hayat Crypto</p>
      </header>
      <SourceTarget />
    </div>
  );
}

export default App;
