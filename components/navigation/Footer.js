import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Fragment } from "react/cjs/react.production.min";
import Image from "next/image";

const SubscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid e-mail address")
    .required("E-mail field is for the subscription"),
});

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="py-24 px-20">
        <div className="flex justify-between items-center">
          <div className="md:w-2/3 flex">
            <div className="md:w-1/3 w-full">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mb-4">
                FEATURES
              </h2>
              <nav className="list-none flex flex-col space-y-2.5">
                <li>
                  <a className="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Create a note
                  </a>
                </li>
                <li>
                  <a className="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Your notes
                  </a>
                </li>
                <li>
                  <a className="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Get our apps
                  </a>
                </li>
                <li>
                  <a className="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Get help
                  </a>
                </li>
              </nav>
            </div>
            <div className="md:w-1/3 w-full">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mb-4">
                CONNECT
              </h2>
              <nav className="list-none flex flex-col space-y-2.5">
                <li>
                  <a className="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Feedback
                  </a>
                </li>
                <li>
                  <a className="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Developer contact
                  </a>
                </li>
                <li>
                  <a className="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Repository
                  </a>
                </li>
                <li>
                  <a className="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Licenses
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div className="md:w-1/3">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mb-4">
              SUBSCRIBE 📨
            </h2>
            <div className="flex w-full justify-center mb-2 items-end md:justify-start">
              <div className="relative w-full">
                <Formik
                  initialValues={{
                    email: "",
                  }}
                  validationSchema={SubscribeSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => {
                    return (
                      <Fragment>
                        <Form className="flex w-full space-x-4">
                          <div className="w-full">
                            <Field
                              type="text"
                              name="email"
                              id="email"
                              className="border border-primary-border w-full focus:border-primary-blue outline-none rounded-md flex-1 px-4 py-3.5 duration-200"
                              placeholder="E-mail address..."
                            />
                          </div>
                          <button
                            className="bg-primary-blue px-6 min-h-full text-primary-bg hover:bg-active-blue rounded-md text-medium border duration-200"
                            type="submit"
                          >
                            Subscribe!
                          </button>
                        </Form>
                        {errors.email && touched.email ? (
                          <p className="mt-1.5 ml-1.5 text-xs text-red-500 opacity-70">
                            *{errors.email}
                          </p>
                        ) : null}
                      </Fragment>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <span className="text-gray-500 text-sm md:text-left text-center">
              The monthly newsletter will notify you about{" "}
              <strong className="font-medium">alexandria</strong> updates and
              development stories!
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex space-x-2.5 justify-center items-center">
            <Image src="/logo.png" width={32} height={32} />
            <span className="font-light text-md pb-0.5">
              <strong className="font-medium">alexandria.</strong>
            </span>
          </div>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            ©2022 Alexandria —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @andrenk
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          </span>
        </div>
      </div>
    </footer>
  );
}
