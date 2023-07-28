import { Crono } from "./Components/modality/Crono";
import { Modality } from "./Components/modality/Modality";

const urlParams = new URLSearchParams(window.location.search)
const pag = urlParams.get("pag")
const modality = urlParams.get("modality")
export const App = () => {
  if (pag == null || pag == "") {
    return (
      <>
      <nav className="navbar navbar-dark bg-dark text-white p-md-3 "><a href="App" className="text-decoration-none text-white">CliqueFast</a>     
      </nav>
      <div className="mt-5" style={{textAlign:'center'}}>
        <Modality/>
      </div>
      
      </>
    );
  } else {
    return (
      <>
      <nav className="navbar navbar-dark bg-dark text-white p-md-3 "><a href="App" className="text-decoration-none text-white">CliqueFast</a>     
      </nav>
      <div className="mt-5" style={{textAlign:'center'}}>
        <Crono/>
      </div>
      
      </>
    );
  }
}
