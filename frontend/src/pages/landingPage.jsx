import { motion } from "framer-motion";
import { fadeUp } from "../animations";

import Navbar from "../components/navbar";
import Second from "../components/secondPart";
import Alumni from "../components/alumni";
import Workshops from "../components/upcomingWorkshops";
import Fourth from "../components/placementRateOne";
import PremiumCourses from "../components/premiumCourses";
import LeadingCompanies from "../components/learnersAtCompanies";
import HiringPartner from "../components/hiringPartners";
import AdvancedTraining from "../components/advancedTraining";
import PlacementRate from "../components/placementRateTwo";
import BrandPartners from "../components/brandPartners";
import SkyTouch from "../components/academyAdvantage";
import Career from "../components/transformYourCareer";
import Galley from "../components/ourGallery";
import VideoTestimonials from "../components/videoTestimonials";
import AllCourses from "../pages/allCourses"
import Footer from "../components/footer";

//  AnimatedSection wrapper
function AnimatedSection({ children, id }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* HOME / HERO */}
      <AnimatedSection id="home">
        <Second />
      </AnimatedSection>

      {/* ALUMNI */}
      <AnimatedSection id="alumni">
        <Alumni />
      </AnimatedSection>

      {/* PLACEMENT RATE ONE */}
      <AnimatedSection id="placement-one">
        <Fourth />
      </AnimatedSection>

      {/* WORKSHOPS */}
      <AnimatedSection id="workshops">
        <Workshops />
      </AnimatedSection>

      {/* SKY TOUCH / ADVANTAGE */}
      <AnimatedSection id="sky-touch">
        <SkyTouch />
      </AnimatedSection>

      {/* CAREER */}
      <AnimatedSection id="career">
        <Career />
      </AnimatedSection>

      {/* GALLERY */}
      <AnimatedSection id="gallery">
        <Galley />
      </AnimatedSection>

      {/* COURSES */}
      <AnimatedSection id="courses">
        <PremiumCourses />
      </AnimatedSection>

      {/* LEADING COMPANIES */}
      <AnimatedSection id="leading-companies">
        <LeadingCompanies />
      </AnimatedSection>

      {/* PLACEMENT RATE TWO */}
      <AnimatedSection id="placement-two">
        <PlacementRate />
      </AnimatedSection>

      {/* BRAND PARTNERS */}
      <AnimatedSection id="brand-partners">
        <BrandPartners />
      </AnimatedSection>

      {/* VIDEO TESTIMONIALS */}
      <AnimatedSection id="video-testimonials">
        <VideoTestimonials />
      </AnimatedSection>

      {/* TESTIMONIALS
      <AnimatedSection id="testimonials">
        <Testimonials />
      </AnimatedSection> */}

      {/* HIRING PARTNERS */}
      <AnimatedSection id="hiring-partners">
        <HiringPartner />
      </AnimatedSection>

      {/* ADVANCED TRAINING */}
      <AnimatedSection id="advanced-training">
        <AdvancedTraining />
      </AnimatedSection>

      {/* <AnimatedSection id="allcourses">
        <AllCourses />
      </AnimatedSection> */}



      {/* CONTACT */}
      <AnimatedSection id="contact">
        <Footer />
      </AnimatedSection>
    </div>
  );
}
