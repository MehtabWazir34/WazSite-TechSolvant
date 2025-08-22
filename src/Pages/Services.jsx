import { motion } from "framer-motion";
import RequestForm from "../components/RequestForm";
import Aos from "aos";

const allServices = [
  { 
    id: 1, 
    type: "Graphics Designs", 
    info: "Quality graphic work.", 
    card: "/Images/graphics.jpg",
    tools: ["Adobe Photoshop, ", "Illustrator, ", "Figma, ", "Canva."],
    features: ["Logo Design, ", "Brand Identity, ", "Social Media Graphics,", "UI Mockups."],
    details: "We provide creative and visually appealing graphic design solutions that elevate your brand identity and capture audience attention."
  },
  { 
    id: 2, 
    type: "Web Development", 
    info: "Modern responsive sites.", 
    card: "https://img.freepik.com/premium-psd/web-development-3d-illustration_609002-519.jpg",
    tools: ["React.js, ", "Node.js, ", "Tailwind CSS, ", "MongoDB."],
    features: ["Custom Websites, ", "Responsive Design, ", "E-commerce Solutions, ", "CMS Integration."],
    details: "We build fast, modern, and secure web applications tailored to your business needs with full-stack solutions."
  },
  { 
    id: 3, 
    type: "SEO Marketing", 
    info: "Boost ranking.", 
    card: "https://th.bing.com/th/id/R.f61084688b00967a44dee60b1d98d61a?rik=DO9P2mDL%2bIt6Vg&pid=ImgRaw&r=0&sres=1&sresct=1",
    tools: ["Google Analytics, ", "Ahrefs, ", "SEMRush, ", "Yoast SEO."],
    features: ["Keyword Research, ", "On-page SEO, ", "Off-page SEO, ", "Content Strategy."],
    details: "Our SEO strategies help improve search rankings, drive organic traffic, and increase your online visibility."
  },
  { 
    id: 4, 
    type: "Mobile Apps", 
    info: "iOS & Android apps.", 
    card: "https://www.pngitem.com/pimgs/m/9-94498_mobile-apps-development-png-mobile-application-development-png.png",
    tools: ["Flutter, ", "React Native, ", "Kotlin, ", "Swift."],
    features: ["Cross-platform Apps, ", "Native iOS/Android Apps, ", "App Store Optimization, ", "API Integration."],
    details: "We design and develop scalable, user-friendly mobile applications that work seamlessly across platforms."
  },
  { 
    id: 5, 
    type: "Cloud Solutions", 
    info: "Scalable hosting & infra.", 
    card: "https://tse3.mm.bing.net/th/id/OIP.GYNS-FQxr4mdOQ2p1CqomwHaGN?rs=1&pid=ImgDetMain&o=7&rm=3",
    tools: ["AWS, ", "Google Cloud, ", "Microsoft Azure, ", "Docker."],
    features: ["Cloud Hosting, ", "Serverless Apps, ", "Data Backup, ", "Infrastructure Management."],
    details: "We help businesses scale with reliable and secure cloud solutions, reducing costs and improving efficiency."
  }
];

function Services() {
  return (
    <>
    <motion.section
      className="px-8 py-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-6">All Our Services</h2>
      <p className="mb-8">We provide a wide range of professional tech solutions.</p>

      <motion.div className="hidden grid gap-6 md:block">
        {allServices.map(service => (

         service.id % 2===0 ? 
         
         <motion.div key={service.id} className="flex gap-4 w-[88%] my-4 mx-auto p-4 border border-gray-600 rounded-lg text-center hover:shadow-lg "
          whileHover={{ scale: 1.05 }}
          >
           <div className="border-r pr-4 flex-col flex-1 text-left">
              <h4 className="text-xl font-bold">{service.type}</h4>
              <p>{service.info}</p>
              <p><b className="text-amber-500">Tools: </b> {service.tools}</p>
              <p><b className="text-amber-500">Features: </b> {service.features}</p>
              <p><b className="text-amber-500">Details: </b> {service.details}</p>
            </div>
            <img src={service.card} alt={service.type} className="w-[1/2] h-40 rounded-lg mb-3" />
           
          </motion.div>
          :
            <motion.div key={service.id} className="flex gap-4 w-[88%] my-4 mx-auto p-4 border border-gray-600 rounded-lg text-center hover:shadow-lg"
             whileHover={{ scale: 1.05 }}
             >
            <img src={service.card} alt={service.type} className="w-[1/2] h-40 rounded-lg mb-3" />
            <div className="border-l pl-4 text-left">
              <h4 className="text-xl font-bold">{service.type}</h4>
            <p>{service.info}</p>
             <p><b className="text-amber-500">Tools: </b> {service.tools}</p>
            <p><b className="text-amber-500">Features: </b> {service.features}</p>
            <p><b className="text-amber-500">Details: </b> {service.details}</p>
            </div>
          </motion.div>

        ))}
      </motion.div>


      <motion.div>
        {
          allServices.map((service)=>(
            <motion.div key={service.id} className="grid m-4 w-[88%] mx-auto p-4 border border-gray-600 rounded-lg text-center hover:shadow-lg md:hidden"
             whileHover={{ scale: 1.05 }}
             >
            <img src={service.card} alt={service.type} className="w-[1/2] h-40 rounded-lg mb-3 mx-auto" />
            <div className=" text-left">
              <h4 className="text-xl font-bold text-center">{service.type}</h4>
            <p className="text-center">{service.info}</p>
             <p><b className="text-amber-500">Tools: </b> {service.tools}</p>
            <p><b className="text-amber-500">Features: </b> {service.features}</p>
            <p><b className="text-amber-500">Details: </b> {service.details}</p>
            </div>
          </motion.div>
          ))
        }
      </motion.div>

    </motion.section>
    <RequestForm title = "Request for Service"/>
  </>
  );
}

export default Services;
