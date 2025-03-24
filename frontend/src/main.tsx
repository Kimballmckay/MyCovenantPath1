import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from "./App.tsx";
import MyCovenantPath from './MyCovenantPath.tsx';
import Menu from './pages/Menu/Menu.tsx';
import GoalsPlans from './GoalsPlans.tsx';
import MyProgress from './MyProgress.tsx';
import MyStudies from './MyStudies.tsx';

//import MyCovenantPath from "./MyCovenantPath.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menu />
    <GoalsPlans />
    <MyCovenantPath />
    <MyProgress />
    <MyStudies />
  </StrictMode>
);
