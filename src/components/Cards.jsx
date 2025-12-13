import BootstrapCard from './BootstrapCard';

const Cards = () => {
  return (
    <div className='d-flex gap-2 p-4'>
      <BootstrapCard 
        cardTile="Card 1" 
        cardImg="./card.png"
        cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content." 
        cardBtn="Button 1"  
      />
       <BootstrapCard 
        cardTile="Card 2" 
        cardImg="./img.jpg"
        cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content." 
        cardBtn="Button 2"  
      />
       <BootstrapCard 
        cardTile="Card 3" 
        cardImg="./card.png"
        cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content." 
        cardBtn="Button 3"  
      />
    </div>
  )
}

export default Cards