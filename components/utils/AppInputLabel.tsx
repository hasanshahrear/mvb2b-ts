interface Props {
  className: string;
  labelTitle: string;
}

export default function AppInputLabel({ className = "", labelTitle }: Props) {
  return (
    <label className={`block mb-2 font-semibold text-gray-900 ${className}`}>
      {labelTitle}
    </label>
  );
}
