import "../css/About.css";
import "../css/animation.css";
import fish3 from "../images/WhatsApp_Image_2023-09-07_at_1.16.45_PM-removebg-preview.png"
const About = () => {
    return (
      <div className="about-box" id="about">
        <div className="about">
          {/* <img src={left} className="left-img"/> */}
          <img src={fish3} className="fish3-img" />

          <div className="about-info">
            <h2>Regarding Blufferfinance</h2>
            <h6>
              Blufferfinance is setting a new benchmark in secure validator
              procedures, primarily aimed at maintaining decentralization.
            </h6>
            <br></br>
            <br></br>
            <p>
              Blufferfinance's anti-penalty measures aim to reduce the
              likelihood of slashing incidents. Our Secure-Signer solution is
              made publicly available to safeguard individual stakers as well as
              the broader staking sector from synchronized slashing fines.
            </p>
            <br></br>
            <p>
              Our Secure-Aggregator technology lays the groundwork for
              constructing a safe, scalable, and efficient liquid staking
              system. By enabling unrestricted and capital-effective Node
              Operator (NoOp) involvement, anyone can join the
              BlufferfinancePool to contribute to maintaining the
              decentralization of Ethereum.
            </p>
            <br></br>
            <p>
              At Blufferfinance, we're constantly innovating to enhance
              Ethereum's scalability. Our Anti-Slashing measures lessen the
              likelihood of slashing incidents, setting the stage for the safe
              re-staking services of the future. These services can easily align
              with emerging technologies such as ZK-2FA, further boosting
              layer-2 security and efficiency. We remain dedicated to upholding
              Ethereum's fundamental principles while delivering creative and
              long-lasting solutions for the collective benefit of the
              community.
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default About;