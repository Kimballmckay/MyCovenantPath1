import React from 'react';

const TopicItem = ({ title }: { title: string }) => {
  return (
    <>
      <h3 className="self-start text-base leading-none text-center text-black">
        {title}
      </h3>
      <div className="flex flex-col items-start self-end mt-7 max-w-full bg-zinc-500 bg-opacity-20 w-[258px]">
        <div className="flex shrink-0 w-1 h-1 bg-blue-600 rounded-[100px]" />
      </div>
    </>
  );
};

const TopicsStudied = () => {
  return (
    <section className="w-full mt-8">
      <h2 className="ml-6 text-base leading-none text-center text-black">
        Topics Studied
      </h2>
      <div className="flex flex-col self-center pt-2.5 pr-8 pb-12 pl-2.5 mt-4 w-full rounded-md border border-black border-solid bg-slate-400 bg-opacity-20 max-w-[324px]">
        <TopicItem title="The Restoration" />

        <TopicItem title="The Plan of Salvation" />

        <h3 className="self-start mt-3.5 text-base leading-none text-center text-black">
          The Gospel of Jesus Christ
        </h3>
        <div className="flex flex-col items-start self-end mt-7 max-w-full bg-zinc-500 bg-opacity-20 w-[258px]">
          <div className="flex shrink-0 w-1 h-1 bg-blue-600 rounded-[100px]" />
        </div>

        <h3 className="mt-3.5 text-base leading-6 text-center text-black w-[248px]">
          Becoming Lifelong Disciples of Jesus Christ
        </h3>
        <div className="flex flex-col items-start self-end mt-6 max-w-full bg-zinc-500 bg-opacity-20 w-[258px]">
          <div className="flex shrink-0 w-1 h-1 bg-blue-600 rounded-[100px]" />
        </div>
      </div>
    </section>
  );
};

export default TopicsStudied;
