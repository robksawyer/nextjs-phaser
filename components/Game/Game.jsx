/**
 * @file Game.js
 */
import React, { useEffect, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import styles from './Game.module.css'

const Game = (props) => {
  const { tagName: Tag, className, variant, children } = props
  const [Phaser, setPhaser] = useState()

  import('phaser/src/phaser').then((mod) => {
    if (mod && !Phaser) {
      setPhaser(mod.default)
    }
  })

  const preload = (game) => {
    console.log('game', game)
    console.log('Game: Preloading assets...')
    this.load.setBaseURL('http://labs.phaser.io')
    // this.load.image('logo', '/assets/png/phaser3-logo.png')
    // this.load.glsl('bundle', '/assets/glsl/plasma-bundle.glsl.js')
    // this.load.glsl('stars', '/assets/glsl/starfields.glsl.js')
  }

  const create = () => {
    console.log('Game: Creating elements...')
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
  }

  if (Phaser) {
    const config = {
      type: Phaser.AUTO,
      parent: 'phaser-parent',
      pixelArt: true,
      backgroundColor: '#000000',
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 },
        },
      },
      scene: {
        preload: preload.bind(preload),
        create: create.bind(create),
      },
    }
    const game = new Phaser.Game(config)

    console.log('game', game)
  }

  return (
    <Tag
      id="phaser-parent"
      className={`${styles.game} ${styles[`game__${variant}`]} ${className}`}
    >
      {children}
    </Tag>
  )
}

Game.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

Game.defaultProps = {
  tagName: 'canvas',
  className: '',
  variant: 'default',
  children: '',
}

export default Game
