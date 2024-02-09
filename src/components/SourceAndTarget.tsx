import React, { useState } from "react";
import { useApp } from "../lib/AppContext";
import InputField from "./InputField";
import SelectCurrency from "./SelectCurrency";

export default function SourceTarget() {
  const { currencies } = useApp();
  const [sourceValue, setSourceValue] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState(1);
  const [targetCurrency, setTargetCurrency] = useState(3);
  const sourceHint = currencies.find((el) => el.id == sourceCurrency)?.hint;

  const swap = () => {
    setSourceValue(targetValue);
    setTargetValue(sourceValue);
    setSourceCurrency(targetCurrency);
    setTargetCurrency(sourceCurrency);
  };

  return (
    <div className="relative flex flex-col gap-y-6">
      <Wrapper>
        <InputField
          className="flex-1"
          name="source"
          label="Отдаете"
          inputValue={sourceValue}
          onInputChange={(value) => setSourceValue(value)}
          // todo: currencyExcluded: pass targetCurrency
        />
        <div className="flex flex-col items-end gap-y-2">
          {sourceHint && (
            <span className="text-[16px] text-[#7D858A]">{sourceHint}</span>
          )}
          <SelectCurrency value={sourceCurrency} onChange={setSourceCurrency} />
        </div>
      </Wrapper>
      <Wrapper>
        <InputField
          className="flex-1"
          name="target"
          label="Получаете"
          inputValue={targetValue}
          onInputChange={(value) => setTargetValue(value)}
        />
        <SelectCurrency value={targetCurrency} onChange={setTargetCurrency} />
      </Wrapper>
      <SwapButton onSwap={swap} />
    </div>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-row items-end bg-[#F5F8FA] rounded-xl px-4 py-5 gap-x-2">
      {children}
    </div>
  );
}

function SwapButton({ onSwap }: { onSwap: () => void }) {
  return (
    <div
      onClick={onSwap}
      className="rounded-full h-11 w-11 flex bg-black absolute m-auto left-0 right-0 top-0 bottom-0 transition ease-in-out hover:scale-110"
    >
      <img src="assets/swap.png" className="m-auto" />
    </div>
  );
}
