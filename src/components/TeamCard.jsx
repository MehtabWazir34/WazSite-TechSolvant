const TeamMembers = [
  { title: "Mehtab Wazir", cate: "Front-end Developer", id: 1, pic: "/Images/guest posting.png" },
  { title: "Aisha Khan", cate: "UI/UX Designer", id: 2, pic: "/Images/guest posting.png" },
  { title: "Ali Raza", cate: "Backend Developer", id: 3, pic: "/Images/guest posting.png" }
];

export default function Team() {
  return (
    <section id="team" className="min-h-screen px-6 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Team</h2>
      <p className="mb-6">Meet our professional TechSolvant team members.</p>
      <div className="flex flex-wrap justify-center gap-6">
        {TeamMembers.map((m) => (
          <div key={m.id} className="w-64 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img src={m.pic} alt={m.title} className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-bold">{m.title}</h4>
              <p className="text-sm text-gray-400">{m.cate}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">See All</button>
    </section>
  );
}
