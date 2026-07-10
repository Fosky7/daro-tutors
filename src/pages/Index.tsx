const Index = () => (
  <main>
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <a href="#top" className="font-display text-xl font-bold text-primary">DaroTech Tutors</a>
          <ul className="hidden md:flex items-center gap-8 text-sm"><li key="features"><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">What</a></li><li key="menu"><a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors">Enrollment</a></li><li key="contact"><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li></ul>
          <a href="#contact" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">Enroll Now</a>
        </nav>
      </header>
      <section id="top" className="relative min-h-screen flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80" alt="DaroTech Tutors hero image" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 max-w-2xl px-6 text-primary-foreground">
          <p className="uppercase tracking-[0.3em] text-sm text-accent mb-4">Online course</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">DaroTech Tutors</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">Master real skills through hands-on, project-based learning.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#contact" className="rounded-md bg-accent px-6 py-3 font-medium text-accent-foreground hover:opacity-90 transition-opacity">Enroll Now</a>
            <a href="#contact" className="rounded-md border border-primary-foreground/40 px-6 py-3 font-medium hover:bg-primary-foreground/10 transition-colors">Learn More</a>
          </div>
        </div>
      </section>
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
      <section id="menu" className="py-24 px-6 bg-muted">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-display text-4xl font-bold text-center">Enrollment</h2>
          <div><h3 className="text-2xl font-display text-primary mb-6">Options</h3><ul><li key="Single Course" className="flex items-baseline justify-between py-4 gap-4 border-b border-border">
                  <div><p className="font-medium">Single Course</p><p className="text-sm text-muted-foreground">Lifetime access</p></div>
                  <span className="font-display text-lg text-accent">$99</span>
                </li><li key="All-Access" className="flex items-baseline justify-between py-4 gap-4 border-b border-border">
                  <div><p className="font-medium">All-Access</p><p className="text-sm text-muted-foreground">Every course</p></div>
                  <span className="font-display text-lg text-accent">$299</span>
                </li></ul></div>
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
            <button type="submit" className="w-full rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity">Send Message</button>
          </form>
        </div>
      </section>
      <footer className="bg-foreground text-background py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl">DaroTech Tutors</p>
          <p className="text-sm opacity-70">&copy; {new Date().getFullYear()} DaroTech Tutors. All rights reserved.</p>
        </div>
      </footer>
  </main>
);

export default Index;
