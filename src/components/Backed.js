import "../css/Backed.css"
import jumpLogo from "../images/backer-jump-logo.png"
import arcanumLogo from "../images/backer-arcanum-logo.png"
import iotexLogo from "../images/backer-iotex-logo.png"
import ethLogo from "../images/eth-foundation.png"

const Backed = () => {
    return (
      <div>
        <div className="granted">
          <h2 style={{marginTop:"5vw" , position:"relative" , top:"2vw" , fontSize:"4vw" , letterSpacing:".5vw" , fontFamily:"gilroy"}}>Funding</h2>
          <div className="grants-section">
            <a href="https://ethereum.org/en/">
              <img height={70} style={{marginTop:"-1vw" , position:"relative" , top:"-1.5vw" , marginLeft:".8vw"}} src={ethLogo} />
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