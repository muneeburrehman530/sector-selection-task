import { useEffect, useState } from "react";
import { nodes } from "../api/api";
import "./componentStyles/SelectOptions.css";
import { TreeSelect } from "primereact/treeselect";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const SelectOptions = ({
  onOptionsChange,
  onOptionsChangeKeys,
  selectedOptionKeys,
}) => {
  const [selectedNodeKeys, setSelectedNodeKeys] = useState(selectedOptionKeys);
  const [selectedNodeValues, setSelectedNodeValues] = useState([]);

  const handleChange = (e) => {
    setSelectedNodeKeys(e.value);
    onOptionsChangeKeys(e.value);

    const keys = Object.keys(e.value);

    // Extract the selected values based on the keys using recursion
    const selectedValues = nodes
      .map((node) => findSelectedValuesRecursively(keys, node))
      .flat();

    const filteredSelectedValues = selectedValues.filter((value) => !!value);
    setSelectedNodeValues(filteredSelectedValues);
    onOptionsChange(filteredSelectedValues);
  };

  const findSelectedValuesRecursively = (selectedKeys, currentNode) => {
    const selectedValues = [];

    // Check if the current node is selected
    if (selectedKeys.includes(currentNode.key)) {
      selectedValues.push(currentNode.data);
    }

    // Check children if present
    if (currentNode.children) {
      currentNode.children.forEach((childNode) => {
        const childValues = findSelectedValuesRecursively(
          selectedKeys,
          childNode
        );
        selectedValues.push(...childValues);
      });
    }

    return selectedValues;
  };

  useEffect(() => {
    setSelectedNodeKeys(selectedOptionKeys);
  }, [selectedOptionKeys]);

  return (
    <div>
      <div className=" col-md-6 select-sectors w-100 text-start">
        <label htmlFor="select" className="pb-1">
          Sectors:
        </label>
        <TreeSelect
          className="tree-select w-100 text-start bg-transparent mb-3"
          value={selectedNodeKeys}
          onChange={handleChange}
          options={nodes}
          metaKeySelection={false}
          selectionMode="checkbox"
          display="chip"
          placeholder="Select Sector"
          id="select"
        />
      </div>
    </div>
  );
};

export default SelectOptions;
