import "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we are serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to our restaurant, where passion for great food meets warm hospitality. 
              Our mission is to create memorable dining experiences by combining fresh, locally-sourced 
              ingredients with authentic recipes and modern presentation. Whether you are enjoying a family dinner, 
              celebrating a special occasion, or simply treating yourself, we aim to deliver outstanding service 
              and flavor in every dish. Come join us and experience the perfect blend of tradition and taste.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
