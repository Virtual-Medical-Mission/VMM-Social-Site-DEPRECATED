import React from "react";
import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/backdrop_1.jpg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Footer } from "../components/footer";

export default function FAQs() {
  return (
    <div className="App font-family:league-spartan dark:bg-back-dark flex flex-col justify-center">
      <div>
        <header className="App-header pt-5">
          <ComplexNavbar />
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="Frequently Asked Questions"
              caption="Here "
              Banner={backdrop}
            />
          </div>
        </header>
      </div>

      <div className="flex flex-col justify-center items-center pt-12">
          <AccordionCustomIcon />
      </div>
      
      <Footer />
    </div>
  );
}


function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 

  const QAs = [
    {
      question: "What is Telemedicine?",
      answer: "Telemedicine is the practice of providing healthcare services remotely using technology. Without requiring in-person visits, it enables the diagnosis, treatment, and patient monitoring of patients. It provides a flexible and convenient method for delivering healthcare, increasing access to medical services."
    },
    {
      question: "How do patients access telemedicine services in underserved areas?",
      answer: "Telemedicine is the practice of providing healthcare services remotely using technology. Without requiring in-person visits, it enables the diagnosis, treatment, and patient monitoring of patients. It provides a flexible and convenient method for delivering healthcare, increasing access to medical services."
    },
    {
      question: "What are your plans for future expansion and growth in reaching more underserved communities?",
      answer: "Once we have successfully addressed and assisted those in need in Godo, Kenya, our next objective is to extend our services to nearby towns, countries, and hopefully globally. This expansion will take place once the volume of e-visits becomes manageable, ensuring that we can maintain the quality and effectiveness of our healthcare delivery."
    },
    {
      question: "What services does your organization provide through telemedicine?",
      answer: "Our organization seeks to achieve equal access to high-quality healthcare while improving healthcare access and results for undeveloped countries by offering direct and indirect access to medical advice and care via computer technology."
    },
    {
      question: "What kind of healthcare professionals are involved in telemedicine consultations?",
      answer: "Our goal is to have an abundance of physicians, nurse practitioners, physician assistants, respiratory therapists, and nurses involved in the process of telemedicine consultations."
    },
    {
      question: "How do you address connectivity issues or limited internet access in underserved regions?",
      answer: "By incorporating technologies such as Wi-Fi, solar power generators, batteries, and utilizing programs such as Starlink, we are committed to addressing connectivity issues and ensuring that individuals in underserved regions have access to quality telemedicine services."
    },
    {
      question: "How to donate or become a donor?",
      answer: "You can use the donate buttons in the menu bar and footer. All donations made in the United States are tax-deductible. You can also donate through the link: http://vmmhealthcare.org/donate"
    }
  ]
  return (
    <>
      {QAs.map((QA, index) => (
        <Accordion open={open === index + 1} icon={<Icon id={index + 1} open={open} />} className="w-1/2 flex flex-col justify-center">
          <AccordionHeader onClick={() => handleOpen(index + 1)} className="dark:text-white dark:hover:text-gray-600">{QA.question}</AccordionHeader>
          <AccordionBody className="dark:text-white">{QA.answer}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
