import { useState } from "react";
import AgreeToTerms from "../components/AgreeToTerms";
import InputName from "../components/InputName";
import SelectOptions from "../components/SelectOptions";
import { PostSelectedData } from "../services/userService";

const EnterNameAndSector = () => {
  const [name, setName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleNameChange = (input) => {
    setName(input);
  };

  const handleOptionsChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };

  const handleCheckboxChange = (isChecked) => {
    setTermsAccepted(isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (name === "" || selectedOptions.length === 0 || !termsAccepted) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Prepare data for the API request
      const formData = {
        name,
        selectedOptions,
        termsAccepted,
      };

      // Make the API call
      const response = await PostSelectedData(formData);
      console.log("Response from server:", response);

      // Reset form fields on successful submission
      setName("");
      setSelectedOptions([]);
      setTermsAccepted(false);

      // Optionally, perform any other actions based on the response
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle errors appropriately (e.g., display an error message)
    }

    // Perform form submission or data handling here

    console.log("submited data:", selectedOptions, name, termsAccepted);

    // Reset the form fields
    setName("");
    setSelectedOptions([]);
    setTermsAccepted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <InputName value={name} onInputChange={handleNameChange} />
        <SelectOptions
          selectedOptions={selectedOptions}
          onOptionsChange={handleOptionsChange}
        />
        <AgreeToTerms
          isChecked={termsAccepted}
          onCheckboxChange={handleCheckboxChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnterNameAndSector;
