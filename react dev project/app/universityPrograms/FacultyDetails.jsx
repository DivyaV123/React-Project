import React from 'react'

const FacultyDetails = () => {
    const FacultyData=[
        {
          "name": "James",
          "experience": 24,
          "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "/dummyFaculty.png"
        },
        {
          "name": "James",
          "experience": 24,
          "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "/dummyFaculty.png"
        },
        {
          "name": "James",
          "experience": 24,
          "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "/dummyFaculty.png"
        }
      ]
      const FacultyCard = ({ faculty }) => {
        return (
          <div className="bg-white h-[32.528vh] shadow-md rounded-lg p-6 mb-6 flex ">
           <section className='block'>
           <img src={faculty.image} alt={faculty.name} className="w-24 h-24  mr-6" />
            <h2 className="text-[1.406vw] font-semibold mt-[3vh]">{faculty.name}</h2>
            <p className="text-gray-600 w-[11.563vw] text-[1.094vw]">Experience: {faculty.experience} Years</p>
           </section>
            <div>
             
              <p className="text-[1.094vw] text-gray-700">{faculty.bio}</p>
            </div>
          </div>
        );
      };
  return (
    <div className='facultyDetails w-full bg-[#F9F9F9] mt-[8vh] pb-[3vh]'>
         <div className="mobile:w-[92.558vw] m-auto  w-[87.5vw]">
      <h1 className="text-[2.3vw] relative top-[2.639vh] font-bold mb-8">Meet the Faculty</h1>
      {FacultyData.map((faculty, index) => (
        <FacultyCard key={index} faculty={faculty} />
      ))}
    </div>
    </div>
  )
}

export default FacultyDetails