/**
 * @file Game.js
 */
import React, { useEffect, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import styles from './Game.module.css'


const Game = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
  } = props
  const [phaser, setPhaser] = useState()

  import('phaser/src/phaser').then((mod) => { 
    if (mod && !phaser) {
      setPhaser(mod.default)
    } 
  })

  useEffect(()=>{
    if (phaser){
      const game = new phaser.Game()
      console.log('game', game)
    }
  }, [phaser])

  return (
    <Tag className={`${styles.game} ${styles[`game__${variant}`]} ${className}`}>
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
  tagName: 'div',
  className: '',
  variant: 'default',
  children: '',
}

export default Game
