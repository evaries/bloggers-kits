import React from 'react'
import { Button, Card } from 'react-bootstrap';
import '../style/bloggersCard.css'


const BloggersCard = props => {
  return (
    <div >
      <Card className="shadow-box-example z-depth-5" >
        <Card.Img className='overflow-auto' variant="top" src={props.imgsrc} />
        <Card.Body>
          <Card.Title>
            {props.title}
          </Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <div className='buy'
            style={{ display: 'flex', justifyContent: "center" }}>
            <Button
              href={props.shopLink}
              variant="dark"
            >View Kit</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default BloggersCard        
