import React from 'react';
import Card from './Card.js'
import './List.css';

class List extends React.Component {
    render() { 
        const allCards = this.props.cards.map(card => {
            return (<Card 
              key={card.id} 
              title={card.title}
              content={card.content}
            />)
          });


        return (
           <section className='List'>
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {allCards}
                </div>  
           </section> 
        );
    }
  }

export default List;