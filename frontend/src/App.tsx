import './App.css';
import GoalsPlans from './GoalsPlans';
import MyCovenantPath from './MyCovenantPath';
import MyProgress from './MyProgress';
import MyStudies from './MyStudies';
import Menu from './pages/Menu/Menu';

function App() {
  return (
    <>
      <Menu/>
      <GoalsPlans />
      <MyCovenantPath />
      <MyProgress />
      <MyStudies />
    </>
  );
}

export default App;
