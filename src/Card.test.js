import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';


describe('<Card />', () =>{
 it('smoketest', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Card title="Sixth card" content="lorem ipsum"/>, div);
    ReactDOM.unmountComponentAtNode(div);
 })       
})
// it('renders the UI as expected', () => {
//     const tree = renderer
//       .create(<Card title="Sixth card" content="lorem ipsum"/>)
//       .toJSON();
//     expect(tree).toMatchSnapshot();  
//     });
