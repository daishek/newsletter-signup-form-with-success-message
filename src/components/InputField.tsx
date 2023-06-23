interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  placeholder = "",
  error = "",
}) => {
  return (
    <fieldset className="space-y-1">
      <div className="flex justify-between">
        <label htmlFor={name} className="text-xs font-semibold">
          {label}
        </label>
        {error && <p className="text-red-400 text-xs font-semibold">{error}</p>}
      </div>
      <input
        id={name}
        type="text"
        name={name}
        placeholder={placeholder}
        className={`
            py-3
            px-4
            md:py-5
            md:px-6
            border-[1.5px]
            border-gray-300
            text-gray-300
            placeholder-gray-300
            rounded-lg
            w-full
            outline-none

            focus:text-gray-800
            focus:border-gray-800

            transition

            ${
              error &&
              "text-red-400 border-red-400 bg-red-50 focus:border-red-400"
            }
        `}
      />
    </fieldset>
  );
};

export default InputField;
