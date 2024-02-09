import SelectCurrency from "./SelectCurrency";

interface Props {
  name: string;
  label: string;
  hint?: string | null;
  inputValue?: string | undefined;
  onInputChange: (value: string) => void;
  currencyValue: number;
  onCurrencyChange: (value: number) => void;
}

export default function InputField({
  name,
  label,
  hint,
  inputValue,
  onInputChange,
  currencyValue,
  onCurrencyChange,
}: Props) {
  return (
    <div className="relative flex flex-col bg-[#F5F8FA] rounded-xl px-4 py-5">
      <div className="flex flex-row items-center">
        <label className="flex-1 pb-[8px] text-[20px]" htmlFor={name}>
          {label}
        </label>
        {hint && <span className="text-[16px] text-[#7D858A]">{hint}</span>}
      </div>
      <div className="flex flex-row gap-x-1 items-center">
        <input
          className="flex-1 h-[48px] text-[32px] bg-[#F5F8FA]"
          name={name}
          type="text"
          placeholder="0"
          value={inputValue}
          onChange={(event) => onInputChange(event.target.value)}
        />
        <SelectCurrency value={currencyValue} onChange={onCurrencyChange} />
      </div>
    </div>
  );
}
