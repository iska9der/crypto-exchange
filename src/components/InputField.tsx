
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  label: string;
  hint?: string | null;
  inputValue?: string | undefined;
  onInputChange: (value: string) => void;
}

export default function InputField({
  name,
  label,
  hint,
  inputValue,
  onInputChange,
  ...props
}: Props) {
  return (
    <div className={`relative flex flex-col bg-[#F5F8FA] rounded-xl ${props.className}`}>
      <label className="flex-1 pb-[8px] text-[20px]" htmlFor={name}>
          {label}
        </label>
      <input
          className="flex-1 h-[48px] text-[32px] bg-[#F5F8FA] w-full"
          name={name}
          type="number"
          placeholder="0"
          value={inputValue}
          onChange={(event) => onInputChange(event.target.value)}
        />
    </div>
  );
}
