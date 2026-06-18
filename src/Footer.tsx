import "../src/Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className='ft'>
        <div className='socials'>
          <h3 id='contactUs'>Get In Touch with Us</h3>
          <p>
            Discover the difference that personalized and compassionate home
            healthcare can make in your life. Contact FriNor Healthcare
            Professionals today to discuss your healthcare needs and explore how
            we can support your journey to wellness.
          </p>
          <ul>
            <li>
              <a
                href='https://www.facebook.com/profile.php?id=61553894983507'
                target='_blank'
              >
                <span>
                  <i className='fa-brands fa-facebook'></i>
                </span>
              </a>
            </li>
            <li>
              <a href='http://'>
                <span>
                  <i className='fa-brands fa-instagram'></i>
                </span>
              </a>
            </li>
            <li>
              <a href='http://www.twitter.com/@rehoboth_health' target='_blank'>
                <span>
                  <i className='fa-brands fa-twitter'></i>
                </span>
              </a>
            </li>
          </ul>
          {/* <!-- Footer- Contact us --> */}
        </div>
        <div className='footer'>
          <div className='el'>
            <h3>
              <i className='fa-solid fa-phone'></i>
              Phone and Email
            </h3>
            <p>
              T:
              <a href='tel:+07553426873' target='_blank'>
                07348499288
              </a>
            </p>
            <p>
              E:
              <a href='mailto:info@frinorgroup.co.uk' target='_blank'>
                info@frinorgroup.co.uk
              </a>
            </p>
            <p>
              E:
              <a href='mailto: manager@frinorgroup.co.uk' target='_blank'>
                manager@frinorgroup.co.uk
              </a>
            </p>
          </div>
          <div className='el'>
            <h3>
              <i className='fa-solid fa-location-dot'></i>
              Physical Address
            </h3>
            <p>42 Bramcote Avenue,</p>
            <p>WA11 9JQ,</p>
            <p>St Helens</p>
            <p>Merseyside</p>
          </div>
          <div className='el'>
            <h3>Office Opening Hours</h3>
            <p>Mon-Fri: 9:00am-5:00pm</p>
          </div>
        </div>
        {/* <!-- Company details --> */}
        <div className='devDetails'>
          <p>
            Copyright &copy;{year} FriNor Group Ltd, Registered in England,
            United Kingdom Company Reg: 17141487 -All Rights Reserved
          </p>
          <p>Website Designed by Barry Stiles</p>
          <span>
            <i className='fa-solid fa-house'></i>
            <Link
              to='home'
              smooth={true}
              duration={500}
              offset={-15000}
              className='to_home'
            >
              To Top
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
