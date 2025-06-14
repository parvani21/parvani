import React from 'react'
import "../Style/Footer.css"

const Footer = () => {
  return (
    <div className="footer-content">
        <p>© {new Date().getFullYear()} MySite. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
  )
}

export default Footer
