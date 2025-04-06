function Contact() {
    return (
      <section id="contact" className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">📬 Contact Me</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-4">
          Have an opportunity or want to collaborate? I'm open to full-stack roles, freelance work, or just geeking out over code. Let's connect!
        </p>
        <a
          href="mailto:satyendray2306@gmail.com"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Say Hello
        </a>
        <div className="mt-6 flex justify-center gap-6 text-blue-600 text-xl">
          <a href="https://github.com/Satyendra-official" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/satyendra-kr-yadav/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    );
  }
  
  export default Contact;
  