import "./header.css"

function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>

            </div>
            <img src={process.env.PUBLIC_URL + "/images/tumblr_533d9307d59fd03ba29d6c4064f640d3_501e7e2f_1280.jpg"} alt="" className="headerImage" />
        </div>
    )
}

export default Header
