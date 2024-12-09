import React from "react";

const ApplicationProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Submit Application",
      description:
        "Complete the application and include SOP (Statement of Purpose)",
      icon: "icon-application",
    },
    {
      id: 2,
      title: "Application Review",
      description: "A panel will review your application whether you qualify",
      icon: "icon-review",
    },
    {
      id: 3,
      title: "Admission Successful",
      description: "Selected candidate can join the program by paying the fee",
      icon: "icon-admission",
    },
  ];
  return (
    <div className="applicationProcess w-full ">
      <section className="mobile:w-[92.558vw] m-auto  w-[87.5vw]">
        <div className="container mx-auto p-4">
          <h1 className="text-[2.3vw] font-bold mb-8">Application process</h1>
          <section className="">
            <img className="w-full" src="../../applicationProcess.png" />
            {/* --- if they want design --- */}
            {/* <div className=" mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
              <p className="text-center text-gray-600 mb-12">
                The application process consists of three simple steps. The
                selected candidates will receive an offer of admission, which
                they can accept by paying the admission fee
              </p>
              <div className="flex justify-around ">
                {steps.map((step, index) => (
                  <div key={step.id} className="text-center relative">
                    {index < steps.length - 1 && (
                      <div className="absolute top-5 left-[100%] transform -translate-x-1/2 w-full h-0.5 bg-orange-500 z-1"></div>
                    )}
                    <div className="flex  justify-center mb-4 z-1 relative">
                      <span className="text-[2.188vw] text-white bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex px-[1vw]">
                      <div className="mb-4">
                       
                        <span
                          className={`block w-16 h-16 mb-2 bg-gray-200 rounded-full flex items-center justify-center ${step.icon}`}
                        ></span>
                      </div>
                      <h3 className="text-xl font-medium">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </section>
        </div>
      </section>
    </div>
  );
};

export default ApplicationProcess;
