import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import NewsTypes from "../Types";
import NewSpaceNew from "./NewSpaceNew";

const Gallery = () => {
  const [spaceNews, setSpaceNews] = useState<NewsTypes[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);
  const fetchNews = async () => {
    try {
      let res = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      if (res.ok) {
        const data: NewsTypes[] = await res.json();
        setSpaceNews(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Heading />
      <Row className="row-cols-3">
        {spaceNews.map((spaceNew) => (
          <Col key={spaceNew.id}>
            <NewSpaceNew singleNew={spaceNew} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
