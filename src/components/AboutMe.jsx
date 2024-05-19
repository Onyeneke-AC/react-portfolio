function AboutMe() {
  return (
    <section class="about-me" id="about">
      <h2 class="section__title section__title--about">Who I am</h2>
      <p class="section__subtitle section__subtitle--about">
        Software Engineer
      </p>

      <div class="about-me__body">
        <p>
          I am an aspiring software engineer who takes his time to work on his
          foundations before embracing any technology.
        </p>
        <p>
          I have experience with C which I applied in embedded systems, R which
          I applied in data science, python which I applied in computer vision
          and javascript which I currently use for my front-end. I am also
          interested in diving into a career in line with cloud computation or
          backend development.
        </p>
      </div>

      <img src="./img/me.jpeg" alt="Anthony Smiling" class="about-me__img" />
    </section>
  );
}

export default AboutMe;
