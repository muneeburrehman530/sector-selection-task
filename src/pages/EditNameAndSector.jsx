import { ToastContainer, toast } from "react-toastify";
import AgreeToTerms from "../components/AgreeToTerms";
import InputName from "../components/InputName";
import SelectOptions from "../components/SelectOptions";
import { fetchUserData, updateUserData } from "../services/userService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditNameAndSector = () => {
  const [name, setName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionKeys, setSeletedOptionKeys] = useState({});

  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchUserData(id);
        console.log(userData, "data");
        setName(userData.name);
        setSelectedOptions(userData.selectedOptions);
        setSeletedOptionKeys(userData.selectedOptionKeys);
        console.log(userData.selectedOptionKeys, "selectedOptionKeys");
        setTermsAccepted(userData.termsAccepted);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUser();
  }, [id]);

  const handleNameChange = (input) => {
    setName(input);
  };

  const handleCheckboxChange = (isChecked) => {
    setTermsAccepted(isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      name,
      selectedOptions,
      selectedOptionKeys,
      termsAccepted,
    };
    console.log(updatedData, "updatedData");

    try {
      const response = await updateUserData(id, updatedData);
      console.log("Response from server:", response);

      toast.success("User data updated successfully!", {
        autoClose: 1500,
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 m-auto form-wrapper">
        <h4>Edit User</h4>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <InputName value={name} onInputChange={handleNameChange} />
            <SelectOptions
              selectedOptions={selectedOptions}
              selectedOptionKeys={selectedOptionKeys}
              onOptionsChange={setSelectedOptions}
              onOptionsChangeKeys={setSeletedOptionKeys}
            />
            <AgreeToTerms
              isChecked={termsAccepted}
              onCheckboxChange={handleCheckboxChange}
            />
          </div>
          <button type="submit" className="form-btn">
            Update
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EditNameAndSector;
