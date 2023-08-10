import "../css/About.css";
import "../css/animation.css";
import fish3 from "../images/fish3.png"
const About = () => {
    return ( 
        <div className="about-box">
            <div className="about">
                
            {/* <img src={left} className="left-img"/> */}
            <img src={fish3} className="fish3-img"/>
           
            <div className="about-info">
                <h2>About FinGuard</h2>
                <h6>FinGuard is defining a new industry standard for secure validator operations with the primary objective of preserving decentralization.
                </h6>
                <br></br><br></br>
                <p>FinGuard's Anti-Slashing technologies are designed to minimize the chance of slashing events. Our Secure-Signer technology is released as a public good to help protect solo stakers and the wider staking industry from correlated slashing penalties.</p>
                <br></br>
                <p>Our Secure-Aggregator technology provides the foundation to build a secure, scalable, and performant liquid staking protocol. Allowing permissionless and capital-efficient Node Operator (NoOp) participation allows anyone to join the FinGuardPool to help preserve Ethereum's decentralization.</p>
                <br></br>
                <p>At FinGuard, we're always thinking ahead and seeking new ways to advance the scalability of Ethereum. Our Anti-Slashing technologies reduce the risk of slashing events and pave the way for future safe and secure re-staking services. These services can be seamlessly integrated with upcoming technologies like ZK-2FA, further improving the security and efficiency of layer-2 solutions. We're committed to maintaining the core values of Ethereum while providing innovative and sustainable solutions that benefit the entire community.</p>
            </div>
        </div>
        </div>
     );
}
 
export default About;