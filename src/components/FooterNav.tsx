import React from 'react'

const FooterNav = () => {
  return (
    <nav>
        <ul>
            <li className="footer-nav-link"><a href="https://www.linkedin.com/in/jameslevoir/" target="blank"><img src="src/assets/SVG/linkedin.svg" /></a></li>
            <li className="footer-nav-link"><a href="https://github.com/jameslevoir" target="blank"><img src="src/assets/SVG/github.svg" /></a></li>
            <li className="footer-nav-link"><a href="mailto:jameslevoir@gmail.com"><img src="src/assets/SVG/email.svg" /></a></li>
        </ul>
    </nav>
  )
}

export default FooterNav