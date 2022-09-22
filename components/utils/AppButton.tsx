interface Props {
  className: string;
  btnText: string;
  type: "button" | "submit" | "reset";
  onClick: () => void;
}

export default function AppButton({
  className = "",
  btnText,
  type,
  onClick,
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`rounded-md ${className}`}>
      {btnText}
    </button>
  );
}
