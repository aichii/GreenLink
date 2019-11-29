import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import hills from './hills.png'
import second from './second.png'
import elSmall from './smallel.png'
import elBig from './bigel.png'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const sun = `https://image.flaticon.com/icons/svg/439/439842.svg`

export default class Landing extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={2} style={{ backgroundColor: '#BAE1EB' }}>
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#BAE1EB' }} />

        <ParallaxLayer offset={-0.70} speed={-0.99} style={{ pointerEvents: 'none' }}>
          <img className="small-el" src={elSmall} style={{ width: '15%', marginLeft: '31.3%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={-0.9} style={{ pointerEvents: 'none' }}>
          <img src={sun} style={{ width: '8%', marginLeft: '10%' }} />
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

        <ParallaxLayer offset={1.20} speed={-0.99} style={{ pointerEvents: 'none', zIndex: '2'}}>
          <img src={hills} style={{ width: '100%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={-0.93} speed={-0.99} style={{ pointerEvents: 'none'}}>
          <img className="big-el" src={elBig} style={{ width: '18%', marginLeft: '55.2%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.25} speed={-0.99} style={{ pointerEvents: 'none'}}>
          <img src={second} style={{ width: '73%', marginLeft: '25%' }} />
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
            <h2>
              What is typography? I do not know how to make this look good or know what should go here, but we can figure that out now. I'm too lazy to google some lorum ipsum, I'd rather just type some meaningless jargon I guess.  
            </h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.1}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '3' }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          <div className="textWrapper">
            <h2>
              What is typography? I do not know how to make this look good or know what should go here, but we can figure that out now. I'm too lazy to google some lorum ipsum, I'd rather just type some meaningless jargon I guess.  
            </h2>
          </div>
        </ParallaxLayer>
      </Parallax>
    )
  }
}

