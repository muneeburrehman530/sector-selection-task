import NoRecord from "../assets/no-record-found.png";
const NoRecordFound = () => {
  return (
    <div>
      <div>
        <h5 className="py-4">Please add your name and select Sectors</h5>
        <img
          src={NoRecord}
          alt="No record found"
          className="bg-transparent img-fluid"
        />
      </div>
    </div>
  );
};

export default NoRecordFound;
