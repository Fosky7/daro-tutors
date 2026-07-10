import TutorCard from "@/components/TutorCard";

const tutors = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    subjects: ["Math", "Physics"],
    bio: "Sarah holds a PhD in Applied Mathematics and has over 10 years of tutoring experience. She specializes in making complex concepts accessible and enjoyable for students of all levels."
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    subjects: ["Chemistry", "Biology"],
    bio: "Michael is a former college professor with a passion for igniting curiosity in science. His patient, hands-on approach helps students build confidence and excel in their exams."
  },
  {
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    subjects: ["English", "Test Prep"],
    bio: "Emily is a certified English teacher and test prep expert. She tailors lessons to each student's unique learning style, helping them achieve top scores and improve writing skills."
  }
];

const Index = () => (
  <>
      <section id="top" className="relative min-h-screen flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80" alt="Daro Tutors hero image" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 max-w-2xl px-6 text-primary-foreground">
          <p className="uppercase tracking-[0.3em] text-sm text-accent mb-6">Private tutoring</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">Daro Tutors</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">Personalized lessons that build skills and confidence.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="rounded-md bg-accent px-6 py-3 font-medium text-accent-foreground hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md w-full sm:w-auto">Book a Session</a>
            <a href="#contact" className="rounded-md border border-primary-foreground/40 px-6 py-3 font-medium hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-200 w-full sm:w-auto">Learn More</a>
          </div>
        </div>
      </section>
      <section id="features" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div key="0" className="rounded-lg bg-card p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="font-display text-xl mb-2 text-primary">Math</h3>
              <p className="text-sm text-muted-foreground">From fractions to calculus.</p>
            </div><div key="1" className="rounded-lg bg-card p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="font-display text-xl mb-2 text-primary">Science</h3>
              <p className="text-sm text-muted-foreground">Biology, chemistry, physics.</p>
            </div><div key="2" className="rounded-lg bg-card p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <h3 className="font-display text-xl mb-2 text-primary">Test prep</h3>
              <p className="text-sm text-muted-foreground">SAT, ACT, and more.</p>
            </div></div>
        </div>
      </section>
      <section id="tutors" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Meet Our Tutors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <TutorCard key={tutor.name} {...tutor} />
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="py-24 md:py-32 px-6 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Personalized Learning</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Every student learns differently. We tailor each session to your child&apos;s pace and goals, tracking progress so you always know how they&apos;re doing.</p>
        </div>
      </section>
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Book a Free Trial</h2>
          <p className="text-muted-foreground mb-8">First session is on us.</p>
          <div className="flex flex-col items-center gap-2 mb-8">
            <a href="tel:+2348128447600" className="text-lg font-medium text-primary hover:underline">+234 (812) 844-7600</a>
            <a href="mailto:hello@darotutors.com" className="text-muted-foreground hover:underline">hello@darotutors.com</a>
          </div>
          <form className="space-y-5 text-left" action="mailto:hello@darotutors.com" method="post" encType="text/plain">
            <input required name="name" placeholder="Name" className="w-full rounded-md border border-border bg-card px-4 py-3 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none transition-all duration-200" />
            <input required name="email" type="email" placeholder="Email" className="w-full rounded-md border border-border bg-card px-4 py-3 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none transition-all duration-200" />
            <textarea required name="message" placeholder="Tell us how we can help" rows={4} className="w-full rounded-md border border-border bg-card px-4 py-3 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none transition-all duration-200" />
            <button type="submit" className="w-full rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md">Send Message</button>
          </form>
        </div>
      </section>
      <footer className="bg-foreground text-background py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl">Daro Tutors</p>
          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} Daro Tutors. All rights reserved.</p>
        </div>
      </footer>
  </>
);

export default Index;