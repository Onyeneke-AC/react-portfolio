import { Link } from "react-router-dom";

function MyWork() {
  return (
    <section class="my-work" id="work">
      <h2 class="section__title section__title--work">My Work</h2>
      <p class="section__subtitle section__subtitle--work">
        Experience in the engineering industries with a plan of introducing
        technology into this field.
      </p>
      <div class="portfolio">
        <Link to="portfolio-item.html" class="portfolio__item">
          <img
            src="./img/dialux_300x300.jpeg"
            alt="Lighting Design"
            class="portfolio__img"
          />
        </Link>

        <Link to="#" class="portfolio__item">
          <img
            src="./img/html_300x300.png"
            alt="Javascript"
            class="portfolio__img"
          />
        </Link>

        <Link to="#" class="portfolio__item">
          <img src="./img/html_300x300.png" alt="css" class="portfolio__img" />
        </Link>

        <Link to="#" class="portfolio__item">
          <img
            src="./img/pipe_300x300.png"
            alt="P & ID"
            class="portfolio__img"
          />
        </Link>

        <Link to="#" class="portfolio__item">
          <img
            src="./img/microsoft_pack_1_300x300.png"
            alt="microsoft packages"
            class="portfolio__img"
          />
        </Link>

        <Link to="#" class="portfolio__item">
          <img src="./img/html_300x300.png" alt="html" class="portfolio__img" />
        </Link>

        <Link to="#" class="portfolio__item">
          <img
            src="./img/git_300x300.jpeg"
            alt="Git & Github"
            class="portfolio__img"
          />
        </Link>

        <Link to="#" class="portfolio__item">
          <img
            src="./img/emb_300x300.png"
            alt="Embedded Systems"
            class="portfolio__img"
          />
        </Link>

        <Link to="#" class="portfolio__item">
          <img
            src="./img/elect_300x300.jpeg"
            alt="Electrical Instrumentation"
            class="portfolio__img"
          />
        </Link>
      </div>
    </section>
  );
}

export default MyWork;
