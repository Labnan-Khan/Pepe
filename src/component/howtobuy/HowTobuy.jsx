import React from 'react'
import './howtobuy.css'
import uniswap from './uniswap.jpeg'
import uniswap1 from './uniswap1.png'
import caw from './caw.jpeg'
import gse from './gse.jpeg'
import switch1 from './switch1.jpeg'


function HowTobuy() {
  return (
    <div className='htb' id="howToBuy">
      <h3>How to buy</h3>

      <div className='sec'>
        <img src={caw} alt="img" />
        <div className='secdiv2'>
            <h4>Create a wallet</h4>
            <p>download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.</p>
        </div>
      </div>

      <div className='sec'>
        <img src={gse} alt="img" />
        <div className='secdiv2'>
            <h4>Get some eth</h4>
            <p>have ETH in your wallet to switch to $PEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.</p>
        </div>
      </div>

      <div className='sec'>
        <img src={uniswap1} alt="img" />
        <div className='secdiv2'>
            <h4>Go to uniswap</h4>
            <p>connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.</p>
        </div>
      </div>

      <div className='sec'>
        <img src={switch1} alt="img" />
        <div className='secdiv2'>
            <h4>Switch eth for $pepe</h4>
            <p>switch ETH for $PEPE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</p>
        </div>
      </div>


    </div>
  )
}

export default HowTobuy
