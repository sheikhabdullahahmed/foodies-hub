import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);


    setTimeout(() => {
      setMessageSent(false);
    }, 3000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="w-full px-0 py-8 border-t-4 border-b-4 border-gray-300">
      <h1 className="text-3xl lg:text-5xl font-medium text-center text-blue-950 mb-8">
        Contact Us!
      </h1>

      <section className="text-center mb-8">
        <p className="text-lg font-semibold text-gray-600 mt-4">
          If you have any questions, feel free to reach out to us! We're here to
          assist you.
        </p>
      </section>

      <section>
        {messageSent && (
          <div className="text-center text-green-600 font-semibold mb-4">
            Your message has been sent successfully!
          </div>
        )}

<form
  id="contact"
  onSubmit={handleSubmit}
  className="max-w-lg mx-auto  p-6 rounded   shadow-2xl"
>

          <div className="mb-4">
            <label
              className="block  text-lg font-medium text-gray-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full cursor-pointer p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block  text-lg font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full cursor-pointer p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg  font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 cursor-pointer border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-medium  text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full cursor-pointer p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 text-white py-2 px-6 rounded cursor-pointer font-semibold mt-4"
            >
              Place Order Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactUsPage;
