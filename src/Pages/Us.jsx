import { motion } from "framer-motion";

function Us() {
  return (
    <motion.section
      className="py-6 px-6 max-w-4xl mx-auto min-h-[100vh] grid items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div className="min-h-[70vh] w-full grid items-center border-b border-gray-400 mb-8">
        <h2 className="text-4xl font-bold text-center">What WazSite?</h2>
      <p className="text-lg leading-relaxed w-full">
        At WazSite-TechSolvant, we believe solutions matter more than services. Born out of the idea that technology should not confuse but empower, we built this platform as a solution center—a place where challenges meet creativity, and problems find their way to answers.
<br /><br /> We’re not just another freelancing corner on the web. We are a team of thinkers, creators, and developers who are passionate about guiding people toward the right solution. Even if your challenge goes beyond technology, we’ll point you in the right direction—because sometimes the best help is guidance itself.</p>
      </motion.div>

      <motion.div className="min-h-[94vh] w-full border-b border-gray-400 my-8">
        <h2 className="text-4xl font-bold mb-4">Why WazSite?</h2>
        <h2 className="my-2">Its simple, the word <b>"Waz"</b>, is extracted from <b>"Wazir"</b>.</h2>
        <p className="my-4">The <b>Wazirs</b> or <b>Waziris</b> (Pashto: وزير) are a Karlani Pashtun tribe found mainly in the Pakistan-Afghanistan border region. <br /> <a href="https://en.wikipedia.org/wiki/Wazir_(Pashtun_tribe)" target="_blank" className="underline text-blue-500">Read more...</a></p>

      <p className="text-lg leading-relaxed w-full">
        The idea behind the WazSite was simple: What if there was a place where people didn’t just “hire services,” but actually found the solutions to their problems—tech-related or not?
        <br />
        <br />
        What began as an experiment turned into a vision—a platform that combines skills, creativity, and problem-solving into one. The story is fueled by the belief that technology is not just about coding and design; it’s about helping people find clarity and progress in a digital-first world.
      </p>

      </motion.div>

      <motion.div className="min-h-[84vh] grid gap-8 justify-center border-b mb-6">
              <ul className="my-4 flex-col gap-10">
        <h2 className="font-bold text-amber-400 text-[34px]">What we offer?</h2>
        <p>Our services are designed to solve your challenges while delivering creativity and efficiency:</p>
        <li className="pl-12 my-6"><b className="text-amber-400">Web Development –</b> Clean, responsive, and modern websites tailored to your goals.</li>
        <li className="pl-12 my-6"><b className="text-amber-400">App Development & Flutter –</b> Cross-platform apps that bring your ideas to life.</li>
        <li className="pl-12 my-6"><b className="text-amber-400">Graphics & Design –</b> Creative visuals, branding, and UI/UX that speak for your brand.</li>
        <li className="pl-12 my-6"><b className="text-amber-400">SEO Solutions – </b>Optimizing visibility so your business can be found online.</li>
        <li className="pl-12 my-6"><b className="text-amber-400">Video Editing – </b>Professional editing that transforms raw footage into engaging stories.</li>
      </ul>
      </motion.div>
      
      <motion.div className="min-h-[54vh] my-8 flex-col gap-8 text-center justify-center">
        <h2 className="text-center text-amber-500 font-bold text-[34px] my-6">Our Philosophy</h2>
        <p className="my-4">At WazSite-TechSolvant, we live by a simple philosophy:</p>
        <p className="my-4 text-amber-500">“Don’t just deliver a service—deliver a solution.”</p>
      </motion.div>
      <motion.div className="min-h-[54vh] border-t my-8 flex-col gap-8 text-center justify-center">
        <h2 className="text-center text-amber-500 font-bold text-[34px] my-6">Why Choose Us?</h2>
        <p className="my-4">Solution-first mindset – More than services, we provide direction.</p>
        <p className="my-4">Creative & technical expertise – Covering web, apps, graphics, SEO, and media.</p>
        <p className="my-4">Guidance beyond delivery – Because solving problems doesn’t end at the final product.</p>
      </motion.div>

    </motion.section>
  );
}

export default Us;
