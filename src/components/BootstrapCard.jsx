import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BootstrapCard = ({ cardImg, cardDescription, cardTile, cardBtn }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardImg} height={200}  />
      <Card.Body>
        <Card.Title>{cardTile}</Card.Title>
        <Card.Text>
         {cardDescription}
        </Card.Text>
        <Button variant="primary">{cardBtn}</Button>
      </Card.Body>
    </Card>
  );
}

export default BootstrapCard;