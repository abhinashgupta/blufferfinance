import "../css/Backed.css"
import jumpLogo from "../images/backer-jump-logo.png"
import arcanumLogo from "../images/backer-arcanum-logo.png"
import iotexLogo from "../images/backer-iotex-logo.png"
import ethLogo from "../images/eth-foundation.png"

const Backed = () => {
    return ( <div>
        <div className="backed-by">
            <h2>Backed by</h2>
            <div className="bg"></div>
            <div className="logos">
                <a href="https://jumpcrypto.com/">
                <img src={jumpLogo}/>
                </a>
                <a href="https://www.arcanum.capital/">
                <img src={arcanumLogo}/>
                </a>
                <a href="https://jumpcrypto.com/">
                <img src={iotexLogo}/>
                </a>
            </div>
        </div>

        <div className="granted">
            <h2>Grants</h2>
            <div className="grants-section">
                <a href="https://ethereum.org/en/">
                    <img src={ethLogo}/>
                </a>
                <p>FinGuard is approved to recieve a grant from the Ethereum Foundation to build Secure-Signer, an open source software that helps secure validator operations and prevents slashable offenses. Stay tuned for more.</p>
            </div>
        </div>
    </div> );
}
 
export default Backed;