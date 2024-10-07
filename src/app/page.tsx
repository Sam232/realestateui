import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import OurProperties from "./components/OurProperties";
import ChooseUs from "./components/ChooseUs";
import OurGuarantee from "./components/OurGuarantee";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header />
      <Experience />
      <OurProperties />
      <ChooseUs/>
      <OurGuarantee/>
      <AboutUs/>
    </main>
  );
}
