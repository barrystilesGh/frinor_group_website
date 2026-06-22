import Header from "../Header";
import Footer from "../Footer";
import "./AboutUs.css";
import Logo from "../assets/images/Frinor Logo.jpeg";

const AboutUs = () => {
  return (
    <div className='aboutus_page'>
      <title>About Us - FriNor Group Ltd</title>
      <link rel='shortcut icon' type='image/x-icon' href={Logo} />
      <Header />
      <section className='about_content'>
        <div>
          <span className='eyebrow'>The People Behind Your Care</span>
          <h2>FriNor Group Limited was founded on a simple belief</h2>
          <p>
            People deserve more than just a service. They deserve to be
            understood, respected, and genuinely supported by people who care
            not just professionally, but personally.
          </p>
          <p>
            Every member of our team came into this work because they wanted to
            to make a real difference. That motivation has not changed. It is
            the reason FriNor exists, and it is the standard we hold ourselves
            to every day.
          </p>
        </div>

        <div>
          <span className='eyebrow'>Our Professional Expertise</span>
          <p>
            Our team brings together a depth of professional experience that is
            uncommon in a care agency of our size and we believe that directly
            benefits the people we support and the commissioners and families
            who trust us.
          </p>
          <ul>
            <li>
              Two qualified social workers bringing rigorous assessment skills
              and a deep understanding of the legal and ethical frameworks that
              underpin good care.
            </li>
            <li>
              A Best Interests Assessor (BIA) — qualified to carry out formal
              assessments under the Deprivation of Liberty Safeguards.
            </li>
            <li>
              An experienced supported living service manager with direct
              operational experience of running supported living services to a
              high standard.
            </li>
            <li>
              A care team leader and manager bringing hands-on frontline
              leadership and the day-to-day knowledge of what good care looks
              like in practice.
            </li>
          </ul>
          <p>
            This combination of legal, assessment, operational, and frontline
            expertise means that when we take on a case, we understand it from
            every angle not just the task, but the person, the context, and the
            responsibility.
          </p>
        </div>

        <div>
          <span className='eyebrow'>What We Aspire To</span>
          <p>
            We are committed to building an organisation that the people we
            support, their families, and the professionals who refer to us can
            trust completely.
          </p>
          <ul>
            <li>
              Maintaining the highest standards of practice across every
              service.
            </li>
            <li>
              Staying current with legislation, guidance, and best practice in
              adult social care.
            </li>
            <li>
              Being honest, transparent, and accountable even when things are
              difficult.
            </li>
            <li>
              Listening carefully and responding to the needs of the people we
              work with.
            </li>
            <li>
              Growing thoughtfully, never at the expense of quality or the
              people in our care.
            </li>
          </ul>
          <p>
            We are proud of where FriNor is today, and we are equally focused on
            where it is going. Our ambition is not simply to be a care provider,
            it is to be one that sets a standard others aspire to.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
