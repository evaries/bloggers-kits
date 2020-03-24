import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BloggersCard from '../components/BloggersCard'
import ptushkin from '../img/ptushkin.png'
import pilot from '../img/pilot.png'
import freemax from '../img/freemax.png'
import maleev from '../img/maleev.png'


const Kits = props => {
  return (
    <Container fluid="md-4">
      <Row>
        <Col>
          <BloggersCard
            imgsrc={ptushkin}
            title='Ptushkin'
            shopLink='https://www.youtube.com/watch?v=8jJgNdi-u5k'
            text='Ex presenter of Reshka TV program. 
            Now he is a travel blogger, who do all production process by himself.'
          />
        </Col>
        <Col>
          <BloggersCard
            imgsrc={pilot}
            title='PilotZX6R'
            shopLink='https://www.youtube.com/watch?v=PGB-0EfPedg'
            text='The most popular motoblogger in RU-net. If you need record your 
            movement, check it out.'
          />
        </Col>
        <Col>
          <BloggersCard
            imgsrc={freemax}
            title='Freemax'
            shopLink='https://www.youtube.com/watch?v=lzvEKMp54i8'
            text='Popular photographer and videomaker. Has a lot of stuff for different
            kind of shooting.'
          />
        </Col>
        <Col>
          <BloggersCard
            imgsrc={maleev}
            title='Maleev'
            shopLink='https://www.youtube.com/watch?v=RfuSS89UWZ4'
            text='IT-blogger, which is located in US. Create a simple vlog about
            living and working in US. '
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Kits 