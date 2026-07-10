import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-muted/20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
          DaroTech Tutors
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Empowering learners with project-based tech education. Build your future, one skill at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild size="lg">
            <Link to="/courses">Explore Courses</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#contact">Join Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;