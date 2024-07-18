import ERHS from "../assets/img/mustangs.png";
import eSTEM from "../assets/img/eSTEM_acad.png";
import VMM from "../assets/img/VMM Logo.png";

export default function Associates() {
  return (
    <div className="">
      <h1 className="flex justify-center text-3xl font-semibold pt-10 dark:text-font-dark">
        In Association With
      </h1>
      <div className="flex justify-center items-center lg:flex-row md:flex-col xxs:flex-col xxs:justify-between ">
        <img
          src={ERHS}
          alt="ERHS"
          className="h-44 px-5 sm:py-5 xxs:py-5 "
          px-10
        />
        <img src={eSTEM} alt="eSTEM" className=" h-40 px-10 sm:py-5 xxs:py-5" />
        <img src={VMM} alt="VMM" className="px-5 h-28" />
      </div>
    </div>
  );
}
