import React from 'react';
import List from './List';


class NewApp extends React.Component{

    // static defaultProps = {
    //     store: {
    //         lists: [],
    //         allCards: {}
    //     }
    // }
    // console.log("lists props", props.store.lists);
   const lists = this.props.store.lists.map(list => {
    return (<List 
      key={list.id} 
      header={list.header}
      cards={list.cardIds.map(id => { 
  // console.log("All cards", props.store.allCards[id]);        
        return this.props.store.allCards[id];
      }
    )}
    />)
  });

    render(){
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
}

export default NewApp;