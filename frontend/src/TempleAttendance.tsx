import React from "react";

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

const TempleAttendance = () => {
  return (
    <section className="w-full mt-8">
      <h2 className="ml-5 text-base leading-none text-center text-black">
        Temple Attendance
      </h2>
      <div className="flex gap-2 mt-3 ml-5 text-base leading-none text-center text-black whitespace-nowrap">
        <TempleDate
          date="01/22"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3762212a7688278e440b9cbce19ca7ae212eb2655388ec157988794321198c2b?placeholderIfAbsent=true&apiKey=f9d1cc47ea5440408c735bea3934bb2e"
        />
        <TempleDate
          date="02/08"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3762212a7688278e440b9cbce19ca7ae212eb2655388ec157988794321198c2b?placeholderIfAbsent=true&apiKey=f9d1cc47ea5440408c735bea3934bb2e"
        />
      </div>
    </section>
  );
};

export default TempleAttendance;
