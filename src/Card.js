import React from 'react';
import './Card.css';

class Card extends React.Component {

    render() {
      console.log(this.props);
            return (
                <div className="Card">
                    <button type="button" onClick={() => {
      console.log(this.props.id);
                        this.props.handleDelete(this.props.id)}}>
                            delete
                    </button>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.content}</p>
                </div>  
            );  
    }
  }  

export default Card;