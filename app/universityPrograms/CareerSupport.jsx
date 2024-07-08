import React from 'react'

const CareerSupport = () => {
    const careerSupportData={
        "program": {
          "title": "JOB Assistant Program",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
          "buttonText": "Download Brochure"
        },
        "benefits": [
          {
            "image": "/iimb.png",
            "title": "IIM Jobs Pro-Membership of 6 months for Free"
          },
          {
            "image": "/resumeBuilding.png",
            "title": "Resume building assistance to create a powerful resume"
          },
          {
            "image": "/groupMeeting.png",
            "title": "Spotlight on IIM Jobs for highlighting your profile to recruiters"
          }
        ]
      }
      const CareerSupport = ({ program, benefits }) => {
        return (
          <div className="container mx-auto p-4">
            <h1 className="text-[2.3vw] font-bold mb-8">Career Support</h1>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md">
                  <h2 className="text-[1.463vw] font-semibold mb-4">{program.title}</h2>
                  <p className="mb-6 text-[1.15vw]">{program.description}</p>
                  <button className="bg-white text-orange-500 py-2 px-4 rounded-lg font-semibold">
                    {program.buttonText}
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center mb-6">
                    <img src={benefit.image} alt={benefit.title} className="w-[17.188vw] h-[16.667vh]  mr-4" />
                    <p className="text-[#000000] text-[1.206vw] font-semibold">{benefit.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      };
  return (
    <div className='facultyDetails w-full '>
    <section className='mobile:w-[92.558vw] m-auto  w-[87.5vw]'>

    <CareerSupport program={careerSupportData.program} benefits={careerSupportData.benefits} />
    </section>
    </div>
  )
}

export default CareerSupport