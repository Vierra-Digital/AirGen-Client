import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import NewsStories from '@/components/NewsStories';
import Competitions from '@/components/Competitions';
import TeamAndDonors from '@/components/TeamAndDonors';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Header />
      <Hero />
      <HowItWorks />
      <NewsStories />
      <Competitions />
      <TeamAndDonors />
      <AboutUs />
      <Footer />
    </div>
  );
}
