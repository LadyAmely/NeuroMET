
import Navbar from "@/app/Components/Layouts/Navbar";
import Registration from "@/app/Pages/Registration";
import Program from "@/app/Pages/Program";
import Contact from "@/app/Pages/Contact";
import Footer from "@/app/Components/Layouts/Footer";
import Header from "@/app/Components/Layouts/Header";
import Archives from "@/app/Pages/Archives";
import "@/app/CSS/global.css";

export default function Home() {
  return (
      <div>
          <Navbar/>
          <div style={{padding: '20px'}}>
              <Header/>
              <div id="program">
                  <Program/>
              </div>
              <div id="seminar">
                  <Archives/>
              </div>
              <div id="registration">
              <Registration/>
              </div>
              <div id="contact">
                  <Contact/>
              </div>
          </div>
          <Footer/>

      </div>
  );
}
