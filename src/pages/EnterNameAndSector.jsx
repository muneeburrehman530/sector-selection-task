import { useEffect, useState } from "react";
import "./pagesStyles/EnterNameAndSector.css";
import { ToastContainer, toast } from "react-toastify";
import AgreeToTerms from "../components/AgreeToTerms";
import InputName from "../components/InputName";
import SelectOptions from "../components/SelectOptions";
import { PostSelectedData } from "../services/userService";
import { useNavigate } from "react-router-dom";

const EnterNameAndSector = () => {
  const [name, setName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionKeys, setSeletedOptionKeys] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const handleNameChange = (input) => {
    setName(input);
  };

  const handleCheckboxChange = (isChecked) => {
    setTermsAccepted(isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "") {
      toast.error("Name is required", {
        autoClose: 1500,
      });
      return;
    }

    if (selectedOptions.length === 0) {
      toast.error("Please select sector", {
        autoClose: 1500, // This is in milliseconds (2 seconds in this example)
      });
      return;
    }

    if (!termsAccepted) {
      toast.error("Please agree to terms", {
        autoClose: 1500, // This is in milliseconds (2 seconds in this example)
      });
      return;
    }

    try {
      // Prepare data for the API request
      const formData = {
        name,
        selectedOptions,
        selectedOptionKeys,
        termsAccepted,
      };

      // Make the API call
      const response = await PostSelectedData(formData);
      console.log("Response from server:", response);

      toast.success("Form submitted successfully!", {
        autoClose: 1500, // This is in milliseconds (2 seconds in this example)
      });
      setName("");
      setSelectedOptions([]);
      setSeletedOptionKeys({});
      setTermsAccepted(false);

      setTimeout(() => {
        navigate("/");
      }, 2000);

      // Optionally, performA any other actions based on the response
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle errors appropriately (e.g., display an error message)
    }

    // Perform form submission or data handling here

    console.log("submited data:", selectedOptions, name, termsAccepted);
  };

  return (
    <div className="row">
      <div className="col-md-6 m-auto form-wrapper">
        <h4>
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h4>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <InputName value={name} onInputChange={handleNameChange} />
            <SelectOptions
              onOptionsChange={setSelectedOptions}
              onOptionsChangeKeys={setSeletedOptionKeys}
            />
            <AgreeToTerms
              isChecked={termsAccepted}
              onCheckboxChange={handleCheckboxChange}
            />
          </div>
          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EnterNameAndSector;
