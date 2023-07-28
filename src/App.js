import { Modality } from "./Components/modality/Modality";


export const App = () => {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark text-white p-md-3 "><a href="#" className="text-decoration-none text-white">CliqueFast</a>     
    </nav>
    <div className="mt-5" style={{textAlign:'center'}}>
      <Modality/>
    </div>
    
    </>
  );
}
