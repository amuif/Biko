import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Logotypes from "./components/Logotypes";
import Attribution from "./components/Attribution";
import HeadingSubheading from "./components/HeadingSubheading";
import Services from "./components/Services";
import CTA from "./components/CTA";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
// import Team from "./components/Team";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <div className="relative pt-[60px] max-sm:pt-[30px]">
      <NavigationBar />
      <Header className="mt-[70px] max-sm:mt-[40px]" />
      <Logotypes className="mt-[70px] max-sm:mt-[40px]" />
      <HeadingSubheading
        className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px]"
        heading="Services"
        subheading="At our bike-sharing platform, we offer a smart and sustainable alternative for getting around the city. Our services include easy bike access, convenient stations across Addis Ababa, and a seamless mobile app experience for booking, riding, and payments.
"
      />
      <Services className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />
      <CTA className="mt-[100px] max-sm:mt-[40px]" />
      <HeadingSubheading
        className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px]"
        heading="Case Studies"
        subheading="Explore Real-Life Examples of Our Bike-Sharing Impact through Our Case Studies
"
      />
      <CaseStudies className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />
      <HeadingSubheading
        className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px] max-md:flex-col"
        heading="Our Working Process"
        subheading="Step-by-Step Guide to Using Our Bike-Sharing Service"
        subheadingClassName="max-w-[292px]"
      />
      <Process className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />

      <HeadingSubheading
        className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px]"
        heading="Contact Us"
        subheading="Connect with Us: Let's Discuss Your riding journey"
        subheadingClassName="max-w-[323px]"
      />

      <Contact className="mt-[80px] max-lg:mt-[60px] max-sm:mt-[40px]" />
      <Footer className="mt-[140px] max-lg:mt-[100px] max-sm:mt-[60px]" />
    </div>
  );
}
