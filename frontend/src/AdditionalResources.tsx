const resources = [
  { src: "/images/BookOfMormon.png", alt: "Book of Mormon" },
  { src: "/images/JesusChrist.png", alt: "Jesus Christ" },
  { src: "/images/PreachMyGospel.png", alt: "Preach My Gospel" },
  { src: "/images/PersonalFinances.png", alt: "Personal Finances" },
];

export const AdditionalResources = () => {
  return (
    <section className="flex flex-col gap-5 mb-24">
      <h2 className="text-2xl">Additional Resources</h2>
      <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {resources.map((resource, index) => (
          <article
            key={index}
            className="w-36 h-36 flex justify-center items-center rounded border border-black border-solid p-2 bg-gray-100 overflow-hidden"
          >
            <img
              src={resource.src}
              alt={resource.alt}
              className="w-28 h-28 object-contain"
            />
          </article>
        ))}
      </div>
    </section>
  );
};



export default AdditionalResources