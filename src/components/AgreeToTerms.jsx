import "./componentStyles/AgreeToTerms.css";
const AgreeToTerms = ({ isChecked, onCheckboxChange }) => {
  const handleCheckboxChange = (e) => {
    onCheckboxChange(e.target.checked);
  };

  return (
    <div className="row">
      <div className="col-md-6 text-start">
        <label>
          <input
            className="input-check mb-3"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Agree to Terms
        </label>
      </div>
    </div>
  );
};

export default AgreeToTerms;
