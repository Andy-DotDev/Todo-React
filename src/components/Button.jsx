const Button = (props) => {
  const {
    className = "",
    type = "button",
    children,
    isDisabled,
    onClick,
  } = props;
  return (
    <button
      className={`button ${className}`}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
