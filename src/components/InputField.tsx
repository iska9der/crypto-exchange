interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  label: string;
  inputValue?: number | undefined;
  onInputChange: (value: number) => void;
  className?: string | undefined;
  disabled?: boolean
}

export default function InputField({
  name,
  label,
  inputValue,
  onInputChange,
  className,
  disabled = false,
}: Props) {
  return (
    <div
      className={`relative flex flex-col rounded-xl ${className}`}
    >
      <label className="flex-1 pb-[8px] text-[20px]" htmlFor={name}>
        {label}
      </label>
      <input
        className="flex-1 h-[48px] text-[32px] bg-inherit w-full outline-none"
        disabled={disabled}
        name={name}
        inputMode="numeric"
        pattern="[0-9]*"
        type="text"
        placeholder="0"
        value={inputValue?.toString()}
        onChange={(event) => {
          const value =
            event.target.value.length == 0 ? 0 : parseFloat(event.target.value);

          return onInputChange(value);
        }}
      />
    </div>
  );
}
