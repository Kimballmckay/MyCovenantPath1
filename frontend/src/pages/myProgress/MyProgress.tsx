import StatusBar from '../../components/StatusBar';
import NavigationBar from '../../components/NavigationBar';
import ChurchAttendance from './ChurchAttendance';
import TopicsStudied from './TopicsStudied';
import TempleAttendance from './TempleAttendance';
import MenuHeader from '../../components/RealHeader';
import styles from '../Menu/Menu.module.css'; // Custom CSS for the menu page

function MyProgress() {
  return (
    <main className="mx-auto w-full">
      <div className="overflow-hidden w-full bg-white">
        <StatusBar />
        <MenuHeader pageName="My Progress" />

        <section className="flex flex-col items-start px-3.5 mt-8 w-full">
          <ChurchAttendance />
          <TopicsStudied />
          <TempleAttendance />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>Hi</p>
        </section>

        <div className="navigationbar">
          <NavigationBar />
        </div>
      </div>
    </main>
  );
}

export default MyProgress;
