/**
 * @file Game.js
 */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const Phaser = dynamic(
  () => import('phaser').then((mod) => console.log('mod', mod)), 
  { 
    ssr: false ,
    loading: () => <p>Loading...</p> 
  }
)

import styles from './Game.module.css'

const Game = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
  } = props

  const [game, setGame] = useState()

  // useEffect(() => {
  //   console.log('browser', process.browser)
  //   const game = new Phaser.Game()
  //   console.log('game', game)
  //   setGame(game)
  // },[])
  
  console.log('Phaser', Phaser)

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
