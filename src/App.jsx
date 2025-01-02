import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Button from './components/Button';
import Progress from './components/Progress1';
import Popup1 from './components/Popup1';
import PieChart from './components/PieChart';
import FlipCard from './components/FlipCard';

function App() {
  return (
    <Router>
      <div>    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/popup1" element={<Popup1 />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route path="/flipcard" element={<FlipCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
