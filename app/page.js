import Image from "next/image";
import HeroSection from "./components/HeroSection";
import SecondSection from "./components/SecondSection";
import SpecialOffers from "./components/SpecialOffers";
import TopDestinations from "./components/TopDestinations";
import RecomendedHotels from "./components/RecomendedHotels";
import MostPopularTours from "./components/MostPopularTours";
import TrendingActivity from "./components/TrendingActivity";
import FeaturedHolidayRentals from "./components/FeaturedHolidayRentals";
import PopularCarHire from "./components/PopularCarHire";
import FeaturedCruiseDeals from "./components/FeaturedCruiseDeals";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <SpecialOffers/>
      <SecondSection/>
      <TopDestinations/>
      <RecomendedHotels/>
      <MostPopularTours/>
      <TrendingActivity/>
      <FeaturedHolidayRentals/>
      <PopularCarHire/>
      <FeaturedCruiseDeals/>
    </div>
  );
}
