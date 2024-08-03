import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/backdrop_1.jpg";

export default function HistoryPage() {
  return (
    <div className="App font-family:league-spartan dark:bg-back-dark">
      <div>
        <header className="App-header pt-5 justify-center">
          <ComplexNavbar />
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="Our History"
              caption="🕊 Legacy of Healing"
              Banner={backdrop}
            />
          </div>
        </header>
      </div>
    </div>
  );
}
