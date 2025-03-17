interface StudyCard {
  title: string;
  content: string;
}

const StudyCard = ({ title, content }: StudyCard) => {
  return (
    <article className="p-4 rounded border border-black border-solid">
      <h3 className="text-sm">{title}</h3>
      <p
        className={`text-base ${
          title.includes("February") ? "text-blue-950" : ""
        }`}
      >
        {content}
      </p>
    </article>
  );
};

export const WhatsNext = () => {
  const cards = [
    {
      title: 'February 17-22: "Upon You My Fellow Servants"',
      content: "Doctrine and Covenants 12-17; Joseph Smith—History 1:66-75",
    },
    {
      title: "CHAPTER 12",
      content:
        "He calls and commissions the twelve disciples—He delivers a discourse similar to the Sermon on the Mount—His teachings transcend and take precedence over the law of Moses—Men are commanded to be perfect even as He and His Father are perfect—Compare Matthew 5. About A.D. 34.",
    },
  ];

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-2xl">What's Next</h2>
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        {cards.map((card, index) => (
          <StudyCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default WhatsNext