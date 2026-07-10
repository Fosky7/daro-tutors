import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import { Button } from "@/components/ui/button";

const Index = () => {
  console.log('Index page rendering');
  return (
    <main>
      <HeroSection />
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-12">What You&#x27;ll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div key="0" className="rounded-lg bg-card p-6 border border-border">
              <h3 className="font-display text-xl mb-2 text-primary">Project-based</h3>
              <p className="text-sm text-muted-foreground">Build a portfolio as you learn.</p>
            </div><div key="1" className="rounded-lg bg-card p-6 border border-border">
              <h3 className="font-display text-xl mb-2 text-primary">Expert instructors</h3>
              <p className="text-sm text-muted-foreground">Taught by working professionals.</p>
            </div><div key="2" className="rounded-lg bg-card p-6 border border-border">
              <h3 className="font-display text-xl mb-2 text-primary">Lifetime access</h3>
              <p className="text-sm text-muted-foreground">Learn at your own pace.</p>
            </div></div>
        </div>
      </section>
      <FeaturedCourses />
      <section id="menu" className="py-24 px-6 bg-muted">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-display text-4xl font-bold text-center">Enrollment</h2>
          <div><h3 className="text-2xl font-display text-primary mb-6">Options</h3><ul>
                {/* Updated list items with Link for course detail navigation */}
                <li key="Single Course" className="flex items-baseline justify-between py-4 gap-4 border-b border-border">
                  <Link to="/courses/single-course" className="hover:underline flex-1">
                    <div><p className="font-medium">Single Course</p><p className="text-sm text-muted-foreground">Lifetime access</p></div>
                  </Link>
                  <span className="font-display text-lg text-accent">$99</span>
                </li>
                <li key="All-Access" className="flex items-baseline justify-between py-4 gap-4 border-b border-border">
                  <Link to="/courses/all-access" className="hover:underline flex-1">
                    <div><p className="font-medium">All-Access</p><p className="text-sm text-muted-foreground">Every course</p></div>
                  </Link>
                  <span className="font-display text-lg text-accent">$299</span>
                </li>
              </ul></div>
        </div>
      </section>
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-8">We&#x27;re happy to help you choose.</p>
          <div className="flex flex-col items-center gap-2 mb-8">
            <a href="tel:+15550100" className="text-lg font-medium text-primary">+1 (555) 0100</a>
            <a href="mailto:hello@darotechtutors.com" className="text-muted-foreground">hello@darotechtutors.com</a>
          </div>
          <form className="space-y-4 text-left" action="mailto:hello@darotechtutors.com" method="post" encType="text/plain">
            <input required name="name" placeholder="Name" className="w-full rounded-md border border-border bg-card px-4 py-3" />
            <input required name="email" type="email" placeholder="Email" className="w-full rounded-md border border-border bg-card px-4 py-3" />
            <textarea required name="message" placeholder="Tell us how we can help" rows={4} className="w-full rounded-md border border-border bg-card px-4 py-3" />
            <Button type="submit" size="lg" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Index;