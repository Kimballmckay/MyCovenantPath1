import React from "react";

const ChurchAttendance = () => {
  return (
    <section className="w-full mt-7">
      <h2 className="ml-5 text-base leading-none text-center text-black">
        Church Attendance this Month
      </h2>
      <div className="flex gap-1.5 mt-5 ml-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd720f2-766b-4f32-9cfa-f73698c3a5be?placeholderIfAbsent=true&apiKey=f9d1cc47ea5440408c735bea3934bb2e"
          className="object-contain shrink-0 w-12 h-12 bg-green-800 rounded-full aspect-[0.98]"
          alt="Church attendance marker"
        />
        <div className="flex shrink-0 self-start rounded-full border border-black border-solid h-[47px] w-[47px]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/784c8b70-eed1-4703-b81c-919a69bebb8c?placeholderIfAbsent=true&apiKey=f9d1cc47ea5440408c735bea3934bb2e"
          className="object-contain shrink-0 w-12 h-12 bg-green-800 rounded-full aspect-square"
          alt="Church attendance marker"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b79c5395-c330-474f-880c-a026cd3c5d0f?placeholderIfAbsent=true&apiKey=f9d1cc47ea5440408c735bea3934bb2e"
          className="object-contain shrink-0 w-12 h-12 bg-green-800 rounded-full aspect-[0.98]"
          alt="Church attendance marker"
        />
        <div className="flex shrink-0 self-start rounded-full border border-black border-solid h-[47px] w-[47px]" />
      </div>
    </section>
  );
};

export default ChurchAttendance;
