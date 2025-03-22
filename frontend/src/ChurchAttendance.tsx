import { useState } from 'react';

const ChurchAttendance = () => {
  // Get current month's Sundays
  const getCurrentMonthSundays = (): Date[] => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const sundaysArray: Date[] = [];

    // Find all Sundays
    let currentDay = new Date(firstDay);
    while (currentDay <= lastDay) {
      if (currentDay.getDay() === 0) {
        // 0 = Sunday
        sundaysArray.push(new Date(currentDay));
      }
      currentDay.setDate(currentDay.getDate() + 1);
    }

    return sundaysArray;
  };

  const monthSundays = getCurrentMonthSundays();
  const [attendanceState, setAttendanceState] = useState<boolean[]>(
    Array(monthSundays.length).fill(false)
  );

  // Handler to toggle attendance
  const handleToggleAttendance = (sundayIndex: number): void => {
    const updatedAttendance = [...attendanceState];
    updatedAttendance[sundayIndex] = !updatedAttendance[sundayIndex];
    setAttendanceState(updatedAttendance);
  };

  // Format date as "month/day" (e.g., "3/22")
  const formatDateMonthDay = (date: Date): string => {
    const month = date.getMonth() + 1; // getMonth() is zero-based
    const day = date.getDate();
    return `${month}/${day}`;
  };

  return (
    <section className="w-full mt-7">
      <h2 className="text-lg font-semibold text-center text-black mb-3">
        Church Attendance this Month
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-3">
        {monthSundays.map((sunday, sundayIndex) => (
          <div
            key={sundayIndex}
            className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ${
              attendanceState[sundayIndex]
                ? 'bg-green-600'
                : 'border-2 border-gray-400'
            }`}
            onClick={() => handleToggleAttendance(sundayIndex)}
          >
            {attendanceState[sundayIndex] ? (
              <span className="text-white text-lg">✓</span>
            ) : (
              <span className="text-sm text-gray-500">
                {formatDateMonthDay(sunday)}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-4 text-sm text-gray-600">
        <p>Click a circle to mark your attendance</p>
      </div>
    </section>
  );
};

export default ChurchAttendance;
