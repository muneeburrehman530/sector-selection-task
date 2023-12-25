const Options = ({ option }) => {
  return (
    <li key={option.key}>
      {option.key}:: {option.value}
    </li>
  );
};

export default Options;
