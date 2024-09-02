import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const branchAbbreviations = {
  "Aero Space Engineering": "Aero",
  "Aeronautical Engineering(AE)": "AE",
  "Architecture": "Arch",
  "Automation and Robotics": "AutoRob",
  "Automobile": "Auto",
  "BCA": "BCA",
  "Bio Medical(BM)": "BM",
  "Bio Technology(BT)": "BT",
  "Biotechnology": "BT",
  "Business Leadership Program (BLP)": "BLP",
  "CBZ (Chemistry Botany Zoology)": "CBZ",
  "Ceramics and Cement": "CerCem",
  "Chemical": "Chem",
  "Civil": "Civil",
  "Computer Science": "CS",
  "Computer Science(CS)": "CS",
  "Construction Technology Management(CTM)": "CTM",
  "Electrical & Electronics(EEE)": "EEE",
  "Electronics & Communication(E&C)": "E&C",
  "Electronics & Instrumentation Technology": "EIT",
  "Environmental": "Env",
  "Finance": "Fin",
  "Human Resource": "HR",
  "Human Resources Leadership Program (HRLP)": "HRLP",
  "Industrial Engineering Management(IEM)": "IEM",
  "Industrial Production(IP)": "IP",
  "Information Science": "IS",
  "Information Science(IS)": "IS",
  "Information Technology": "IT",
  "Instrumentation Technology(IT)": "IT",
  "Marketing": "Mkt",
  "Marketing Leadership Program (MLP)": "MLP",
  "Master in Computer Applications": "MCA",
  "Master of Arts (Economics)": "MA Econ",
  "Master of Arts (Rural Development)": "MA RD",
  "Master of Arts in Economics": "MA Econ",
  "Master of Arts in English": "MA Eng",
  "Master of Business Administration": "MBA",
  "Master of Business Administration (Banking & Finance)": "MBA BF",
  "Master of Commerce": "MCom",
  "Master of Computer Application": "MCA",
  "Master of Education (M.Ed.)": "M.Ed.",
  "Masters of Arts (Public Administration)": "MA PA",
  "Master’s Degree in Economics": "MDE",
  "Master’s Degree in Mathematics": "MDM",
  "Mechanical(ME)": "ME",
  "Mechatronics": "Mech",
  "Medical Electronics(ML)": "ML",
  "Microbiology": "Micro",
  "Mining": "Min",
  "Other": "Other",
  "P.G. Diploma in Environmental & Sustainable Development": "PGDESD",
  "PCM (Physics Chemistry Maths)": "PCM",
  "PMCS (Physics mathematics and Computer science)": "PMCS",
  "PME (Physics Maths Electronics)": "PME",
  "Polymer Technology": "Poly",
  "Post Graduate Diploma in Computer Application": "PGDCA",
  "Post Graduate Diploma in Environmental Studies": "PGDES",
  "Post Graduate Diploma in Library Automation and Networking": "PGDLAN",
  "Telecomm(TCE)": "TCE",
  "Textiles": "Text"
};

export function truncateText(text, maxLength) {
  if (text?.length > maxLength) {
      return text.substring(0, maxLength) + '...';
  } else {
      return text;
  }
}
export function formatToIndianCurrency(number) {
  const numberString = number?.toString();
  const lastThreeDigits = numberString?.slice(-3);
  const otherDigits = numberString?.slice(0, -3);
  
  const formattedNumber = otherDigits?.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + (otherDigits ? "," : "") + lastThreeDigits;
  
  return formattedNumber;
}
export function toProperCase(str) {
  if (typeof str !== 'string') {
    return str; 
  }

  return str
    .replace(/(?:^|\s|\.)(\S)/g, function(txt) {
      return txt?.toUpperCase();
    })
    .replace(/\b\w+\b/g, function(txt) {
      return txt?.charAt(0)?.toUpperCase() + txt?.substr(1)?.toLowerCase();
    });
}


export function formatString(input) {
  let formattedString = input.toLowerCase().replace(/_/g, ' ');
  formattedString = formattedString.replace(/\b\w/g, char => char.toUpperCase());
  return formattedString;
}