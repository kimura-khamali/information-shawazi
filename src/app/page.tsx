import Contact from "./components/Contact";
import Ratings from "./components/Ratings";
import Testimonial from "./components/Testimonial";

export default function Home(){
  return (
    <div className="flex flex-col items-center">
      <main>
        <Ratings />
        <Contact />
        <Testimonial />
      </main>
    </div>
  );
};
