import { useApp } from "../lib/AppContext";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function SelectCurrency({ value, onChange }: Props) {
  const { currencies } = useApp();

  function handleChange(event: any) {
    const newValue = event.target.value;
    onChange(newValue);
  }

  return (
    <select
      className="pl-[16px] py-2 rounded-full bg-[#F5F8FA] text-[18px] border-r-[12px] border-transparent outline outline-2 outline-neutral-300"
      value={value}
      onChange={handleChange}
    >
      {currencies.map((cur) => (
        <option key={cur.id} value={cur.id}>
          {cur.name}
        </option>
      ))}
    </select>
  );
}
