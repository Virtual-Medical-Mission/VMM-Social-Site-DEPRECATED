import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/backdrop_1.jpg";
import { Footer } from "../components/footer";
// import {
//   Card,
//   CardHeader, 
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";i

export default function About() {
  return (
    <div className="font-family:league-spartan dark:bg-back-dark">
      <div>
        <header className="App-header pt-5">
          <div className="w-full">
            <ComplexNavbar />
          </div>
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="About Virtual Medical Missions"
              caption=""
              Banner={backdrop}
            />
          </div>
        </header>
      </div>
      <BiCardSection />
      <Footer />
    </div>
  );
}


export function BiCardSection() {
  return (
    <div className="dark:text-font-dark text-font-light flex justify-center p-10">
      <div className="w-1/2">
          <p>
            Here in the U.S., we enjoy easy access to quality healthcare and medicines - most of us can take a short drive to a nearby clinic, hospital, or pharmacy and receive what we need (even if it is a bit pricey at times!). It can be easy to think that most people have this level of access to healthcare. 
            To the contrary, the World Health Organization reports that over half the world’s population does not have adequate access to quality healthcare.
          </p>
      </div>
      <div>
        
      </div>
    </div>
  );
}
