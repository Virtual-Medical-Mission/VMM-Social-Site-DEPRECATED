
import {
  CardDefault
} from "@material-tailwind/react";

import research from "../assets/img/medical story.png";

import outreach from "../assets/img/vmm_images/image5_1.png";

export default function ActionItems() {
    return (
      <div className="flex flex-col">
        <h1 className="flex justify-center text-3xl p-2 pb-5 font-bold text-font-light dark:text-font-dark xxs:items-center">
          Our Work
        </h1>
        <div className="flex justify-center w-full">
          <div className="flex md:flex-row sm:flex-col">
            <div className="px-24 xxs:py-5 md:py-5 sm:py-5">
              <CardDefault
                header="Research"
                desc="Virtual Medical Missions all started with a dream that began in 2015, and has grown to become a reality today."
                dir="/about"
                timg={research}
              />
            </div>
            <div className="px-24 xxs:py-5 md:py-5 sm:py-5">
              <CardDefault
                header="Outreach"
                desc="Starting with Godo, Kenya, we hope to expand our services to other villages in Kenya, and then to the world."
                dir="/clubs"
                timg={outreach}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  