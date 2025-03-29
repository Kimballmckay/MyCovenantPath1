import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignInForm from './SignInForm';
import MyProgress from './myProgress/MyProgress';
import MyCovenantPath from './MyCovenantPath';
import GoalsPlans from './GoalsPlans';
import Menu from './pages/Menu/Menu';
import MyStudies from './MyStudies/MyStudies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/MyCovenantPath" element={<MyCovenantPath />} />
        <Route path="/MyProgress" element={<MyProgress />} />
        <Route path="/GoalsPlans" element={<GoalsPlans />} />
        <Route path="/MyStudies" element={<MyStudies />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
