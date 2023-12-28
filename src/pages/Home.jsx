import { useEffect, useState } from "react";
import { deleteData, fetchData } from "../services/userService";

import { Table } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./pagesStyles/Home.css";
import { Link } from "react-router-dom";
import NoRecordFound from "../components/NoRecordFound";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData("/selectedOptions");

        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchDataAsync();
  }, []);

  const renderSelectedOptions = (selectedOptions) => {
    const options = selectedOptions?.map((key) => {
      const formattedValue = key.value
        .replace(/([a-z])([A-Z])/g, "$1, $2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1, $2")
        .split(/\s+/)
        .join(", ");

      const formattedChildren = key.children
        ? key.children
            .map((child) => child.value)
            .join(" , ")
            .replace(/([a-z])([A-Z])/g, "$1, $2")
            .replace(/([A-Z])([A-Z][a-z])/g, "$1, $2")
            .split(/\s+/)
            .join(" , ")
        : "";

      return (
        <span key={key.id}>
          {key.type === "parent" ? (
            <strong>
              <br /> {formattedValue} :
            </strong>
          ) : (
            formattedValue
          )}
          {key.children &&
            key.children.map((child, index) => (
              <span key={child.id}>
                {", "}
                {child.value},{index !== key.children.length - 1 ? ", " : ""}
              </span>
            ))}
          {key.children && <span>, {formattedChildren},</span>}
        </span>
      );
    });

    return options;
  };

  // delete function
  const handleDelete = async (id) => {
    try {
      await deleteData("/selectedOptions", id);
      const updatedData = user.filter((item) => item.id !== id);
      setUser(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };
  return (
    <>
      <div>
        <div className="button-create d-flex justify-content-end mb-3">
          <Link to={"/create"}>
            <button className="form-btn ">Create</button>{" "}
          </Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>SECTOR</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {user.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{renderSelectedOptions(user.selectedOptions)}</td>
                <td>
                  <Link to={`/selectedOptions/${user.id}`}>
                    <button className="edit-n-delete m-2">
                      <BsFillPencilFill size={18} className="edit-icon" />
                    </button>
                  </Link>
                  <button
                    className="edit-n-delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    <RiDeleteBin6Fill size={20} className="text-danger m-2" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {user.length === 0 && <NoRecordFound />}
      </div>
    </>
  );
};

export default Home;
