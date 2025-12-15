import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GoalGetterQuiz from './components/GoalGetterQuiz';
import HybridCatalog from './components/HybridCatalog';
import TransformationBlueprints from './components/TransformationBlueprints';
import ReviewsTicker from './components/ReviewsTicker';
import ExpertBar from './components/ExpertBar';
import Footer from './components/Footer';
import IntroOverlay from './components/IntroOverlay';
import CustomCursor from './components/CustomCursor';

function App() {
  const [introFinished, setIntroFinished] = React.useState(false);
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Basic SEO
    document.title = "Alexx Bodyshop | Premium Supplements & Local Pick-up";
  }, []);

  return (
    <>
      <CustomCursor />
      {!introFinished && <IntroOverlay onComplete={() => setIntroFinished(true)} />}
      <Navbar />
      <main>
        <Hero onStartQuiz={scrollToQuiz} />
        <div style={{ padding: '2rem 0' }}></div>
        <HybridCatalog />
        <div style={{ padding: '2rem 0' }}></div>
        <TransformationBlueprints />
        <GoalGetterQuiz />
        <div style={{ padding: '2rem 0' }}></div>
        <ReviewsTicker />
      </main>
      <ExpertBar />
      <Footer />
    </>
  );
}

export default App;
