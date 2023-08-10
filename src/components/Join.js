import "../css/Join.css";
import join1 from "../images/join01.jpg"
import join2 from "../images/join2.jpg"
const Join = () => {
    return ( 
        <div className="Join">
            <h1>Join FinGuaurd</h1>
            <section className="join-section">
                <div className="section1">
                <img src={join1}/>
                <div className="img-text white">
                    <h3>Become a Node Operator</h3>
                    <p>Ready to decentralize Ethereum? Here's how to operate a FinGuard Minipool:</p>
                    <button className="join-btn1">Coming Soon</button>
                </div>
                </div>
                <div className="section2">
                <img src={join2}/>
                <div className="img-text">
                    <h3>Become a Staker</h3>
                    <p>Ready to earn? Stake your ETH on FinGuard:</p>
                    <button className="join-btn1 btn2" >Coming Soon</button>
                </div>
                </div>
                
            </section>
        </div>
     );
}
 
export default Join;