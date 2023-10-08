import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Promo from "./components/Promo";
import StayProductive from "./components/StayProductive";
import Testimonials from "./components/Testimonials";
import NotifyMe from "./components/NotifyMe";
import Footer from "./components/Footer";
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
  const size = useWindowSize();

  return (
    <main className="bg-[#181F2B] -z-40 items-center h-full">
      <Navbar></Navbar>
      <Intro size={size}></Intro>
      <Promo></Promo>
      <StayProductive size={size}></StayProductive>
      <Testimonials></Testimonials>
      <NotifyMe size={size}></NotifyMe>
      <Footer></Footer>
    </main>
  );
}

export default App;
