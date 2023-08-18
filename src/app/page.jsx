import Hero from "@/components/Hero";
import ScrollCard from "@/components/ScrollCards";
import Manifesto from "@/components/Manifesto";
import SelfImp from "@/components/SelfImp";
import SelfAware from "@/components/SelfAware";
import Privacy from "@/components/Privacy";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollCard />
      <Manifesto />
      <SelfImp />
      <SelfAware />
      <Privacy />
    </>
  );
}
