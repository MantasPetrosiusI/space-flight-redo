import { Card, Badge } from "react-bootstrap";
import { format, parseISO } from "date-fns";
import NewsTypes from "../Types";
import { useNavigate } from "react-router-dom";

interface SingleNewProp {
  singleNew: NewsTypes;
}

const NewSpaceNew = ({ singleNew }: SingleNewProp) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Badge
        pill
        variant="warning"
        style={{ display: singleNew.featured ? "block" : "none" }}
      >
        HOT
      </Badge>
      <Card.Img variant="top" src={singleNew.imageUrl}></Card.Img>
      <Card.Body>
        <Card.Title>{singleNew.title}</Card.Title>
        <Card.Text>
          {singleNew.summary}
          <span onClick={() => navigate("/Details/" + singleNew.id)}>
            <b>{" Read more"}</b>
          </span>
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <div>
          Published At:{" "}
          {format(parseISO(singleNew.publishedAt.toString()), "dd.MM.yyyy")}{" "}
          {new Date(singleNew.publishedAt).toLocaleTimeString("en-GB")}
        </div>
        <div>
          Updated At:
          {format(parseISO(singleNew.updatedAt.toString()), "dd.MM.yyyy")}{" "}
          {new Date(singleNew.updatedAt).toLocaleTimeString("en-GB")}
        </div>
      </Card.Footer>
    </Card>
  );
};
export default NewSpaceNew;
