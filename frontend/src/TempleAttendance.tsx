import { useState } from 'react';

// Component for displaying a single temple visit
const TempleDate = ({ date, imageSrc }: { date: string; imageSrc: string }) => {
  return (
    <div className="flex flex-col">
      <img
        src={imageSrc}
        className="object-contain aspect-[0.88] w-[53px]"
        alt="Temple visit"
      />
      <time className="self-start">{date}</time>
    </div>
  );
};

// Main Temple Attendance component
const TempleAttendance = () => {
  // Temple image source
  const templeImageSrc =
    'https://cdn.builder.io/api/v1/image/assets/TEMP/3762212a7688278e440b9cbce19ca7ae212eb2655388ec157988794321198c2b?placeholderIfAbsent=true&apiKey=f9d1cc47ea5440408c735bea3934bb2e';

  // Start with an empty list of temple visits
  const [templeVisits, setTempleVisits] = useState<
    Array<{ date: string; imageSrc: string }>
  >([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Format date as MM/DD
  const formatDate = (date: Date): string => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}`;
  };

  // Add a new temple visit
  const addTempleVisit = () => {
    const formattedDate = formatDate(selectedDate);

    // Check if date already exists
    if (!templeVisits.some((visit) => visit.date === formattedDate)) {
      setTempleVisits([
        ...templeVisits,
        { date: formattedDate, imageSrc: templeImageSrc },
      ]);
    }

    setShowCalendar(false);
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

    const days = [];

    // Empty cells for days before first of month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    // Cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = day === selectedDate.getDate();

      days.push(
        <div
          key={`day-${day}`}
          className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer 
            ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
          onClick={() => setSelectedDate(new Date(year, month, day))}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  // Navigate between months
  const changeMonth = (increment: number) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setSelectedDate(newDate);
  };

  return (
    <section className="w-full mt-8">
      <h2 className="ml-5 text-base leading-none text-center text-black">
        Temple Attendance
      </h2>

      <div className="flex gap-2 mt-3 ml-5 text-base leading-none text-center text-black whitespace-nowrap">
        {templeVisits.length > 0 ? (
          templeVisits.map((visit, index) => (
            <TempleDate
              key={index}
              date={visit.date}
              imageSrc={visit.imageSrc}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500 italic mx-auto">
            No temple visits recorded
          </p>
        )}
      </div>

      {/* Add visit button */}
      <div className="flex justify-center mt-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {showCalendar ? 'Cancel' : 'Add Temple Visit'}
        </button>
      </div>

      {/* Calendar overlay */}
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

          {/* Day labels */}
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
          <div className="grid grid-cols-7 gap-1 mb-3">
            {generateCalendarDays()}
          </div>

          {/* Confirm button */}
          <div className="flex justify-end">
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
