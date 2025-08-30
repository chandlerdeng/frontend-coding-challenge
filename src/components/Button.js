const sizes = {
  large: "px-5 py-3 text-base",
  medium: "px-4 py-2 text-sm",
  small: "px-3 py-1 text-xs",
};
const styles = {
  default: "",
  disabled: "bg-gray-300",
};
const colors = {
  primary: "bg-orange-400 hover:bg-orange-500",
  normal: "bg-blue-400 hover:bg-blue-500",
};
const basic = 'outline outline-offset-[-3px] outline-2 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';

const Button = ({ blok }) => {
  const isDisabled = blok.style === "disabled";
  const buttonStyle = styles[blok.style] || styles.default;
  const size = sizes[blok.size] || sizes.medium;
  const color = isDisabled ? "" : colors[blok.button_color] || colors.primary;

  return (
    <a
      href={blok.link.cached_url}
      className={`${size} ${buttonStyle} ${color} ${basic}`}
    >
      <span className="text-black">{blok.label}</span>
    </a>
  );
};

export default Button;
