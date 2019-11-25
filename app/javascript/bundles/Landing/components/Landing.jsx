import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styles from './landing.module.css'
import hills from './hills.png'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const balloon = `https://image.flaticon.com/icons/svg/2258/2258708.svg`
const sun = `https://image.flaticon.com/icons/svg/439/439842.svg`
const house = `https://image.flaticon.com/icons/svg/1352/1352938.svg`
const solar = `https://image.flaticon.com/icons/svg/649/649853.svg`

export default class Landing extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={2} style={{ backgroundColor: '#BAE1EB' }}>
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#BAE1EB' }} />

        <ParallaxLayer offset={0.15} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={balloon} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.05} speed={-0.9} style={{ pointerEvents: 'none' }}>
          <img src={sun} style={{ width: '15%', marginLeft: '10%' }} />
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

        <ParallaxLayer offset={1.2} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.55} speed={-0.99} style={{ pointerEvents: 'none', zIndex: '2' }}>
          <img src={hills} style={{ width: '100%'}} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.55} speed={-0.99} style={{ pointerEvents: 'none'}}>
          <img src={solar} style={{ width: '5%', marginLeft: '18%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.55} speed={-0.99} style={{ pointerEvents: 'none'}}>
          <img src={house} style={{ width: '17%', marginLeft: '18%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={-0.04}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '3' }}
        >
        <div className={styles.textWrapper}>
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
          <div className={styles.textWrapper}>
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
          <div className={styles.textWrapper}>
            <h2>
              What is typography? I do not know how to make this look good or know what should go here, but we can figure that out now. I'm too lazy to google some lorum ipsum, I'd rather just type some meaningless jargon I guess.  
            </h2>
          </div>
        </ParallaxLayer>
      </Parallax>
    )
  }
}
