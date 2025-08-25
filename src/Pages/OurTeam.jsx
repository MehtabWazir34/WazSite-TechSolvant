import { motion } from "framer-motion";
import RequestForm from "../components/RequestForm";
import MyImg from "../assets/Me.jpg"

const allTeam = [

  { 
    id: 1, 
    title: "Masaud Ahmad", 
    cate: "Ethickal Hacker", 
    pic: "https://media.licdn.com/dms/image/v2/D4D03AQE3L0fcsgInjw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700156138160?e=1758758400&v=beta&t=_XsMgO-Nsq4MXgtMvikLkj0MmeMghybypkUQr2W2G0k",
    experience: "4+ years",
    expertise: ["App Security, ", "Vulnerability Assessment, ", "Cybersecurity Researcher."],
    bio: "Masaud expertise lies in uncovering vulnerabilities in web applications, servers, and networks, with a strong focus on critical risks identified by frameworks like the OWASP Top 10..",
    profile: 'https://www.linkedin.com/in/masaudsec/'
  },
  { 
    id: 2, 
    title: "SaifUllah Khan", 
    cate: "SoftWare and MERN Full Stack Developer", 
    pic: "https://media.licdn.com/dms/image/v2/D4D03AQHote-snDKK0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730812444229?e=1758758400&v=beta&t=JmeAPPLnK8fjAHw1fE_lzdOIFz1-4tQRtnY8DupTHvk",
    experience: "8+ years",
    expertise: ["Flutter, ", "Native And Dev, ", "GSAP, ", "MERN & T3 Stack Specialist."],
    bio: "SaifUllah is an expert in Full Stack Web and App, server-side logic, APIs, and database design, ensuring scalable and secure back-end architectures.",
    profile: 'https://www.linkedin.com/in/saifullah-khan-4aa554231/'
  },

    { 
    id: 3, 
    title: "Mehtab Wazir", 
    cate: "Front-end Developer", 
    pic: MyImg,
    experience: "2+ years",
    expertise: ["React.js, ", "Tailwind CSS, ", "JavaScript, ", "UI Animations."],
    bio: "Mehtab specializes in building modern, responsive, and highly interactive web interfaces with a focus on user experience.",
    profile: 'https://www.linkedin.com/in/mehtab-wazir-1429bb247/'
  },
    { 
    id: 4, 
    title: "SharJeel Khan", 
    cate: "Flutter Dev | FireBase", 
    pic: "https://media.licdn.com/dms/image/v2/D4D03AQEX13WIkRp16Q/profile-displayphoto-shrink_200_200/B4DZbdaq2OIEAY-/0/1747471478904?e=1758758400&v=beta&t=py96dWXn1EFPL3-uX7zEpbblVhvaBMs0UMqc0NlTERQ",
    experience: "3+ years",
    expertise: ["MERN Stack, ", "REST APIs, ", "Cloud Deployment, ", "Agile Development."],
    bio: "Ali brings a holistic view of both front-end and back-end, delivering complete and efficient full-stack solutions.",
    profile: 'https://www.linkedin.com/in/muhammad-sharjeel-59a255203/'
  },
  { 
    id: 5, 
    title: "Aqib Jadoon", 
    cate: "Project Manager", 
    pic: "https://media.licdn.com/dms/image/v2/D4D03AQF5KIGM1L9xjg/profile-displayphoto-shrink_800_800/B4DZg.5W94HAAg-/0/1753401880942?e=1758758400&v=beta&t=Xw7FBbNwIbo-UKD86QywOKBD3-IFlhWM8c_0xwxkoeo",
    experience: "2+ years",
    expertise: ["Agile, ", "Scrum, ", "Team Leadership, ", "Client Communication "],
    bio: "Aqib ensures smooth project delivery, coordinating between clients and teams while maintaining timelines and quality.",
    profile: ''
  },
  { 
    id: 6, 
    title: "Nehal Anees", 
    cate: "SEO Specialist", 
    pic: "https://media.licdn.com/dms/image/v2/D4D03AQFWhNIhJP21zQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731560468456?e=1758758400&v=beta&t=qnExAn1tEvmDa8upnnEcRr5hZTPR1XvkFv-9qHq5rKU",
    experience: "4+ years",
    expertise: ["SEO, ", "Google Analytics, ", "Keyword Research, ", "Content Optimization"],
    bio: "Nehal improves brand visibility and search rankings with proven SEO strategies and data-driven marketing approaches.",
    profile: "https://www.linkedin.com/in/nehal-anees/"
  },
  { 
    id: 7, 
    title: "Aimal Fayyaz", 
    cate: "Video Editor", 
    pic: "https://media.licdn.com/dms/image/v2/D4D03AQH9vznYLWQ4_w/profile-displayphoto-scale_200_200/B4DZhhgB3IHYAY-/0/1753982443756?e=1758758400&v=beta&t=6RnbWLTqmvKvnKR2JsZdOO4nJNsCV4DhJWaoO9rfL_I",
    experience: "2+ years",
    expertise: ["CapCut, ", "Adobe Premier Pro, ", "Adobe After Effect."],
    bio: " Aimal Fayyaz — a Top-Rated Plus video editor on Upwork and a Level 2 Seller on Fiverr with years of experience turning raw footage into scroll-stopping, high-converting videos.",
    profile: "https://www.linkedin.com/in/aimal-fayyaz-1a913a255/"
  }
];


