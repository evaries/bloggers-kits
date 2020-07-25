import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BloggersCard from '../components/BloggersCard'
import { bloggers } from '../db/db'

const Kits = () => {

  return (
    <Container fluid="md-4">
      <Row>
        {bloggers.map(blogger =>
          <Col key={blogger.id}>
            <BloggersCard
              imgsrc={blogger.img}
              title={blogger.title}
              youtubeLink={blogger.youtubeLink}
              text={blogger.text}
            />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Kits 
