'use client';
import './MyCovenantPath.css';
import React, { useState, useEffect, useRef } from 'react';
import styles from './assets/styles/goalsplans.module.css';
import StatusBar from './components/StatusBar.tsx';
import MenuHeader from './components/RealHeader.tsx';
import NavigationBar from './components/NavigationBar.tsx';

const articles = [
  {
    title: 'Jesus Christ is Your Savior',
    image:
      'https://www.churchofjesuschrist.org/imgs/664729d1d9668cf90d62a0871bcf8f3df9bc0e10/full/!1280%2C853/0/default',
    description: 'Discover ways to deepen your spiritual connection.',
    link: 'https://www.churchofjesuschrist.org/welcome/savior-jesus-christ?lang=eng',
  },
  {
    title: 'Jesus Christ Understands Your Challenges',
    image:
      'https://www.churchofjesuschrist.org/imgs/320afb48d89d174e0dfa532d413dcc3297e32378/full/!1280%2C720/0/default',
    description:
      'No one has to go through life’s challenges alone. Jesus Christ understands perfectly what you’re going through and will support you.',
    link: 'https://www.churchofjesuschrist.org/welcome/jesus-knows-you?lang=eng',
  },
  {
    title: 'The Making of a Missionary',
    image:
      'https://www.churchofjesuschrist.org/imgs/https%3A%2F%2Fwww.churchofjesuschrist.org%2Fimgs%2Fa9a641feaa37f659f83f62443e5e5d58e92806f0%2Ffull%2F%2521768%252C%2F0%2Fdefault/full/!640,/0/default',
    description: 'How serving others can strengthen your covenant path.',
    link: 'https://www.churchofjesuschrist.org/study/general-conference/1976/10/the-making-of-a-missionary?lang=eng#title1',
  },
  {
    title: 'Serve a Mission',
    image:
      'https://www.churchofjesuschrist.org/imgs/e852b6f3ec0111ec802aeeeeac1efd1f9fa4cb6e/full/!1920%2C800/0/default',
    description: 'Have you ever thought about serving a mission?',
    link: 'https://www.churchofjesuschrist.org/callings/missionary?lang=eng',
  },
  {
    title: 'How Can I Be a Successful Missionary?',
    image:
      'https://www.churchofjesuschrist.org/imgs/36902a7211c7b3f03c788cbad23573be28a2f402/full/!1280%2C666/0/default',
    description:
      'No matter how hard my companion and I worked, everyone was rejecting our message. What could we do to become successful missionaries?',
    link: 'https://www.churchofjesuschrist.org/study/ensign/2013/10/how-can-i-be-a-successful-missionary?lang=eng#title1',
  },
];

const MyCovenantPath: React.FC = () => {
  return (
    <main className="main-container">
      <div className="content-wrapper">
        <StatusBar />
        <MenuHeader pageName="My Covenant Path"/>
        <ProfileSection />
        <JumpBackInSection />
        <NavigationBar />
      </div>
    </main>
  );
};

const ProfileSection: React.FC = () => {
  return (
    <section className="profile-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5820256a4f75ade69d02740fda37de95decab5bd0be452321a5cb886e7eea7f0?placeholderIfAbsent=true&apiKey=3055a917cc2a4d1bb1e4682a7a2966e7"
        className="profile-picture"
        alt="Profile picture"
      />
      <br />
      <br />
      <br />
      <div className="profile-info">
        <div className="username-box">spencerhilton</div>
        <div className="snapshot-box">Progress Snapshot</div>
        <div className="progress-container">
          <span className="progress-percentage">47%</span>
          <div className="progress-circle">
            <div className="progress-fill" style={{ width: '47%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const JumpBackInSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active carousel item
  const carouselRef = useRef<HTMLDivElement>(null); // Reference to the carousel container

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const itemWidth = (carouselRef.current.children[0] as HTMLElement)
          .clientWidth; // Cast to HTMLElement
        const newIndex = Math.floor(scrollPosition / itemWidth);
        setActiveIndex(newIndex); // Update active index based on scroll position
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="jump-back-section">
      <h2 className="jump-back-title">Jump Back in:</h2>
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel">
          {articles.map((article, index) => (
            <div key={index} className="carousel-item">
              <img
                src={article.image}
                alt={article.title}
                className="carousel-image"
              />
              <h3 className="carousel-article-title">{article.title}</h3>
              <p className="carousel-article-description">
                {article.description}
              </p>
              <a href={article.link} className="carousel-read-more">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicating active carousel item */}
      <div className="dots-container">
        {articles.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => {
              if (carouselRef.current) {
                const element = carouselRef.current.children[
                  index
                ] as HTMLElement; // Cast to HTMLElement
                const scrollTo = element.offsetLeft;
                carouselRef.current.scrollTo({
                  left: scrollTo,
                  behavior: 'smooth',
                });
                setActiveIndex(index);
              }
            }} // Allow click to jump to specific article
          />
        ))}
      </div>
    </section>
  );
};

export default MyCovenantPath;
