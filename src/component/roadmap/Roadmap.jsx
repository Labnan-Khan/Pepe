import React from 'react'
import './roadmap.css'
import mitasi from './mitasi.jpeg'
import pepeh from './pepeh.jpeg'
function Roadmap() {
  return (
    <div className='roadmap' id='roadmap'>
      <img className='ropi' src={mitasi} alt="img" />
      <div className='section'>
        <h4>roadmap</h4>
        <div className='section2'>
            <p>Phase 1: Meme</p>
            <p>Phase 2: Vibe and HODL</p>
            <p>Phase 3: Meme Takeover</p>
        </div>
      </div>
      <img className='ropi pepeh1' src={pepeh} alt="img" />
    </div>
  )
}

export default Roadmap
