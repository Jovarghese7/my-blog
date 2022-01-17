import "./topbar.css";

function TopBar() {
  return (
     
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-whatsapp-square"></i>
          <i className="topIcon fab fa-facebook-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem"> HOME</li>
            <li className="topListItem"> SERVICES</li>
            <li className="topListItem"> ABOUT</li>
            <li className="topListItem"> CONTACT</li>
            <li className="topListItem"> LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImage"
            src="https://wallsdesk.com/wp-content/uploads/2018/03/Pictures-of-Elk.jpg"
            alt=""
          />
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
   
  );
}

export default TopBar;
