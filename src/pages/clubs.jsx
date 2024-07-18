import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/backdrop_1.jpg";
import gwc from "../assets/img/gwc_outreach.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Footer } from "../components/footer";

export default function Clubs() {
  return (
    <div className="App font-family:league-spartan dark:bg-back-dark">
      <div>
        <header className="App-header pt-5 justify-center">
          <ComplexNavbar />
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="Featured Clubs"
              caption="Gearing up for the future!"
              Banner={backdrop}
            />
          </div>
        </header>
      </div>
      <GirlsWC />
    </div>
  );
}

function GirlsWC() {
  //   const data = [
  //     {
  //       label: "Mission",
  //       value: "mission",
  //       desc: `Our Girls Who Code club at Eleanor Roosevelt High School is dedicated to bridging the gender gap in technology through empowering young women to learn, innovate, and excel within the field of computer science.
  // \n Our mission reaches beyond just coding as we strive to redefine the stereotype of a programmer by showcasing and refining the talents of our members. Through coding projects, competitions, and community engagement, we strive to cultivate a supportive environment for our members where they can feel inspired to pursue their passions within computer science.
  // `,
  //     },
  //     {
  //       label: "Vision",
  //       value: "vision",
  //       desc: `Our vision is to create an environment both in our school and community where girls are not discouraged from pursuing their computer science passions, where diversity and inclusivity can thrive. `,
  //     },
  //   ];

  return (
    <div className="pt-10">
      <h1 className="flex justify-center text-3xl text-font-light dark:text-font-dark font-thisFont font-bold">
        Girls Who Code
      </h1>
      <div className="flex lg:flex-row lg:items-center justify-center lg:px-52 md:flex-col xxs:flex-col xxs:px-10 xxs:items-center md:items-center">
        <div className="w-3/4">
          <SimplyTab />
        </div>
        <div className="pt-10 w-3/4">
          <img
            src={gwc}
            className="h-96 w-full rounded-lg object-cover object-center border-color-dark border-4 dark:border-2"
          ></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function SimplyTab() {
  return (
    <div className="w-4/5">
      <div className="py-5">
        <h1 className="dark:text-font-dark font-semibold text-2xl">Mission</h1>
        <p className="dark:text-font-dark">
          Our Girls Who Code club at Eleanor Roosevelt High School is dedicated
          to bridging the gender gap in technology through empowering young
          women to learn, innovate, and excel within the field of computer
          science. Our mission reaches beyond just coding as we strive to
          redefine the stereotype of a programmer by showcasing and refining the
          talents of our members. Through coding projects, competitions, and
          community engagement, we strive to cultivate a supportive environment
          for our members where they can feel inspired to pursue their passions
          within computer science.
        </p>
      </div>

      <div className="py-5">
        <h1 className="dark:text-font-dark font-semibold text-2xl">Vision</h1>
        <p className="dark:text-font-dark">
          Our vision is to create an environment both in our school and
          community where girls are not discouraged from pursuing their computer
          science passions, where diversity and inclusivity can thrive.{" "}
        </p>
      </div>
    </div>
  );
}

// function SimpleTabs() {
//   const data = [
//     {
//       label: "Mission",
//       value: "mission",
//       desc: `Our Girls Who Code club at Eleanor Roosevelt High School is dedicated to bridging the gender gap in technology through empowering young women to learn, innovate, and excel within the field of computer science.
// \n Our mission reaches beyond just coding as we strive to redefine the stereotype of a programmer by showcasing and refining the talents of our members. Through coding projects, competitions, and community engagement, we strive to cultivate a supportive environment for our members where they can feel inspired to pursue their passions within computer science.
// `,
//     },
//     {
//       label: "Vision",
//       value: "vision",
//       desc: `Our vision is to create an environment both in our school and community where girls are not discouraged from pursuing their computer science passions, where diversity and inclusivity can thrive. `,
//     },
//   ];

//   return (
//     <Tabs value="mission" className="pr-10">
//       <TabsHeader className="">
//         {data.map(({ label, value }) => (
//           <Tab key={value} value={value}>
//             {label}
//           </Tab>
//         ))}
//       </TabsHeader>
//       <TabsBody className="pt-10">
//         {data.map(({ value, desc }) => (
//           <TabPanel key={value} value={value} className="py-0">
//             {desc}
//           </TabPanel>
//         ))}
//       </TabsBody>
//     </Tabs>
//   );
// }

// function VerticalTabs() {
//   const data = [
//     {
//       label: "Mission",
//       value: "mission",
//       desc: `Our Girls Who Code club at Eleanor Roosevelt High School is dedicated to bridging the gender gap in technology through empowering young women to learn, innovate, and excel within the field of computer science.
// \n Our mission reaches beyond just coding as we strive to redefine the stereotype of a programmer by showcasing and refining the talents of our members. Through coding projects, competitions, and community engagement, we strive to cultivate a supportive environment for our members where they can feel inspired to pursue their passions within computer science.
// `,
//     },
//     {
//       label: "Vision",
//       value: "vision",
//       desc: `Our vision is to create an environment both in our school and community where girls are not discouraged from pursuing their computer science passions, where diversity and inclusivity can thrive. `,
//     },
//   ];

//   return (
//     <Tabs value="mission" orientation="vertical">
//       <TabsHeader className="w-32">
//         {data.map(({ label, value }) => (
//           <Tab key={value} value={value}>
//             {label}
//           </Tab>
//         ))}
//       </TabsHeader>
//       <TabsBody>
//         {data.map(({ value, desc }) => (
//           <TabPanel key={value} value={value} className="py-0">
//             {desc}
//           </TabPanel>
//         ))}
//       </TabsBody>
//     </Tabs>
//   );
// }
