interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ label, type = "button", onClick }) => {
  const handleClick = () => {
    if (onClick) return onClick();

    return;
  };
  return (
    <button
      className="
        py-4
        px-5

        md:py-6
        md:px-7
        bg-dx_DarkSlateGrey
        text-dx_White
        text-sm
        font-semibold
        rounded-lg
        w-full
        outline-none

        hover:bg-gradient-to-r
        hover:from-pink-500
        hover:to-primary
        hover:shadow-xl
        hover:shadow-primary/20

        transition
      "
      type={type}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
