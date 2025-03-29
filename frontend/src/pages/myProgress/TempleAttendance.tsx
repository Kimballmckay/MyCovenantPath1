import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling (optional)}

// Component for displaying a single temple visit
const TempleDate = ({ date, imageSrc }: { date: string; imageSrc: string }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageSrc}
        className="object-contain w-[30px] aspect-[0.88]" // Made image smaller
        alt="Temple visit"
      />
      <time className="text-xs mt-1">{date}</time>
    </div>
  );
};

// Main Temple Attendance component
const TempleAttendance = () => {
  const templeImageSrc =
    'https://cdn.builder.io/api/v1/image/assets/TEMP/3762212a7688278e440b9cbce19ca7ae212eb2655388ec157988794321198c2b?placeholderIfAbsent=true&apiKey=f9d1cc47ea5440408c735bea3934bb2e';

  const [templeVisits, setTempleVisits] = useState<
    Array<{ date: string; imageSrc: string }>
  >([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date: Date): string => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}`;
  };

  const addTempleVisit = () => {
    const formattedDate = formatDate(selectedDate);

    if (!templeVisits.some((visit) => visit.date === formattedDate)) {
      setTempleVisits([
        ...templeVisits,
        { date: formattedDate, imageSrc: templeImageSrc },
      ]);
    }

    setShowCalendar(false);
  };

  // Generate calendar days in a proper grid format
  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

    const days = [];

    // Empty cells before the first day
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = day === selectedDate.getDate();

      days.push(
        <div
          key={`day-${day}`}
          className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all ${
            isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
          }`}
          onClick={() => setSelectedDate(date)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const changeMonth = (increment: number) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setSelectedDate(newDate);
  };

  return (
    <section className="w-full mt-8">
      <h2 className="text-base leading-none text-black mb-3 ml-3">
        Temple Attendance
      </h2>

      {/* Left-aligned temple visits */}
      <div className="flex flex-wrap gap-4 ml-3 items-start">
        {templeVisits.length > 0 ? (
          templeVisits.map((visit, index) => (
            <TempleDate
              key={index}
              date={visit.date}
              imageSrc={visit.imageSrc}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500 italic">
            No temple visits recorded
          </p>
        )}
      </div>

      {/* Left-aligned button */}
      <div className="mt-4 ml-3">
        <button
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {showCalendar ? 'Cancel' : 'Add Temple Visit'}
        </button>
      </div>

      {showCalendar && (
        <div className="mt-4 p-3 border rounded-lg bg-white shadow-md mx-auto max-w-xs">
          <div className="flex justify-between items-center mb-3">
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => changeMonth(-1)}
            >
              ←
            </button>
            <h3 className="text-sm font-medium">
              {selectedDate.toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </h3>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => changeMonth(1)}
            >
              →
            </button>
          </div>

          {/* Calendar header with day labels */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
              <div
                key={idx}
                className="text-center text-xs font-medium text-gray-500"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">{generateCalendarDays()}</div>

          <div className="flex justify-end mt-3">
            <button
              className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
              onClick={addTempleVisit}
            >
              Add Visit
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TempleAttendance;
