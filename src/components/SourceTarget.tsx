import { useState } from "react";
import InputField from "./InputField";

export default function SourceTarget() {
  const [sourceValue, setSourceValue] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [sourceCurrency, setSourceCurrency] = useState(1);
  const [targetCurrency, setTargetCurrency] = useState(3);

  function swap() {
    setSourceValue(targetValue);
    setTargetValue(sourceValue);
    setSourceCurrency(targetCurrency);
    setTargetCurrency(sourceCurrency);
  }

  return (
    <div className="relative flex flex-col gap-y-6">
      <InputField
        name="source"
        label="Отдаете"
        hint={"gagag"}
        inputValue={sourceValue}
        onInputChange={(value) => setSourceValue(value)}
        currencyValue={sourceCurrency}
        onCurrencyChange={(value) => setSourceCurrency(value)}
      />
      <InputField
        name="source"
        label="Получаете"
        inputValue={targetValue}
        onInputChange={(value) => setTargetValue(value)}
        currencyValue={targetCurrency}
        onCurrencyChange={(value) => setTargetCurrency(value)}
      />
      <div
        onClick={swap}
        className="rounded-full h-11 w-11 flex bg-black absolute m-auto left-0 right-0 top-0 bottom-0 transition ease-in-out hover:scale-110"
      >
        <img src="assets/swap.png" className="m-auto" />
      </div>
    </div>
  );
}
