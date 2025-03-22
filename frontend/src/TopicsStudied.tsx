interface TopicProps {
  title: string;
  progress: number; // 0-100
}

const TopicItem = ({ title, progress }: TopicProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3
        style={{
          fontSize: '16px',
          marginBottom: '8px',
          fontWeight: 'normal',
        }}
      >
        {title}
      </h3>

      {/* Container */}
      <div
        style={{
          width: '100%',
          height: '16px',
          backgroundColor: '#e2e8f0',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid #cbd5e1',
        }}
      >
        {/* Actual progress bar */}
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#3b82f6',
            borderRadius: '8px',
          }}
        />
      </div>
    </div>
  );
};

const TopicsStudied = () => {
  const topics = [
    { title: 'The Restoration', progress: 75 },
    { title: 'The Plan of Salvation', progress: 45 },
    { title: 'The Gospel of Jesus Christ', progress: 60 },
    { title: 'Becoming Lifelong Disciples of Jesus Christ', progress: 30 },
  ];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        margin: '32px auto 0',
      }}
    >
      <h2
        style={{
          fontSize: '18px',
          textAlign: 'center',
          marginBottom: '16px',
        }}
      >
        Topics Studied
      </h2>

      <div
        style={{
          padding: '24px',
          backgroundColor: 'rgba(148, 163, 184, 0.2)',
          borderRadius: '8px',
          border: '2px solid #000000',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        {topics.map((topic, index) => (
          <TopicItem
            key={index}
            title={topic.title}
            progress={topic.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default TopicsStudied;
