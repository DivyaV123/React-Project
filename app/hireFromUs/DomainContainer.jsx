import React from 'react'
import "./HirefromusLanding.scss";
const domains = [
  { name: 'Software Developer', image: '../../developer.png' },
  { name: 'UI/UX designer', image:  '../../designer.png' },
  { name: 'DevOps', image: '../../devops.png' },
  { name: 'Data Science', image: '../../data.png' },
  { name: 'Project Management', image: '../../project-management.png' },
  { name: 'Cyber Security', image:  '../../cyber-security.png' },
  { name: 'Support', image: '../../customer-service.png'},
  { name: 'AI/ML', image: '../../AiML.png'},
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