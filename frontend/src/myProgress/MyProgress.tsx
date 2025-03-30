import StatusBar from '../components/StatusBar';
import NavigationBar from '../components/NavigationBar';
import ChurchAttendance from './ChurchAttendance';
import TopicsStudied from './TopicsStudied';
import TempleAttendance from './TempleAttendance';
import MenuHeader from '../components/RealHeader';

function MyProgress() {
  return (
    <main className="mx-auto w-full max-w-[480px]">
      <div className="overflow-hidden w-full bg-white">
        <StatusBar />
        <MenuHeader pageName='My Progress'/>

        <section className="flex flex-col items-start px-3.5 mt-8 w-full">
          <ChurchAttendance />
          <TopicsStudied />
          <TempleAttendance />
        </section>

        <NavigationBar />
      </div>
    </main>
  );
}

export default MyProgress;
