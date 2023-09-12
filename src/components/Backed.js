import "../css/Backed.css"
import ethLogo from "../images/images__2_-removebg-preview.png"

const Backed = () => {
    return (
      <div>
        <div className="granted">
          <h2 style={{marginTop:"5vw" , position:"relative" , top:"2vw" , fontSize:"4vw" , letterSpacing:".5vw" , fontFamily:"gilroy"}}>Funding</h2>
          <div className="grants-section">
            <a href="https://ethereum.org/en/">
              <img height={100} style={{marginTop:"-1vw" , position:"relative" , top:"-1.5vw" , marginLeft:".8vw"}} src={ethLogo} />
            </a>
            <p style={{fontSize:"2vw"}}>
              Blufferfinance has received authorization for a grant from the
              Ethereum Foundation to develop Secure-Signer, an open-source tool
              aimed at bolstering the security of validator activities and
              averting slashing violations. More updates to come.
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default Backed;