
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactListing from './Components/ContactListing.js';
import ContactCreate from './Components/ContactCreate.js';

function App() {
  return (
  
    <div>
    <div className="App">
        <h4>React JS Contact Details</h4>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ContactListing />}></Route>
            <Route path="/contacts/create" element={<ContactCreate />}></Route>
          
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
