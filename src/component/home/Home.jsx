import React from 'react'
import './home.css'
import m from './m.jpeg'
import twitter from './twitter.jpeg'
import uniswap from './uniswap.jpeg'
import ups from './ups.png'
import ro from './ro.jpeg'
import bi from './bi.jpg'
import co from './co.jpeg'
import kr from './kr.jpeg'
import cr from './cr.jpeg'
import by from './by.jpeg'
import upbit from './upbit.jpeg'
import rev from './rev.jpg'
import pepeh from './pepeh.jpeg'
function Home() {
  return (
    <div className='home' id='home'>

      <div className='lefrig'>
        <div className='ridiv'>
            <div>
            <h3>Spepe</h3>
            <p>The most memeable memecoin in existence. The dogs have had their day, it’s time for Pepe to take reign.</p>
            
            </div>
            <div className='imgS'>
                <img src={twitter} alt="img" />
                <img src={uniswap} alt="img" />
                <img src={ups} alt="img" />
                <img src={m} alt="img" />
            </div>
        </div>

        <img className='pepehi' src={pepeh} alt="img" />
      </div>

      

      <div className='divB'>
        <button>robinhood <img src={ro} alt="img" /></button>
        <button>robinhood <img src={bi} alt="img" /></button>
        <button>robinhood <img src={co} alt="img" /></button>
        <button>robinhood <img src={kr} alt="img" /></button>
        <button>robinhood <img src={cr} alt="img" /></button>
        <button>robinhood <img src={by} alt="img" /></button>
        <button>robinhood <img src={upbit} alt="img" /></button>
        <button>robinhood <img src={rev} alt="img" /></button>
        <button>robinhood <img src={ups} alt="img" /></button>
      </div>

      <img className='pepehi2' src={pepeh} alt="img" />
      
    </div>
  )
}

export default Home
