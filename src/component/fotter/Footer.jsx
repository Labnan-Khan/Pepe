import React from 'react'
import './footer.css'
import twitter from './twitter.jpg'
function Footer() {
  return (
    <div className='footer' id='footer'>

      <div className='up'>

        <h4>pepe</h4>
        <img src={twitter} alt="img" />
        <p>$pepe coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.</p>
        <p>$PEPE is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.</p>
      
      </div>


    </div>
  )
}

export default Footer
