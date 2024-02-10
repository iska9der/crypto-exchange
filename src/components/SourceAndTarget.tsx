import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useApp } from "../lib/AppContext";
import InputField from "./InputField";
import SelectCurrency from "./SelectCurrency";

export default function SourceTarget() {
  const { currencies } = useApp();

  // currency identificators
  const [sourceCurrency, setSourceCurrency] = useState(1);
  const [targetCurrency, setTargetCurrency] = useState(3);

  const [isExchangeLoading, setIsExchangeLoading] = useState(false);

  const sourceHint = currencies.find((el) => el.id == sourceCurrency)?.hint;

  const [sourceValue, setSourceValue] = useState<number>(0);
  const [targetValue, setTargetValue] = useState<number>(0);
  const debounceExchange = useDebouncedCallback(
    (currencyId: number, value: number, setValue: (value: number) => void) => {
      fetchExchangeData(currencyId, value, setValue);
    },
    1500
  );

  const fetchExchangeData = async (
    currencyId: number,
    value: number,
    setValueCallback: (value: number) => void
  ) => {
    console.log(value);
    if (value == 0) {
      return setValueCallback(0);
    }

    console.log("fetch api/exchange");
    setIsExchangeLoading(true);
    await new Promise((_) => {
      setTimeout(() => {
        const outputValue = 1337 + value;
        setValueCallback(outputValue);
        setIsExchangeLoading(false);
      }, 2000);
    });
  };

  const swap = () => {
    setSourceValue(targetValue);
    setTargetValue(sourceValue);
    setSourceCurrency(targetCurrency);
    setTargetCurrency(sourceCurrency);
  };

  return (
    <div className="relative flex flex-col gap-y-6">
      <Wrapper disabled={isExchangeLoading}>
        <InputField
          className="flex-1"
          disabled={isExchangeLoading}
          name="source"
          label="Отдаете"
          inputValue={sourceValue}
          onInputChange={(value) => {
            setSourceValue(value);
            debounceExchange(sourceCurrency, value, setTargetValue);
          }}
          // todo: currencyExcluded: pass targetCurrency
        />
        <div className="flex flex-col items-end gap-y-2">
          {sourceHint && (
            <span className="text-[16px] text-[#7D858A]">{sourceHint}</span>
          )}
          <SelectCurrency value={sourceCurrency} onChange={setSourceCurrency} />
        </div>
      </Wrapper>
      <Wrapper disabled={isExchangeLoading}>
        <InputField
          className="flex-1"
          disabled={isExchangeLoading}
          name="target"
          label="Получаете"
          inputValue={targetValue}
          onInputChange={(value) => {
            setTargetValue(value);
            debounceExchange(targetCurrency, value, setSourceValue);
          }}
        />
        <SelectCurrency value={targetCurrency} onChange={setTargetCurrency} />
      </Wrapper>
      <SwapButton onSwap={swap} />
    </div>
  );
}

function Wrapper({
  children,
  disabled = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-row items-end ${
        disabled ? "bg-[#cdd0d3]" : "bg-[#F5F8FA]"
      } rounded-xl px-4 py-5 gap-x-2`}
    >
      {children}
    </div>
  );
}

function SwapButton({ onSwap }: { onSwap: () => void }) {
  return (
    <div
      onClick={onSwap}
      className="rounded-full h-[56px] w-[56px] flex bg-[#3E3F40] absolute m-auto left-0 right-0 top-0 bottom-0 transition ease-in-out hover:scale-110"
    >
      <img src="assets/swap.png" className="m-auto" />
    </div>
  );
}
