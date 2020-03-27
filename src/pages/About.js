import React from 'react';
import { Container } from 'react-bootstrap';
import '../style/about.css'

const About = props => {
  return (
    <Container>
      <div className="header">
        <h1 className='heading' >About Project</h1>
      </div>
      <div className="span">
        <span > Be Blogger is very simple and any can do this. All you need is a
        record some actions or what ever you want. You can do it even with
        your mobile phone, more important is content. But if you want to be
        a good creator, you should do amazing pictures and videos.
        In our Kits page you can find different blogging directions with own
        spesialized stuff. Just chose whatever you need and go to
          create new content!  </span>
      </div>

    </Container>
  );
};

export default About