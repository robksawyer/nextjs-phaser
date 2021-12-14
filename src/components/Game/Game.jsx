/**
 * @file Game.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'

import styles from './Game.module.css'

const Game = ({ 
  tagName: Tag = 'canvas', 
  className = 'absolute top-0 left-0 w-full h-full bg-red-300', 
  variant = 'default'
}) => {
  const ref = React.useRef()
  const game = React.useRef()
  const Phaser = React.useMemo(() => {
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      return require('phaser')
    }
  },[]);

  console.log('Phaser', Phaser)

  // import('phaser/src/phaser').then((mod) => {
  //   if (mod && !Phaser) {
  //     setPhaser(mod.default)
  //   }
  // })

  const preload = React.useCallback(() => {
    const g = game.current
    const { load } = g.scene.keys.default
    console.log('preload ->  preloading assets...', this)
    // const g = game.current
    // g.load.setBaseURL('http://labs.phaser.io');
    // g.load.image('sky', 'assets/skies/space3.png');
    // g.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // g.load.image('red', 'assets/particles/red.png');
  }, [])

  const create = React.useCallback((e) => {
    console.log('create -> creating elements...', e)
    // this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0)
    // this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0)

    // const logo = this.add.image(400, 70, 'logo')

    // this.tweens.add({
    //   targets: logo,
    //   y: 350,
    //   duration: 1500,
    //   ease: 'Sine.inOut',
    //   yoyo: true,
    //   repeat: -1,
    // })
  }, [])

  if (Phaser) {
    const config = {
      type: Phaser.AUTO,
      parent: 'phaser-game',
      pixelArt: true,
      autoCenter: true,
      backgroundColor: '#000000',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 },
        },
      },
      scene: {
        preload: (e) => preload(e),
        create: (e) => create(e),
      },
    }
    game.current = new Phaser.Game(config)
    console.log('game', game.current)
  }

  return Phaser ? (
    <Tag
      className={`${styles.game} ${styles[`game__${variant}`]} ${className}`}
      
    >
     <canvas id="phaser-game" className="relative w-auto h-auto" />
    </Tag>
  ): null
}

Game.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default Game
