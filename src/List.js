import React from 'react';
import Card from './Card.js'
import './List.css';

class List extends React.Component {
    
  
  
    render() { 
      // console.log(this.props);
        const allCards = this.props.cards.map(card => {
            return (<Card 
              handleDelete={this.props.handleDelete}
              id={card.id}
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
                    <button type="button" className="List-add-button">
                        + Add Random Card
                    </button>
                </div>  
           </section> 
        );
    }
  }

export default List;