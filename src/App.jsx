
import logo from "/images/commingSoon/Logo_Devext-removebg-preview 2.svg";

function App() {
  return (
    <div className="coming-soon-container">
      <div className="content">
        <div className="logo-section">
          <img src={logo} alt="DEVEXT Logo" className="logo" />
        </div>
        
        <div className="coming-soon-text">
          <h1>COMING SOON<span className="dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span></h1>
        </div>
      </div>
      
      <div className="caution-tapes">
        <div className="tape tape-1">
          <span>UNDER CONSTRUCTION</span>
        </div>
        <div className="tape tape-2">
          <span>UNDER CONSTRUCTION</span>
        </div>
        <div className="tape tape-3">
          <span>UNDER CONSTRUCTION</span>
        </div>
        <div className="tape tape-4">
          <span>UNDER CONSTRUCTION</span>
        </div>
        <div className="tape tape-5">
          <span>UNDER CONSTRUCTION</span>
        </div>
        <div className="tape tape-6">
          <span>UNDER CONSTRUCTION</span>
        </div>
      </div>
    </div>
  )
}

export default App
