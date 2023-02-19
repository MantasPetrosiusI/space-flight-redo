import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import "../App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NewsTypes from "../Types";
import { format, parseISO } from "date-fns";

const Details = () => {
  const params = useParams();
  const id = params.id;

  const [details, setDetails] = useState<NewsTypes | null>(null);

  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = async () => {
    try {
      let res = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + id
      );
      if (res.ok) {
        const data: NewsTypes = await res.json();
        setDetails(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col className="m-5">
          <Jumbotron>
            {details ? (
              <>
                <h2>{details.title}</h2>
                <img
                  className="my-5"
                  src={details.imageUrl}
                  style={{ width: "1000px" }}
                  alt="spacePic"
                />

                <h4>Article published at: {details.newsSite}</h4>
                <h3>
                  Summary: {details.summary}
                  <span
                    onClick={() => {
                      window.location.href = `${details.url}`;
                    }}
                  >
                    <b style={{ cursor: "pointer" }}>[Read more...]</b>
                  </span>
                </h3>

                <h4>
                  Publish time:{" "}
                  {format(
                    parseISO(details.publishedAt.toString()),
                    "dd.MM.yyyy"
                  )}{" "}
                  {new Date(details.publishedAt).toLocaleTimeString("en-GB")}
                </h4>
              </>
            ) : (
              <h1>404 PAGE NOT FOUND</h1>
            )}
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};
export default Details;
