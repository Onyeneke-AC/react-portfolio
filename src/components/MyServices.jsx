import { Link } from "react-router-dom";

function MyServices() {
  return (
    <section class="my-services" id="services">
      <h2 class="section__title section__title--services">What I do</h2>
      <div class="services">
        <div class="service">
          <h3>Consultation</h3>
          <p>
            I offer consultation on the best way to go about setting up your
            software prototype.
          </p>
        </div>

        <div class="service">
          <h3>Website Execution</h3>
          <p>
            As a fullstack developer, I carry out the execution of both the
            front end and back end development of website packages.
          </p>
        </div>

        <div class="service">
          <h3>Deployment</h3>
          <p>
            I also offer the best cloud computing solution that will aid the
            deployment of your software.
          </p>
        </div>
      </div>
      <Link to="#work" class="btn">
        My Work
      </Link>
    </section>
  );
}

export default MyServices;
