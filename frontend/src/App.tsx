import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobilePage from './MobilePage';
//import all pages here

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MobilePage />} /> {/* Default route */}
      {/* Add more routes here as needed */}
    </Routes>
  </Router>
);

export default App;
