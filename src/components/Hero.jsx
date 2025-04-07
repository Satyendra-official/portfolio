function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col items-center text-center py-20 px-4 
      bg-gradient-to-br from-blue-100 to-white 
      dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Hey, I'm Satyendra 👋
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        I'm a Full Stack Web Developer (MERN) passionate about building web apps
        with modern, clean UIs and robust backends.
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        See My Work
      </a>
    </section>
  );
}

export default Hero;
