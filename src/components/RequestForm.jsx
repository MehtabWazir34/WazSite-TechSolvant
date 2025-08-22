export default function RequestForm(props) {
  return (
    <section id="request" className="min-h-screen px-6 py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">{props.title}</h2>
      <form className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <label id="name">Your Name:</label>
        <input id="name"  type="text" className="p-2 rounded bg-gray-100 dark:bg-gray-900 border border-orange-400 outline-none" placeholder="Write your name..." />

        <label id="email">Your Email:</label>
        <input id="email" type="email" className="p-2 rounded bg-gray-100 dark:bg-gray-900 border border-orange-400 outline-none" placeholder="Enter your email..." />

        <label id="message">Your Message:</label>
        <textarea id="message" rows="5" className="p-2 rounded bg-gray-100 dark:bg-gray-900 border border-orange-400 outline-none" placeholder="Write your request..."></textarea>

        <button className="bg-blue-600 py-3 rounded-lg hover:bg-blue-700">Send Request</button>
      </form>
    </section>
  );
}
