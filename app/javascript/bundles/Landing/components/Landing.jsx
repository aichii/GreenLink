import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import hills from './hills.png'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const sun = `https://image.flaticon.com/icons/svg/439/439842.svg`

export default class Landing extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={2} style={{ backgroundColor: '#BAE1EB' }}>
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#BAE1EB' }} />

        <ParallaxLayer offset={0.2} speed={-0.88} style={{ pointerEvents: 'none' }}>
          <img src={sun} style={{ width: '8%', marginLeft: '20%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.1} speed={.8} style={{ opacity: 0.3 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '65%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={0.8} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={0.5} style={{ opacity: 0.3 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.2} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.8} speed={-0.1} style={{ opacity: 0.5 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={0.4} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.20} speed={-0.99} style={{ justifyContent: 'center', display: 'flex', pointerEvents: 'none', zIndex: '2'}}>
          <img className="hills-landign" src={hills} style={{ width: '68vw' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={-0.08}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '3' }}
        >
        <div className="textWrapper">
          <h1>Welcome to GreenLink.</h1>
          <h2>
            The site dedicated to inspiring people to reduce their consumption of energy by competing in challenges with their friends and members of their community.
          </h2>
        </div> 
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.6}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '3' }}
        >
          <div className="textWrapper">
            <h1>The Energy</h1>
            <h2>
            Dirty energy pollutes our air and water, impacts our health, and contributes to climate change. Over the past 30 years, Toxics Action Center has helped communities all over the northeast retire dirty power plants responsibly, halt dangerous new fracked gas pipelines and win clean, local, renewable energy solutions.
            </h2>
          </div>
        </ParallaxLayer>
      </Parallax>
    )
  }
}

