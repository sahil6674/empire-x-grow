type SimpleBtnProps = {
    text: string;
    className?: string;
};

export const SimpleButton = ({ text, className = "" } : SimpleBtnProps) => {
  return (
    <>
        <button className={`text-sm font-semibold tracking-wider border border-gray-300 px-5 py-3 rounded-lg transition-all duration-300 hover:bg-amber-500 hover:border-amber-500 hover:text-black cursor-pointer ${className}`}>{text}</button>
    </>
  )
}
