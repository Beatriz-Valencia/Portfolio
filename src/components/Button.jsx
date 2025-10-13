import "./Button.css";

export default function Button({
  type = "button",
  label,
  onClick,
  className = "general_button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
