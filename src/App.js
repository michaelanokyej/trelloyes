import React from "react";
import List from "./List";
// import Card from './Card';

import "./App.css";

class App extends React.Component {
  state = {
    store: this.props.store
  };

  handleDelete = id => {
    // create a new copy of the allCards
    const allCards = {
      ...this.state.store.allCards
    };

    // remove the card frorm the allCards
    delete allCards[id];

    const lists = this.state.store.lists.reduce((acc, current) => {
      // push the current object and update his cardIds to make
      // sure we do remove the id element
      acc.push({
        ...current, //  id: '1', header: 'First list',
        cardIds: current.cardIds.filter(el => el !== id)
      });

      return acc;
    }, []);

    // update the state
    this.setState({
      store: {
        ...this.state.store,
        allCards,
        lists
      }
    });
  };

  render() {
    const lists = this.state.store.lists.map(list => {
      return (
        <List
          handleDelete={this.handleDelete}
          key={list.id}
          header={list.header}
          cards={list.cardIds.map(id => {
            return this.state.store.allCards[id];
          })}
        />
      );
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-List">{lists}</div>
      </main>
    );
  }
}

export default App;
