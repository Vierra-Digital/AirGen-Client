import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import NewsStories from '@/components/NewsStories';
import TeamAndDonors from '@/components/TeamAndDonors';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <NewsStories />
      <TeamAndDonors />
      <AboutUs />
      <Footer />
    </div>
  );
}
