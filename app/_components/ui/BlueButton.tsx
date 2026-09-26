type BlueButtonProps = {
  text: string;
  className?: string;
};

export const BlueButton = ({ text, className = "" }: BlueButtonProps) => {
  return (
    <>
      <button className={`bg-blue-600 text-white rounded-lg px-5 py-3 font-semibold text-md tracking-wide transition-all duration-500 hover:bg-white hover:text-black cursor-pointer ${className}`}>
        {text}
      </button>
    </>
  );
};