function OurTeam() {
  return (
    <>
    <motion.section
      className="px-8 py-12 text-center border-t my-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-4">Meet Our Full Team</h2>
      <p className="mb-8">Here are all our professionals working with us.</p>

      <motion.div className="grid gap-6 hidden md:block">
        {allTeam.map(member => (

          member.id%2 ? <motion.div
            key={member.id}
            className="flex w-[88%] gap-8 my-4 mx-auto p-4 border border-gray-600 rounded-lg text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.pic}
              alt={member.title}
              className="rounded-lg w-[1/2] h-40 object-cover mb-3"
            />
            <div className="flex-col flex-1 border-l text-left pl-4">
              <h4 className="text-xl font-bold text-amber-500">{member.title}</h4>
            <p>{member.experience } as a {member.cate}</p>
            <p><b className="text-amber-500">Skills: </b>{member.expertise}</p>
            <p className="mb-4"><b className="text-amber-500">Bio: </b>{member.bio}</p>
            <a href={member.profile} target="_blank" className="cursor-pointer  bg-blue-700 rounded-lg p-2 mx-auto">LinkedIn </a>
            </div>
          </motion.div> : <motion.div
            key={member.id}
            className="flex w-[88%] my-4 mx-auto gap-8 p-4 border border-gray-600 rounded-lg text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
          <div className="flex-col flex-1 border-r text-left pr-4">
            <h4 className="text-xl font-bold text-amber-500">{member.title}</h4>
            <p>{member.experience } as a {member.cate}</p>
            <p><b className="text-amber-500">Skills: </b>{member.expertise}</p>
            <p className="mb-4"><b className="text-amber-500">Bio: </b>{member.bio}</p>
            <a href={member.profile} className="cursor-pointer  bg-blue-700 rounded-lg p-2 mx-auto" target="_blank">LinkedIn </a>
          </div>
            <img
              src={member.pic}
              alt={member.title}
              className="rounded-lg w-[1/2] h-40 object-cover mb-3"/>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="md:hidden">
        {
          allTeam.map((member)=>(
            <motion.div
            key={member.id}
            className="grid w-[88%] my-6 mx-auto gap-8 p-4 border border-gray-600 rounded-lg text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }} >
              <img
              src={member.pic}
              alt={member.title}
              className="rounded-lg w-[1/2] h-40 object-cover  mx-auto"/>
          <div className="flex-col flex-1 ">
            <h4 className="text-xl font-bold text-amber-500 text-center">{member.title}</h4>
            <p className="text-center">{member.experience } as a {member.cate}</p>
            <p><b className="text-amber-500">Skills: </b>{member.expertise}</p>
            <p className="mb-4"><b className="text-amber-500">Bio: </b>{member.bio}</p>
            <a href={member.profile} className="cursor-pointer  bg-blue-700 rounded-lg p-2 " target="_blank">LinkedIn </a>
          </div>
            
          </motion.div>
          ))
        }

      </motion.div>
    </motion.section>
    <RequestForm
    title = "Request to Join"
    />
    </>
  );
}

export default OurTeam;
