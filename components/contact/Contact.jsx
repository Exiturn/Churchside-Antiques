"use client";
import React, { useRef, useState, useContext, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    /**
     * The parameters for this send function are:
     * serviceid, templateid, email object, public key
     */
    emailjs
      .send(
        "service_1m8dvsx",
        "template_uf9r19u",
        {
          from_name: form.name,
          to_name: "Simon",
          from_email: form.email,
          to_email: "bmagistrado@yahoo.com",
          message: form.message,
        },
        "hcYiIcMpq_2DDaKc4"
      )
      .then(
        () => {
          setLoading(false);
          handleClick();
          alertInfo();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alertError();
        }
      );
  };

  return (
    <div className="sectionContainer h-screen">
      <div className={`sectionBackground`}>
        <h1
          className={`text-[#D6B174] italic text-opacity-20 mt-[-1rem] lg:mt-[-3.5rem] xl:mt-[-3rem] text-[20vw]`}
        >
          Contact Us
        </h1>
      </div>

      <main className="pt-[8vw] md:pt-[10vw] text-[#C69025] flex flex-col justify-center items-start w-full">
        <h2 className="text-[#C69025] text-[4.5vh] md:text-[3.5vw] bold">
          Want to book a home visit?
        </h2>

        <div className="flex justify-between items-center w-full">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row justify-between md:gap-x-[10rem] w-full">
              <div className="md:w-[30%]">
                <label className="flex flex-col mt-4 pointer-events-none text-[#C69025]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#D6B174] rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg p-2 mt-2 placeholder:text-[#D6B174] text-[#C69025]"
                />
              </div>
              <div className="md:w-[40%]">
                <label className="flex flex-col mt-4 pointer-events-none text-[#C69025]">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full bg-[#D6B174] rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg p-2 mt-2 placeholder:text-[#D6B174] text-[#C69025]"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full">
              <label className="pointer-events-none text-[#C69025]">Message</label>
              <textarea
                name="message"
                rows="10"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className="outline-none w-full mt-2 border-none p-2 bg-[#D6B174] rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg placeholder:text-[#D6B174] text-[#C69025]"
              />
            </div>
            <button type="submit" className="mt-4 py-3 px-8 border-[1px] rounded-full bg-[#D6B174] hover:bg-[#C69025] transition-colors duration-150">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
