import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import fadeIn from "../variants";

const BusinessForm = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="grid md:grid-cols-3 md:gap-10 mx-auto my-4 md:my-10 overflow-hidden shadow-md"
    >
      <div className="flex flex-col col-span-1">
        <div>
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <p className="font-thin text-sm ">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div>
      <div className="col-span-2">
        <h1 className="text-xl font-semibold mb-4 text-white">Contact Form</h1>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            company_name: "",
            field: "",
            budget: "",
            mobile: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
          }}
          validationSchema={Yup.object({
            first_name: Yup.string().required("First Name is required"),
            last_name: Yup.string().required("Last Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            company_name: Yup.string().required("Company Name is required"),
            field: Yup.string().required("Field is required"),
            budget: Yup.number().required("Budget is required"),
            mobile: Yup.string()
              .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
              .required("Mobile number is required"),
            address: Yup.string().required("Address is required"),
            city: Yup.string().required("City is required"),
            state: Yup.string().required("State/Province is required"),
            pincode: Yup.string()
              .matches(/^\d{6}$/, "Invalid Pincode")
              .required("Pincode is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="">
                <label
                  htmlFor="first_name"
                  className="block text-white font-medium mb-2"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="John"
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="">
                <label
                  htmlFor="last_name"
                  className="block text-white font-medium mb-2"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Doe"
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2"
              >
                Email Address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="example@example.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="">
                <label
                  htmlFor="company_name"
                  className="block text-white font-medium mb-2"
                >
                  Company Name
                </label>
                <Field
                  type="text"
                  id="company_name"
                  name="company_name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="ABC Company"
                />
                <ErrorMessage
                  name="company_name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="">
                <label
                  htmlFor="field"
                  className="block text-white font-medium mb-2"
                >
                  Field
                </label>
                <Field
                  type="text"
                  id="field"
                  name="field"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="E-Commerce / Medical / Real Estate"
                />
                <ErrorMessage
                  name="field"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="">
                <label
                  htmlFor="budget"
                  className="block text-white font-medium mb-2"
                >
                  Estimated Budget
                </label>
                <Field
                  type="number"
                  id="budget"
                  name="budget"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="20000 - 30000"
                />
                <ErrorMessage
                  name="budget"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="">
                <label
                  htmlFor="mobile"
                  className="block text-white font-medium mb-2"
                >
                  Mobile
                </label>
                <Field
                  type="text"
                  id="mobile"
                  name="mobile"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="9876543210"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-white font-medium mb-2"
              >
                Address
              </label>
              <Field
                type="text"
                id="address"
                name="address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="123 Main St Fifth Evenue"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label
                  htmlFor="city"
                  className="block text-white font-medium mb-2"
                >
                  City
                </label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="New York"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-white font-medium mb-2"
                >
                  State / Province
                </label>
                <Field
                  type="text"
                  id="state"
                  name="state"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="New York"
                />
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="pincode"
                  className="block text-white font-medium mb-2"
                >
                  Zip / Postal Code
                </label>
                <Field
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="123456"
                />
                <ErrorMessage
                  name="pincode"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end md:justify-start">
              <button
                type="submit"
                className="w-full md:w-40 bg-red-700 py-3 px-4 rounded-md text-center hover:bg-red-800 focus:outline-none focus:bg-red-800 text-white"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </motion.div>
  );
};

export default BusinessForm;
