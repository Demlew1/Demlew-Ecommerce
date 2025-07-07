import Hero from "../components/Home/Hero";
import Sponsors from "../components/Home/Sponsors";
import HomeProducts from "../components/Home/HomeProducts";
import HomeCategories from "../components/Home/HomeCategories";
import Testimonials from "../components/Home/Testimonials";
// import Footer from "../components/Home/Footer";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <HomeProducts />
      <HomeCategories />
      <Testimonials />
      {/* <Footer /> */}
    </div>
  );
}
