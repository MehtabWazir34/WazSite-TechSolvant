import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aos from "aos";
import Hero from "../components/Hero";
import Us from "../components/Us";
import RequestForm from "../components/RequestForm";
import Reviews from "../components/Reviews";


const previewServices = [
  { id: 1, type: "Graphics Designs", info: "Quality designs.", card: "/Images/graphics.jpg" },
  { id: 2, type: "Web Development", info: "Modern responsive websites.", card: "https://img.freepik.com/premium-psd/web-development-3d-illustration_609002-519.jpg" },
  { id: 3, type: "SEO Marketing", info: "Boost your online presence.", card: "https://th.bing.com/th/id/R.f61084688b00967a44dee60b1d98d61a?rik=DO9P2mDL%2bIt6Vg&pid=ImgRaw&r=0&sres=1&sresct=1" }
];

const previewTeam = [
  { id: 1, title: "SaifUllah Khan", cate: "Software Engineer", pic: "https://media.licdn.com/dms/image/v2/D4D03AQHote-snDKK0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730812444229?e=1758758400&v=beta&t=JmeAPPLnK8fjAHw1fE_lzdOIFz1-4tQRtnY8DupTHvk" },
  { id: 2, title: "Mehtab Wazir", cate: "Front-end Developer", pic: `${import.meta.env.BASE_URL}Me.jpg` },
  
  { id: 3, title: "Nehal Anees", cate: "On-Page SEO Specialist", pic: "https://media.licdn.com/dms/image/v2/D4D03AQFWhNIhJP21zQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731560468456?e=1758758400&v=beta&t=qnExAn1tEvmDa8upnnEcRr5hZTPR1XvkFv-9qHq5rKU" }
];

  const reviews = [
    {
      name: "Ahmed Khan",
      service: "Graphics Design",
      review: "The design was modern and professional. Really loved the creativity!",
    },

    {
      name: "Fatima Ali",
      service: "Web Development",
      review: "Clean, responsive, and fast website. Excellent work!",
    },

    {
      name: "Hassan Abdullah",
      service: "SEO Solutions",
      review: "Our site traffic doubled within weeks. Very effective SEO strategy!",
    },

  ];

function Home() {
  return (
    <motion.section
      className="px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <Hero/>

            <motion.div className="min-h-[70vh] w-full grid items-center border-b border-gray-400 mb-8">
        <h2 className="text-4xl font-bold text-center">What WazSite?</h2>
      <p className="text-lg leading-relaxed w-full">
        At WazSite-TechSolvant, we believe solutions matter more than services. Born out of the idea that technology should not confuse but empower, we built this platform as a solution center—a place where challenges meet creativity, and problems find their way to answers.
<br /><br /> We’re not just another freelancing corner on the web. We are a team of thinkers, creators, and developers who are passionate about guiding people toward the right solution. Even if your challenge goes beyond technology, we’ll point you in the right direction—because sometimes the best help is guidance itself.</p>
<div className="text-center mt-6">
          <Link to="/us">
            <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold">
              Read more
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Services Preview */}
      <motion.div className="mb-12 border-b border-gray-700 pb-4 min-h-[94vh]">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {previewServices.map(s => (
            <div key={s.id} className="p-4 border rounded-lg text-center">
              <img src={s.card} alt={s.type} className="rounded-lg mb-3" />
              <h4 className="text-xl font-bold">{s.type}</h4>
              <p>{s.info}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/services">
            <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold">
              See All Services
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Team Preview */}
      <motion.div className="border-b border-gray-700 pb-4 min-h-[94vh] mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {previewTeam.map(m => (
            <div key={m.id} className="p-4 border rounded-lg text-center">
              <img src={m.pic} alt={m.title} className="rounded-lg mb-3 h-80 w-full object-cover" />
              <h4 className="text-xl font-bold">{m.title}</h4>
              <p>{m.cate}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/team">
            <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold">
              See All Team Members
            </button>
          </Link>
        </div>
      </motion.div>
      
    <motion.div className="py-12 px-6 max-w-5xl mx-auto min-h-[54vh]">
      <h2 className="text-3xl font-bold text-center mb-8" >
        What Our Clients Say
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {reviews.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
            <p className="text-sm italic mb-1">Service: {item.service}</p>
            <p className="text-gray-700 dark:text-gray-300">{item.review}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
          <Link to="/reviews">
            <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold">
              See All
            </button>
          </Link>
        </div>
    </motion.div>

      <RequestForm title = "Sent Request"/>
    </motion.section>
  );
}

export default Home;
