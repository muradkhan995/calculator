const Button = ({ value, onClick }) => (
    <button
      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );

  export default Button;
