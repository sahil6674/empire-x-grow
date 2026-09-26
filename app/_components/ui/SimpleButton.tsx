type SimpleBtnProps = {
    text: string;
    className?: string;
};

export const SimpleButton = ({ text, className = "" } : SimpleBtnProps) => {
  return (
    <>
        <button className={`text-sm tracking-wider border border-gray-300 px-5 py-3 rounded-lg transition-all duration-300 hover:border-blue-400 hover:text-blue-400 cursor-pointer ${className}`}>{text}</button>
    </>
  )
}
