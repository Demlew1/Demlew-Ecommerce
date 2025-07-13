import AboutHero from "../components/Home/AboutHero";
import TechStack from "../components/Home/TechStack";
import Connect from "../components/Home/Connect";

export default function AboutPage() {
  return (
    <main className="min-h-screen mt-20">
      <AboutHero />
      <TechStack />
      <Connect />
    </main>
  );
}
