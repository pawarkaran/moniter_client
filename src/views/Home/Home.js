import { CButton, CCol, CCollapse, CContainer, CImg, CLink, CNavbar, CNavbarBrand, CNavbarNav, CRow, CToggler } from '@coreui/react'
import React, { useState } from 'react'
import './home.scss';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="">

      <div className="start-body">
      
      {/* ---------------Navbar------------- */}
        <div className="navbar-start">
          <CNavbar expandable="sm" className="navbar-home p-2 sticky-top sticky " >
            <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
            <CNavbarBrand className="navbar-brand "  >
              <CImg
                src={process.env.PUBLIC_URL + "/images/logs.png"}
                // src="../images/logs.png"
                height="50px"
              // className="mb-2"
              />
            </CNavbarBrand>
            <CCollapse show={isOpen} navbar>
              <CNavbarNav className="navbar-text text-center">
                <CLink  href="/" className="navbar-12 pr-3 pl-3 text-decoration-none" ><span className="navbar-12">Home</span></CLink>
                <CLink className="navbar-12 pr-3 pl-3 text-decoration-none "><span className="navbar-12"> About</span></CLink>
                <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12">Contact</span></CLink>
                <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12">Link</span></CLink>      


              </CNavbarNav>
              <CNavbarNav className=" ml-auto text-center d-flex justify-content-center">
                <CLink href="/login" className="nav-righty text-white ml-3 mr-3 text-decoration-none "><span className="nav-righty">Login </span></CLink>
                <CLink href="/register" className="nav-righty text-white ml-3 mr-3  text-decoration-none"><span className="nav-righty">Sign Up </span></CLink>


              </CNavbarNav>
            </CCollapse>
          </CNavbar>

        </div>

      {/* _---------------------- */}




        <div className="home-body ">
          <div className="start-body" fluid>
            <CContainer className="start-container m-auto" >
              <CRow clasname="head-start  m-auto">
                <CCol className=" m-auto" md="5" >
                  <p className="col-start" >Great Companies are</p>
                  <p className="col-para">Zenduty's end-to-end incident alerting, on-call management
                     and response orchestration platform helps you institutionalize reliability into your production operations </p>
                     <CButton className="start-button">Free Demo</CButton>
                     <CButton className="start-button2">Create Account</CButton>
                </CCol>
                <CCol className="m-auto " md="5">
                  <CImg className="card-img-top p-3 pb-5 mb-5 mt-5"  src={process.env.PUBLIC_URL + "/images/landingpage.webp"} alt="Card image cap" />
                </CCol>
              </CRow>

            </CContainer>
          </div>
        </div>

        
      </div>

      <div className="main-body-home c-app c-default-layout flex-row justify-content-center ">
        <h1>Tools to moniter incidents</h1>
      </div>



      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>Mumbai, mumbai mumbai</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>981234567</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">


                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="/"><i class="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="/"><i class="fab fa-twitter twitter-bg"></i></a>
                    <a href="/"><i class="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About US</a></li>
                    <li><a href="/"> Our Services</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Expert Team</a></li>


                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>Copyright &copy; 2020, All Right Reserved <a href="https://codepen.io/anupkumar92/">DevOp's</a></p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Terms</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">Policy</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>




    </div>
  )
}

export default Home
