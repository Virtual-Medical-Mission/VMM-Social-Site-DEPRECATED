//make a 404 error page
import backdrop from "../assets/img/backdrop_1.jpg";


import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";


export default function NoPage() {
    return(
        <div className="App font-family:league-spartan">
      <div>
        <header className="App-header pt-5 justify-center">
          <ComplexNavbar />
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="404 Page Not Found"
              caption="Proceed to Home Page"
              Banner={backdrop}
            />
          </div>
        </header>
        
      </div>
    </div>
    );
}
