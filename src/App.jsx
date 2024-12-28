import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Button from './components/Button';

function App() {
  return (
    <Router>
      <div>    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
