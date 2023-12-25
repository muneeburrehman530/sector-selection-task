const InputName = ({ value, onInputChange }) => {
  const handleInputChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputName;
