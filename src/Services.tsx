import "../src/Services.css";
const Services = () => {
  return (
    <>
      {/* <!-- Services explained --> */}
      <aside className='services-container'>
        <h2 id='ourServices'>Services We Offer</h2>
        <div className='services-grid'>
          <div className='service-box'>
            <h3>Hoarding Support Services</h3>
            <p>
              Compassionate, trauma-informed support for hoarding challenges. We
              work at your pace, building trust and restoring safe, habitable
              living environments with dignity and respect.
            </p>
          </div>

          <div className='service-box'>
            <h3>Supported Living Services</h3>
            <p>
              Tailored support for adults with learning disabilities and complex
              needs. We help build independence through budgeting, health
              appointments, social connection, and personalized goal-setting.
            </p>
          </div>

          <div className='service-box'>
            <h3>Domiciliary Care (Home Care)</h3>
            <p>
              Reliable, dignified support enabling you to remain at home. Our
              carers assist with personal care, medication, meals, mobility, and
              companionship while maintaining your comfort and independence.
            </p>
          </div>

          <div className='service-box'>
            <h3>Cleaning & Clearing Services</h3>
            <p>
              Professional, sensitive cleaning and clearing for complex
              situations. We restore properties to safe conditions with
              discretion, from deep cleaning to specialist sanitisation and
              post-hoarding support.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Services;
