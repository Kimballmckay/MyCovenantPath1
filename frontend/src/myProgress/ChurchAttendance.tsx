import { useState } from 'react';

const ChurchAttendance = () => {
  const getCurrentMonthSundays = (): Date[] => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const sundaysArray: Date[] = [];

    let currentDay = new Date(firstDay);
    while (currentDay <= lastDay) {
      if (currentDay.getDay() === 0) {
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

  const handleToggleAttendance = (sundayIndex: number): void => {
    const updatedAttendance = [...attendanceState];
    updatedAttendance[sundayIndex] = !updatedAttendance[sundayIndex];
    setAttendanceState(updatedAttendance);
  };

  const formatDateMonthDay = (date: Date): string => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };

  return (
    <section className="w-full mt-7">
      <h2 className="text-lg font-semibold text-center text-black mb-3">
        Church Attendance this Month
      </h2>

      <div className="attendance-container">
        {monthSundays.map((sunday, sundayIndex) => (
          <div
            key={sundayIndex}
            className={`attendance-circle ${
              attendanceState[sundayIndex] ? 'checked' : ''
            }`}
            onClick={() => handleToggleAttendance(sundayIndex)}
          >
            {attendanceState[sundayIndex] ? '✓' : formatDateMonthDay(sunday)}
          </div>
        ))}
      </div>

      <div className="text-center mt-4 text-sm text-gray-600">
        <p>Click a circle to mark your attendance</p>
      </div>

      <style jsx>{`
        .attendance-container {
          display: flex;
          flex-wrap: nowrap; /* Ensure they stay in a row */
          gap: 10px;
          overflow-x: auto; /* Allow scrolling if needed */
          padding: 10px;
          justify-content: flex-start; /* Align to the left */
        }

        .attendance-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition:
            background 0.3s,
            color 0.3s,
            transform 0.2s;
          font-size: 14px;
          font-weight: bold;
          border: 2px solid #999;
          color: #555;
          user-select: none;
        }

        .attendance-circle.checked {
          background-color: #16a34a;
          color: white;
          border: none;
          transform: scale(1.1);
        }

        .attendance-circle:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default ChurchAttendance;
