import Hero from "@/components/Hero";
import ScrollCard from "@/components/ScrollCards";
import Manifesto from "@/components/Manifesto";
import SelfImp from "@/components/SelfImp";
import SelfAware from "@/components/SelfAware";
import Privacy from "@/components/Privacy";
import Work from "@/components/Work";
import Vacancies from "@/components/Vacancies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollCard />
      <Manifesto />
      <SelfImp />
      <SelfAware />
      <Privacy />
      <Work />
      <Vacancies />
      <Footer />
    </>
  );
}
