import { Link } from "react-router-dom";
import pageNotFound from "../assets/page-not-found.png";
const PageNotFound = () => {
  return (
    <div className="w-100 mt-3">
      <img src={pageNotFound} alt="page not found" className="img-fluid" />
      <div className="mt-5">
        {" "}
        <Link to={"/"} className="text-success fw-bold">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
