import './TempleAttendance.css'; // Custom CSS file

// Main Temple Attendance component
const TempleAttendance = () => {
  return (
    <>
      <section className="temple-attendance">
        <h2 className="header">Temple Attendance</h2>

        {/* Left-aligned temple visits */}
        <div className="temple-visits">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3762212a7688278e440b9cbce19ca7ae212eb2655388ec157988794321198c2b?placeholderIfAbsent=true&apiKey=f9d1cc47ea5440408c735bea3934bb2e"
            alt=""
          />
          <p>03/01</p>
        </div>
      </section>
    </>
  );
};

export default TempleAttendance;
