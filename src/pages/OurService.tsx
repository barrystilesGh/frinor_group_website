import Header from "../Header";
import Footer from "../Footer";
import Logo from "../assets/images/Frinor_Logo.jpeg";
import "./OurService.css";

const OurService = () => {
  return (
    <div>
      <title>Our Services - FriNor Group Ltd</title>
      <link rel='shortcut icon' type='image/x-icon' href={Logo} />
      <Header />
      <main className='our_service'>
        <section className='page-header'>
          <span className='section-label'>Our Services</span>
          <h2>Specialist care and support for every need</h2>
          <h3>Professional, dignified, person-centred assistance</h3>
          <p>
            FRINOR Group Ltd delivers a full range of sensitive support services
            for adults and families. From hoarding support and domiciliary care
            to supported living and specialist cleaning, our work is always
            delivered with respect, discretion and practical compassion.
          </p>
        </section>

        <div className='service-panel'>
          <article className='service-card'>
            <h3>Hoarding Support Services</h3>
            <p>
              Hoarding is rarely just about clutter. It is often rooted in
              trauma, loss, mental health, or long-term social isolation — and
              it requires a response that goes far beyond clearing a property.
            </p>
            <p>
              FRINOR Group Ltd provides specialist hoarding support that is
              compassionate, non-judgmental, and trauma-informed. Our trained
              team works at the individual's pace, building trust before
              anything else, and never imposing a timeline that prioritises the
              property over the person.
            </p>
            <strong>Our support includes:</strong>
            <ul>
              <li>
                Safe, respectful reduction of clutter at a comfortable pace
              </li>
              <li>
                Restoring homes to safe, habitable conditions without distress
              </li>
              <li>
                Emotional reassurance and psychological sensitivity throughout
              </li>
              <li>
                Coordination with families, housing teams, and professionals
              </li>
              <li>
                Focus on sustained change — addressing causes, not just symptoms
              </li>
            </ul>
            <div className='highlight'>
              We work with local authorities, housing associations, NHS teams
              and families to create safer, more stable, dignified living
              environments.
            </div>
          </article>

          <article className='service-card'>
            <h3>Supported Living Services</h3>
            <p>
              FRINOR Group Ltd provides supported living services for adults who
              need a degree of support to live independently. Working alongside
              housing providers and landlords, we deliver the care and support
              element — visiting individuals in their own tenancies and helping
              them build the skills and confidence to manage daily life.
            </p>
            <p>
              We support adults with learning disabilities, mental health
              conditions and other complex needs, partnering with local
              authorities and care commissioners to deliver packages tailored to
              each person's assessed needs and wishes.
            </p>
            <strong>Support can include:</strong>
            <ul>
              <li>Budgeting, cooking and managing a household</li>
              <li>Medication support and attendance at health appointments</li>
              <li>Building social connections and community engagement</li>
              <li>Emotional support, confidence-building and goal-setting</li>
              <li>
                Flexible support levels from a few hours per week to 24/7 care
              </li>
            </ul>
            <div className='highlight'>
              Every plan is person-centred and regularly reviewed to promote
              genuine independence rather than dependency.
            </div>
          </article>

          <article className='service-card'>
            <h3>Domiciliary Care (Home Care)</h3>
            <p>
              For many people, remaining in their own home is central to
              wellbeing, identity and independence. FRINOR Group Ltd provides
              domiciliary care that makes this possible — offering reliable,
              dignified support that fits around each person's life.
            </p>
            <strong>Our carers assist with:</strong>
            <ul>
              <li>Personal care and hygiene support</li>
              <li>Medication support and prompting</li>
              <li>Meal preparation and nutrition</li>
              <li>Mobility support and safe moving around the home</li>
              <li>Companionship and emotional wellbeing</li>
            </ul>
            <p>
              We provide everything from short daily visits to more intensive
              ongoing support, and we work closely with families, GPs and social
              workers to ensure care remains appropriate as needs change.
            </p>
            <div className='highlight'>
              Our aim is simple: to help people stay comfortable, safe and in
              control in the place they call home.
            </div>
          </article>

          <article className='service-card'>
            <h3>Cleaning & Clearing Services</h3>
            <p>
              FRINOR Group Ltd provides professional cleaning and clearing
              services with a focus on complex, sensitive or high-need
              situations — not just routine domestic jobs.
            </p>
            <p>
              We work with vulnerable adults, families, housing providers and
              local authorities to restore properties to safe, clean and
              habitable conditions with discretion, respect and sensitivity.
            </p>
            <strong>This includes:</strong>
            <ul>
              <li>Deep cleaning of kitchens, bathrooms and living areas</li>
              <li>Clearing cluttered, neglected or heavily soiled spaces</li>
              <li>Specialist sanitisation and biohazard-aware cleaning</li>
              <li>End-of-tenancy and pre-occupation cleaning</li>
              <li>Post-hoarding clearance and restoration support</li>
            </ul>
            <div className='highlight'>
              Our cleaning work is connected to our wider care and support
              services, so every job is delivered with genuine sensitivity to
              the human context.
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurService;
