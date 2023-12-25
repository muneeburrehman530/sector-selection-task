import { useEffect, useState } from "react";
import { nodes } from "../api/api";
import { TreeSelect } from "primereact/treeselect";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Options from "./Options";

const SelectOptions = ({ onOptionsChange, selectedOptions }) => {
  const [selectedNodeValues, setSelectedNodeValues] = useState([]);

  const handleChange = (e) => {
    onOptionsChange(e.value);

    const selectedValues = [];
    const keys = Object.keys(e.value);

    // Function to get values by keys
    const getValuesByKeys = (currentNode) => {
      if (keys.includes(currentNode.key)) {
        selectedValues.push(currentNode.data);
      }

      if (currentNode.children) {
        currentNode.children.forEach((childNode) => {
          getValuesByKeys(childNode);
        });
      }
    };

    nodes.forEach((node) => {
      getValuesByKeys(node);
    });

    setSelectedNodeValues(selectedValues);
  };

  useEffect(() => {
    console.log(selectedOptions, "selectedOptions");
  }, [selectedOptions]);

  return (
    <div>
      <div className="">
        <TreeSelect
          value={selectedOptions}
          onChange={handleChange}
          options={nodes}
          metaKeySelection={false}
          selectionMode="checkbox"
          display="chip"
          placeholder="Select Sector"
        />
      </div>
      <div>
        <strong>Selected Items:</strong>
        <ul>
          {selectedNodeValues.map((option) => (
            <Options key={option.key} option={option} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectOptions;
