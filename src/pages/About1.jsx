const About1 = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6 " id="about">
      <div className="text-center">
        <span className="bg-neutral-900 text-red-600 rounded-full h-10 text-lg font-medium px-2 py-1 uppercase">
          About Us
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
        <div className="flex flex-col">
          <img
            className="object-cover w-full h-60"
            src="https://img1.wsimg.com/isteam/ip/5ff3b0ad-5fdd-422d-b010-1f70d6c0a853/blob.png"
            alt="About Image"
          />
          <h1 className="text-center py-4 text-xl">Who We Are</h1>
          <p className="px-4 font-extralight text-center">
            Jest Developers is a full-service IT company that offers a wide
            range of services including web development, software development,
            digital marketing, and more. We are committed to providing our
            clients with the highest quality products and services that meet
            their specific needs.
          </p>
        </div>
        <div className="flex flex-col">
          <img
            className="object-cover w-full h-60"
            src="https://img1.wsimg.com/isteam/stock/BpD2gwm"
            alt="About Image"
          />
          <h1 className="text-center py-4 text-xl">Our Expertise</h1>
          <p className="px-4 font-extralight text-center">
            Our team comprises of highly skilled and experienced professionals
            who possess expertise in diverse areas of IT, including software
            development, web design, cloud computing, and cybersecurity. We stay
            up-to-date with the latest trends and technologies to ensure that we
            deliver the best solutions to our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;
