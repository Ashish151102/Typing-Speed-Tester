import React, { useState } from "react";
import './contact.css';
import logo from "./images/logo.png";
import Navbar from "./navbar";
import SideNav from "./sidenav";
import insta from './images/instagram.png';
import gmail from './images/gmail.png';



const Contact = () => {
    const [userData, setUserData] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    });
  
    let name, value;
    const postUserData = (event) => {
      name = event.target.name;
      value = event.target.value;
  
      setUserData({ ...userData, [name]: value });
    };
  
    // connect with firebase
    const submitData = async (event) => {
      event.preventDefault();
      const { firstName, lastName, phone, email, address, message } = userData;
  
      if (firstName && lastName && phone && email && address && message) {
        const res = fetch(
          "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phone,
              email,
              address,
              message,
            }),
          }
        );
  
        if (res) {
          setUserData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            message: "",
          });
          alert("Data Stored");
        } else {
          alert("plz fill the data");
        }
      } else {
        alert("plz fill the data");
      }
    };
  
    return (
      <>
        <Navbar />
        <SideNav />
        <section className="contactus-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 mx-auto">
                <div className="row">
                  <div className="contact-leftside col-12 col-lg-5">
                    <h1 className="main-heading fw-bold">
                      Connect With Our  Team. :)
                    </h1>
                    <p className="main-hero-para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt eaque alias similique.
                    </p>
                    <figure>
                      <img
                        src={logo}
                        alt="contatUsImg"
                        className="img-fluid"
                      />
                    </figure>
                  </div>
  
                  {/* right side contact form  */}
                  <div className="contact-rightside col-12 col-lg-7">
                    <form method="POST">
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name="firstName"
                            id=""
                            className="form-control"
                            placeholder="First Name"
                            value={userData.firstName}
                            onChange={postUserData}
                          />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name="lastName"
                            id=""
                            className="form-control"
                            placeholder="Last Name"
                            value={userData.lastName}
                            onChange={postUserData}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name="phone"
                            id=""
                            className="form-control"
                            placeholder="Phone Number "
                            value={userData.phone}
                            onChange={postUserData}
                          />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name="email"
                            id=""
                            className="form-control"
                            placeholder="Email ID"
                            value={userData.email}
                            onChange={postUserData}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 contact-input-feild">
                          <input
                            type="text"
                            name="address"
                            id=""
                            className="form-control"
                            placeholder="Add Address"
                            value={userData.address}
                            onChange={postUserData}
                          />
                        </div>
                      </div>
  
                      <div className="row">
                        <div className="col-12 ">
                          <input
                            type="text"
                            name="message"
                            id=""
                            className="form-control"
                            placeholder="Enter Your Message"
                            value={userData.message}
                            onChange={postUserData}
                          />
                        </div>
                      </div>
                      <div class="form-check form-checkbox-style">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          className="main-hero-para">
                          I agree that the thapatechnicalpay may contact me at the
                          email address or phone number above
                        </label>
                      </div>
                      <div className="contact-soc">
                    <a href="https://www.instagram.com/mr.daksh_/"><img src={insta} className="insta-img"></img></a>
                    </div>
                    <div className="contact-soc">
                    <img src={gmail} className="insta-img"></img>dakshsahu24@gmail.com
                    </div>
                      <button
                        type="submit"
                        className="btn btn-style w-100"
                        onClick={submitData}>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </>
    );
  };
  
  export default Contact;























// const Contact = () => {


//     return (
//         <div>
//             <div className="c-cont">
//                 <div className="c-text">
//                 <img  src={image_right} alt="a colourfull image"></img>
//                     <p>we are agroup of people trying to helping others with the basic concepts with additional functionalities and are here to help you, write freely with what you need help.
//                         </p>
//                 </div>
//                 <div className="contact">
//                     <div>
//                     Normal contact form, maybe from thapa technical
//                     </div>
//                     <div className="cs1">instagram</div>
//                     <div className="cs2">linkedin</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact;