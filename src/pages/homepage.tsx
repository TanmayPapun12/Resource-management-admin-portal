import { useEffect, useState } from "react";
import clsx from "clsx";
import ResourceCard, { IResourceCardProps } from "../component/resource-card";
import { getAllResources } from "../api";

const Homepage = () => {
  const [tags, setTags] = useState<"resources" | "request" | "user">(
    "resources"
  );
  const [searchTerm, setsearchTerm] = useState("");
  const [allResources, setAllResources] = useState<Array<IResourceCardProps>>(
    []
  );
  const [renderedResources, setRenderedResources] = useState<
    Array<IResourceCardProps>
  >([]);

  const handleSearch = (text: string) => {
    const resources = [...allResources];
    const filteredByTags =
      tags !== "resources"
        ? resources.filter((i) => i.tag === tags)
        : resources;
    if (text.length === 0) {
      setRenderedResources(filteredByTags);
    } else {
      const filteredArray = filteredByTags.filter((i) =>
        i.title.toLowerCase().includes(text.toLowerCase())
      );
      setRenderedResources(filteredArray);
    }
  };

  const handleFilterByTag = () => {
    const resources = [...allResources];
    if (tags === "resources") {
      setRenderedResources(resources);
    } else {
      const filteredArray = resources.filter((i) => i.tag === tags);
      setRenderedResources(filteredArray);
    }
  };

  const fetchAllResources = async () => {
    const res = await getAllResources();
    if (res.success === 200) {
      setAllResources(res.data);
      setRenderedResources(res.data);
    }
  };

  useEffect(() => {
    fetchAllResources();
  }, []);

  useEffect(() => {
    handleFilterByTag();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  return (
    <>
      <div className="p-3">
        {/* Tags */}
        <div
          className="d-flex justify-content-center mt-4"
          style={{ cursor: "pointer" }}
        >
          <div
            onClick={() => setTags("resources")}
            className={clsx(
              "border border-end-0 px-5 py-2",
              tags === "resources" ? "bg-primary text-white" : "text-black"
            )}
          >
            <span>Resources</span>
          </div>
          <div
            onClick={() => setTags("request")}
            className={clsx(
              "border border-end-0 px-5 py-2",
              tags === "request" ? "bg-primary text-white" : "text-black"
            )}
          >
            <span>Requests</span>
          </div>
          <div
            onClick={() => setTags("user")}
            className={clsx(
              "border px-5 py-2",
              tags === "user" ? "bg-primary text-white" : "text-black"
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
        <div className="container">
          <div className="row gx-4 gy-3">
            {renderedResources.map((i: IResourceCardProps) => (
              <ResourceCard
                key={i.id}
                category={i.category}
                description={i.description}
                icon_url={i.icon_url}
                link={i.link}
                title={i.title}
                tag={i.tag}
                id={i.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
