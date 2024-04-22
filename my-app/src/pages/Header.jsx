import React from 'react'
import '../styles/Header.css'
// import '../images'

function Header() {
    
  return (
    <div id="nav">
           <a href=""> logo</a>
           <div id="dashboard_set">
                <ul class="navbar_nav">
                <li className="navbar_ul_li"><a href='' style={{ color: '#1b1b20' }}>Home</a></li>
                 <li className="navbar_ul_li"><a href='' style={{color:'#1b1b20'}}>About Us</a></li>
                <li className="navbar_ul_li"><a href='' style={{color:'#1b1b20'}}>Services</a></li>
                <li className="navbar_ul_li"><a href='' style={{color:'#1b1b20'}}>Products</a></li>
                </ul>
                {/* <ul class="navbar_nav">
                <li class="navbar_ul_li"><a href='' style="color:#1b1b20">Book a Demo</a></li>
                <li class="vl"></li>
                <li class="navbar_ul_li"><a href='' style="color:#1b1b20">Sign in</a></li> */}
                
                {/* <li class="navbar_ul_li" id="Zbutton" ><a href='' style="color:#fff">Go to App</a></li>            */}
                {/* </ul> */}
            </div>

    </div>
  )
}

export default Header
