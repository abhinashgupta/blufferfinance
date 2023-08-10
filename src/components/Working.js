import "../css/Working.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
const Working = () => {
    return (
         <div>
            <section className="working-section">
                <h1>How FinGuard Works</h1>
                <div className="working-card">
                <img src={img1}/>
                    <div>
                        <h3>Secure</h3>
                        <p className="working-section-p">FinGuard's Secure-Signer reduces the risk of slashable offenses to protect staked ETH, providing best-in-class security for validators.</p>
                    </div>
                    
                </div>
                <div className="working-card left">
                <img src={img2}/>
                    <div className="leftp">
                        <h3>Low Fees & Liquid</h3>
                        <p className="working-section-pleft">FinGuard's LST (pufETH) provides stakers with a convenient liquid token that accrues value. Holders benefit from shared execution rewards and low fees and can compound yield on DeFi platforms without effort or technical know-how.</p>
                    </div>
                    
                </div>
                <div className="working-card">
                <img src={img3}/>
                    <div>
                        <h3>Scalable</h3>
                        <p className="working-section-p">The low capital requirement (2 ETH) and permissionless participation allows the pool to scale quickly by a diverse NoOp set, without relying on governance.</p>
                    </div>
                    
                </div>
            </section>
    </div> 
    );
}
 
export default Working;