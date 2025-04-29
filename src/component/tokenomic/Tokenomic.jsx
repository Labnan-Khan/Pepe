import React from 'react'
import './tokenomic.css'
import rodm from './rodm.jpeg'
function Tokenomic() {
  return (
    <div className='tokenomic' id='tokenomic'>
      <h3>TOKENOMICS</h3>
      <div className='sec'>
        <div className='sec2'>
            <h4>Token Supply: 420,690,000,000,000</h4>
            <div>
                <p>No Taxes, No Bullshit. It<sup>,</sup>s that simple.</p>
                <p>LP tokens are burnt, and contract ownership is renounced. </p>
            </div>
        </div>
        <img src={rodm} alt="img" />
      </div>
    </div>
  )
}

export default Tokenomic
