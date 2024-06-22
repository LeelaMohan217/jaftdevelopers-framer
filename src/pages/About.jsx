import { motion } from "framer-motion";
import fadeIn from "../variants";
import about from "../assets/about.png";
const About = () => {
  return (
    // px-6
    <div className="max-w-7xl mx-auto pt-10 px-8 md:px-0">
      <div className="border-l-8 border-red-600 rounded">
        <h1 className=" text-2xl md:text-4xl text-red-600 font-medium px-4 md:px-10">
          About Us
        </h1>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="py-4 md:py-10 px-4 md:px-10"
        >
          <h1 className="text-2xl md:text-4xl font-thin">Our Story</h1>
          <p className="text-base font-thin py-2 md:py-4">
            Jaft Developers was founded in 2024 with a vision to revolutionize
            the software industry. Our journey began with a small team of
            passionate developers and has grown into a leading software
            development company. We pride ourselves on delivering innovative
            solutions that drive success for our clients.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:items-center">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <img className="rounded" src={about} alt="About" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <div>
            <h1 className="text-2xl md:text-4xl font-thin ">Our Mission</h1>
            <p className="text-base font-thin py-4">
              To empower businesses through cutting-edge software solutions that
              enhance efficiency, productivity, and growth.
            </p>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-thin">Our Vision</h1>
            <p className="text-base font-thin py-4">
              To be the most trusted partner for businesses seeking
              technology-driven transformation and success.
            </p>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-thin">What We Do?</h1>
            <p className="text-base font-thin py-4">
              At Jaft Developers, we specialize in delivering a wide range of
              software services tailored to meet your unique business needs. Our
              expertise includes custom software development, user-friendly
              mobile app development for iOS and Android, robust web
              development, flexible and secure cloud solutions, and advanced AI
              and machine learning implementations. These services are designed
              to enhance efficiency, productivity, and growth, ensuring your
              business stays ahead of the curve.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
