import { useState } from "react";
import Navbar from "../component/navbar";
import clsx from "clsx";

const Homepage = () => {
  const [tags, setTags] = useState<"Resources" | "Requests" | "Users">(
    "Resources"
  );
  const [searchTerm, setsearchTerm] = useState("");

  const handleSearch = (text: string) => {
    console.log(text);
  };

  return (
    <>
      {/* navbar */}
      <Navbar />

      <div className="p-3">
        {/* Tags */}
        <div
          className="d-flex justify-content-center mt-4"
          style={{ cursor: "pointer" }}
        >
          <div
            onClick={() => setTags("Resources")}
            className={clsx(
              "border border-end-0 px-5 py-2",
              tags === "Resources" ? "bg-primary text-white" : "text-black"
            )}
          >
            <span>Resources</span>
          </div>
          <div
            onClick={() => setTags("Requests")}
            className={clsx(
              "border border-end-0 px-5 py-2",
              tags === "Requests" ? "bg-primary text-white" : "text-black"
            )}
          >
            <span>Requests</span>
          </div>
          <div
            onClick={() => setTags("Users")}
            className={clsx(
              "border px-5 py-2",
              tags === "Users" ? "bg-primary text-white" : "text-black"
            )}
          >
            <span>Users</span>
          </div>
        </div>

        {/* input */}
        <div className="d-flex justify-content-center mt-4">
          <div className="input-group mb-3" style={{ width: "35%" }}>
            <button className="btn border">
              <i className="bi bi-search"></i>
            </button>
            <input
              value={searchTerm}
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) => {
                setsearchTerm(e.target.value);
                handleSearch(e.target.value);
              }}
            />
          </div>
        </div>

        {/* cards */}
      </div>
    </>
  );
};
export default Homepage;
