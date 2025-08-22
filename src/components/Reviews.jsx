import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RequestForm from "./RequestForm";

function Reviews() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // run only once per scroll
    });
  }, []);

  const reviews = [
    {
      name: "Ahmed Khan",
      service: "Graphics Design",
      review: "The design was modern and professional. Really loved the creativity!",
    },
    {
      name: "John Smith",
      service: "Video Editing",
      review: "Smooth transitions and quality editing, exceeded expectations.",
    },
    {
      name: "Fatima Ali",
      service: "Web Development",
      review: "Clean, responsive, and fast website. Excellent work!",
    },
    {
      name: "David Khan",
      service: "App Development",
      review: "The app runs flawlessly. Great communication during development.",
    },
    {
      name: "Hassan Abdullah",
      service: "SEO Solutions",
      review: "Our site traffic doubled within weeks. Very effective SEO strategy!",
    },
    {
      name: "Sadia Wazir",
      service: "UI/UX",
      review: "Clean, responsive, and fast delievery. Excellent work!",
    },
    {
      name: "Davood Khan",
      service: "App Development",
      review: "The app runs flawlessly. Great communication during development.",
    },
    {
      name: "Hassan Abdullah",
      service: "SEO Solutions",
      review: "Our site traffic doubled within weeks. Very effective SEO strategy!",
    },
  ];

  return (
   <>
    <section className="py-12 px-6 max-w-5xl mx-auto justify-center flex-col">
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        What Our Clients Say
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-center">
        {reviews.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md mx-auto"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
            <p className="text-sm italic mb-1">Service: {item.service}</p>
            <p className="text-gray-700 dark:text-gray-300">{item.review}</p>
          </div>
        ))}
      </div>
    </section>
        <RequestForm title="Sent Request"/>
   </>
    
  );
}

export default Reviews;
