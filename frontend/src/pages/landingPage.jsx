import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import Navbar from "../components/navbar";
import Hero from "../components/heroSection";
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
import Career from "../components/nextStep";
import Galley from "../components/ourGallery";
import VideoTestimonials from "../components/videoTestimonials";
import Footer from "../components/footer";

import AnimatedSection from "../utils/AnimatedSection";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;

    if (!id) return;

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -96;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }, [location]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="overflow-x-hidden">
        <Navbar />

        <Hero />

        <AnimatedSection id="alumni">
          <Alumni />
        </AnimatedSection>

        <Fourth />

        <AnimatedSection id="workshops">
          <Workshops />
        </AnimatedSection>

        <SkyTouch />
        <Career />

        <AnimatedSection id="gallery">
          <Galley />
        </AnimatedSection>

        <section id="courses" className="scroll-mt-24">
          <PremiumCourses />
        </section>

        <LeadingCompanies />
        <PlacementRate />
        <BrandPartners />

        <AnimatedSection id="video-testimonials">
          <VideoTestimonials />
        </AnimatedSection>

        <AnimatedSection id="hiring-partners">
          <HiringPartner />
        </AnimatedSection>

        <AdvancedTraining />

        <AnimatedSection id="contact">
          <Footer />
        </AnimatedSection>
      </div>
    </LazyMotion>
  );
}
