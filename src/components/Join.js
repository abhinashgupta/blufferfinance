import "../css/Join.css";
import join1 from "../images/logo 3.png"
import join2 from "../images/join2.jpg"
const Join = () => {
    return (
      <div className="Join">
        <h1>Become a member of Blufferfinance</h1>
        <section className="join-section">
          <div className="section1">
            <img src={join1} />
            <div className="img-text white">
              <h3>Become a Blufferfinance</h3>
              <p>
                Ready to earn?
              </p>
              <button className="join-btn1">Stake ETH (Coming Soon)</button>
            </div>
          </div>
          <div className="section2">
            <img src={join2} />
            <div className="img-text">
              <h3>Become a Node Operator</h3>
              <p>Ready to decentralize Etherium?</p>
              <button className="join-btn1 btn2">
                Setting Up a Node (Coming Soon)
              </button>
            </div>
          </div>
        </section>
      </div>
    );
}
 
export default Join;