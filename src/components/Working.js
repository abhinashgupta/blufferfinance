import "../css/Working.css";
import img1 from "../images/img1.png";
import img2 from "../images/new logo 1 (2).png";
import img3 from "../images/img3.png";
const Working = () => {
    return (
      <div>
        <section className="working-section">
          <h1>The Functioning of Blufferfinance</h1>
          <div className="working-card">
            <img src={img1} />
            <div>
              <h3>Protected</h3>
              <p className="working-section-p">
                Blufferfinance's Secure-Signer minimizes the chances of
                slashable incidents, safeguarding staked ETH and ensuring
                top-tier security for validators.
              </p>
            </div>
          </div>
          <div className="working-card left">
            <img src={img2} />
            <div className="leftp">
              <h3>Affordable Costs and Liquidity</h3>
              <p className="working-section-pleft">
                Blufferfinance's Liquid Staking Token (LST), also known as
                pufETH, offers stakers an accessible liquid asset that
                appreciates in value. Owners enjoy collective earnings rewards
                and minimal fees while effortlessly compounding yields on DeFi
                platforms, without requiring technical expertise.
              </p>
            </div>
          </div>
          <div className="working-card">
            <img src={img3} />
            <div>
              <h3>Capable of Scaling</h3>
              <p className="working-section-p">
                The minimal capital threshold of 2 ETH and open entry policy
                enable the pool to expand rapidly through a diverse group of
                Node Operators (NoOps), without dependence on governance
                measures.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
}
 
export default Working;