import { useState } from "react";
import Navbar from "../component/navbar";
import clsx from "clsx";

const Homepage = () => {
  const [tags, setTags] = useState<"Resources" | "Requests" | "Users">(
    "Resources"
  );

  return (
    <>
      {/* navbar */}
      <Navbar />

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
    </>
  );
};
export default Homepage;
