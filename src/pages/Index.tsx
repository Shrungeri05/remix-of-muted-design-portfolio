import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageBackdrop from "@/components/PageBackdrop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageBackdrop />
      <div className="relative z-10">
      <Navigation currentPage="Home" />
      <main>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default Index;
