import React from 'react';
import List from './List';
// import Card from './Card';


import './App.css';

function App(props) {
  // console.log("lists props", props.store.lists);
  const lists = props.store.lists.map(list => {
    return (<List 
      key={list.id} 
      header={list.header}
      cards={list.cardIds.map(id => { 
  // console.log("All cards", props.store.allCards[id]);        
        return props.store.allCards[id];
      }
    )}
    />)
  });


  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
        <div className='App-List'>
          {lists}
        </div>
    </main>
  );
}

export default App;
