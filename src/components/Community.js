import "../css/Community.css"
import twitter from "../images/twitter.png"
import medium from "../images/medium.png"
import discord from "../images/discord.png"
import telegram from "../images/telegram.png"
const Community = () => {
    return (
      <div>
        <div className="community">
          <h1>Become a Part of Our Community</h1>
          <div style={{ padding: "2vw 7vw" }} className="community-logos">
            <div className="logo-card">
              <a
                href="https://twitter.com/Puffer_Finance"
                className="logo-card"
              >
                <img src={twitter} />
                <p>Twitter</p>
              </a>
            </div>
            <div className="logo-card">
              <a href="https://medium.com/@puffer.fi" className="logo-card">
                <img src={medium} />
                <p>Medium</p>
              </a>
            </div>
            <div className="logo-card">
              <a href="https://t.me/puffer_fi" className="logo-card">
                <img src={telegram} />
                <p>Telegram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Community;