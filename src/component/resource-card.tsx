import { FC } from "react";

export interface IResourceCardProps {
  title: string;
  icon_url: string;
  link: string;
  description: string;
  category: string;
  tag?: string;
  id?: string;
}

const ResourceCard: FC<IResourceCardProps> = ({
  category,
  description,
  icon_url,
  link,
  title,
}) => {
  return (
    <div className="col-4">
      <div className="p-3 border" style={{ height: "15rem" }}>
        <div className="d-flex mb-3">
          <img
            className="rounded-1 img-thumbnail"
            style={{ width: "75px", height: "75px" }}
            src={icon_url}
            alt=""
          />
          <div className="ms-2">
            <span>{title}</span>
            <br />
            <span className="text-muted">{category}</span>
          </div>
        </div>

        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>

        <div className="mt-3">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
