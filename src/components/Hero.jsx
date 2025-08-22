export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Video */}
      <iframe
    src="https://www.youtube.com/embed/sQ22pm-xvrE?autoplay=1&mute=1&loop=1&playlist=sQ22pm-xvrE "
    title="Hero Video"
    // frameBorder="0"
    allow="autoplay; fullscreen"
    className="hidden md:block absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
  />



      {/* Dark Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 animate-fadeIn">
        <h4 className="text-lg">Welcome to the</h4>
        <h1 className="text-4xl md:text-6xl font-bold my-4">WazSite-TechSolvant</h1>
        <p className="text-gray-300">An All-In-One solution to your digital problems.</p>
      </div>
    </section>
  );
}
