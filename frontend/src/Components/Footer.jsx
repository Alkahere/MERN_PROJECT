import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>EVENTEASE</h1>
          <p>Events and Weddings</p>

        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your Email address to recieve updates
            from us!</p>
      
        </div>
      </div>
    </footer>
  )
}

export default Footer