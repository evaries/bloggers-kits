import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/home.css'



const Home = props => {
  return (
    <Container>
      <div className="header">
        <h1 className='heading' >START YOUR OWN BLOG</h1>
        <h2>It is easier than you think</h2>
      </div>
      <div className="span">
        <span > All you need to start your blog is camera and actions.
        If you get lost in the abundance of choosing various video/audio equipment,
        just take a look at the kits which used by popular bloggers. Hope, this can
          help you to create similar awersome content</span>
      </div>
      <Row>
        <Col>
          <Button href="/kits" variant="dark" size="sm" block>Kits</Button>
        </Col>
        <Col>
          <Button href="/about" variant="light" size="sm" block>About</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home