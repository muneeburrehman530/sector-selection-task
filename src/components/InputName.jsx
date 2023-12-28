import "./componentStyles/InputName.css";
const InputName = ({ value, onInputChange }) => {
  const handleInputChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="row ">
      <div className="input  text-start">
        <label htmlFor="name" className="pb-1">
          Name
        </label>
        <input
          className="input-field w-100 mb-3"
          type="text"
          placeholder="Enter your name"
          value={value}
          onChange={handleInputChange}
          id="name"
        />
      </div>
    </div>
  );
};

export default InputName;
