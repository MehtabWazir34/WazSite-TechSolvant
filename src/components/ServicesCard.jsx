const services = [
  { type: "Graphics Designs", info: "We ensure delivering quality services on time.", id: 1, card: "/Images/graphics.jpg" },
  { type: "Web Development", info: "Modern and scalable websites built fast.", id: 2, card: "/Images/graphics.jpg" },
  { type: "SEO Optimization", info: "Boost your ranking with expert strategies.", id: 3, card: "/Images/graphics.jpg" }
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen px-6 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <p className="text-gray-300 mb-6">
        We deal in various categories of services, from graphics designs up to website development.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((s) => (
          <div key={s.id} className="w-72 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img src={s.card} alt={s.type} className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-lg">{s.type}</h4>
              <p className="text-sm text-gray-400">{s.info}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">See All</button>
    </section>
  );
}
