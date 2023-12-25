const AgreeToTerms = ({ isChecked, onCheckboxChange }) => {
  const handleCheckboxChange = (e) => {
    onCheckboxChange(e.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Agree to Terms
      </label>
    </div>
  );
};

export default AgreeToTerms;
