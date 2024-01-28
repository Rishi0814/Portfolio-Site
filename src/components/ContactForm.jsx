import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contact: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Invalid phone number"),

  email: Yup.string().email().required("Email is required"),
  description: Yup.string(),
});

const ContactForm = () => {
  const initialValues = {
    name: "",
    contact: "",
    email: "",
    description: "",
  };

  const handleSubmit = (values, { setSubmitting }, e) => {
    // Handle form submission here

    console.log(values);
    console.log("object");
    setSubmitting(false);
  };

  return (
    <div id="Contact">
      <h1 className="text-4xl font-bold text-center bg-[#0a192f] text-gray-300 ">
        Connect
      </h1>

      <div className=" mx-auto px-8 py-6 bg-[#0a192f] flex justify-center align-middle">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <form className="bg-[#0a192f] rounded px-8 pt-6 pb-8 mb-4 w-[40rem]">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-[#8893b0] text-sm font-bold mb-2"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="shadow bg-slate-400 appearance-none border rounded w-full py-2 px-3 text-[#0a192f] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="contact"
                  className="block text-[#8893b0] text-sm font-bold mb-2 "
                >
                  Contact Number
                </label>
                <Field
                  type="tel"
                  id="contact"
                  name="contact"
                  className="shadow bg-slate-400 appearance-none border rounded w-full py-2 px-3 text-[#0a192f] leading-tight focus:outline-none focus:shadow-outline "
                  placeholder="Your Contact Number"
                />
                <ErrorMessage
                  name="contact"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-[#8893b0] text-sm font-bold mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="shadow bg-slate-400 appearance-none border rounded w-full py-2 px-3 text-[#0a192f] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-[#8893b0] text-sm font-bold mb-2"
                >
                  Description
                </label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  rows="4"
                  className="shadow bg-slate-400 appearance-none border rounded w-full py-2 px-3 text-[#0a192f] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Write a brief description..."
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={!isValid} // Disable the button if the form is not valid
                  className=" bg-[#ffec99] hover:border-[#ffec99] text-[#0a192f]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
