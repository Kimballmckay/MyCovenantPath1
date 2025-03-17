const TimeFilter = () => {
  return (
    <div className="flex gap-5 max-sm:flex-col">
      <button className="text-base">Yesterday</button>
      <button className="text-base">Last week</button>
      <button className="text-base">Last Month</button>
    </div>
  );
};

const ContentGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
      {[1, 2, 3].map((index) => (
        <article
          key={index}
          className="p-1 rounded border border-black border-solid aspect-[1/1]"
        >
          <img
            src="https://placehold.co/400x400/eeeeee/eeeeee"
            alt="Content"
            className="w-full h-full object-cover"
          />
        </article>
      ))}
    </div>
  );
};

export const ContinueReading = () => {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-2xl">Continue Reading</h2>
      <TimeFilter />
      <ContentGrid />
    </section>
  );
};

export default ContinueReading