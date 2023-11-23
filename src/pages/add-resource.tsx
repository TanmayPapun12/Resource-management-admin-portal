import { useNavigate } from "react-router-dom";
import banner from "../assets/Group-3.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { addResource } from "../api";

const AddResource = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("user");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const requiredFields = [
      "title",
      "link",
      "iconUrl",
      "category",
      "tag",
      "description",
    ];

    const emptyFields = requiredFields.filter((field) => !eval(field));

    if (emptyFields.length > 0) {
      const errorMessage = `${emptyFields
        .join(", ")
        .replace(/\b\w/g, (l) => l.toUpperCase())} are required.`;
      toast.error(errorMessage);
      return;
    }
    setIsLoading(true);

    const res = await addResource();
    if (res.success === 200) {
      toast.success("Resource created successfully");
      setTitle("");
      setCategory("");
      setLink("");
      setIconUrl("");
      setDescription("");
      setTag("user");
    } else {
      toast.error("Something went wrong");
    }
    setIsLoading(false);
  };

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
          <div style={{ marginTop: "1rem" }}>
            <div className="text-center">
              <h4>Item Details</h4>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <form style={{ width: "25rem" }}>
                <div className="mb-3">
                  <label className="form-label">ITEM TITLE</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">LINK</label>
                  <input
                    type="text"
                    className="form-control"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">ICON URL</label>
                  <input
                    type="text"
                    className="form-control"
                    value={iconUrl}
                    onChange={(e) => setIconUrl(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">TAG NAME</label>
                  <select
                    className="form-select form-select mb-3"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                  >
                    <option value="user">User</option>
                    <option value="request">Request</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">CATEGORY</label>
                  <input
                    type="text"
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">DESCRIPTION</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="text-center">
                  <button
                    disabled={isLoading}
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary"
                  >
                    CREATE
                  </button>
                </div>
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
