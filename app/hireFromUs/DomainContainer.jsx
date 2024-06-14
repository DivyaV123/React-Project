import React from 'react'
import "./HirefromusLanding.scss";
const domains = [
  { name: 'Software Testing', image: '../../course_icon.png' },
  { name: 'UX designer', image:  '../../course_icon.png' },
  { name: 'Cybersecurity', image:  '../../course_icon.png' },
  { name: 'Cloud Computing', image: '../../course_icon.png' },
  { name: 'Networking', image: '../../course_icon.png' },
  { name: 'DevOps', image: '../../course_icon.png' },
  { name: 'Blockchain', image: '../../course_icon.png'},
  { name: 'Business Analyst', image: '../../course_icon.png'},
];
const DomainContainer = () => {
  return (
    <section className="domainContainer">
    <div className="domain-selector container mx-auto  p-4">
      <h2 className="text-center  mt-8 mb-8">Find Our Talents in Different Domains</h2>
      <div className="grid grid-cols-2 md:grid-cols-4   domain_candidate">
        {domains.map((domain) => (
          <div key={domain.name} className="domain-card p-4  rounded text-center h-[160px] w-[260px] hover:bg-gray-200 cursor-pointer">
          <div className="image mb-2 flex justify-center" >
                <img src={domain.image} alt={domain.name} className="h-[36px] mt-1 w-[36px] object-cover rounded" />
              </div>
              <div className="domainName relative top-7">{domain.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default DomainContainer;