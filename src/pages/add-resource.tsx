import { useNavigate } from "react-router-dom";
import banner from "../assets/Group-3.png";

const AddResource = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "fit-content" }}>
        <div className="col-6 p-4">
          <span
            className="text-muted"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            {"< Users"}{" "}
          </span>
          <div style={{ marginTop: "7.5rem" }}>
            <div className="text-center">
              <h4>Item Details</h4>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <form style={{ width: "25rem" }}>
                <div className="mb-3">
                  <label className="form-label">ITEM TITLE</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">LINK</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">ICON URL</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">TAG NAME</label>
                  <select className="form-select form-select mb-3">
                    <option selected>Choose</option>
                    <option value="1">User</option>
                    <option value="2">Request</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">CATEGORY</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">DESCRIPTION</label>
                  <input type="text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src={banner} alt="" style={{ height: "100vh" }} />
        </div>
      </div>
    </div>
  );
};
export default AddResource;
