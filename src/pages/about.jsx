import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/backdrop_1.jpg";
import { Footer } from "../components/footer";
// import {
//   Card,
//   CardHeader, 
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";

export default function About() {
  return (
    <div className="App font-family:league-spartan dark:bg-back-dark ">
      <div>
        <header className="App-header pt-5 justify-center">
          <ComplexNavbar />
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
    <div className="">
      <div className="w-1/2">
        <img src={backdrop}></img>
      </div>
      <div>
        
      </div>
    </div>
  );
}
