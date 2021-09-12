import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

let React = require('react');

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
