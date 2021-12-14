/**
 * @file Game.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import { useLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import styles from './Game.module.css';

const Game = ({
  tagName: Tag = 'div',
  className = 'relative top-0 left-0 w-full h-full my-12',
  variant = 'default',
}) => {
  const parent = React.useRef();
  const canvas = React.useRef();
  const game = React.useRef();
  const Phaser = React.useMemo(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window.navigator !== 'undefined'
    ) {
      return require('phaser');
    }
  }, []);

  console.log('Phaser', Phaser);

  // import('phaser/src/phaser').then((mod) => {
  //   if (mod && !Phaser) {
  //     setPhaser(mod.default)
  //   }
  // })

  const preload = React.useCallback(() => {
    const g = game.current;
    const _this = g.scene.keys.default;
    console.log('preload ->  preloading assets...', _this);
    _this.load.setBaseURL('http://labs.phaser.io');
    _this.load.image('sky', 'assets/skies/space3.png');
    _this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    _this.load.image('red', 'assets/particles/red.png');
  }, []);

  const create = React.useCallback(e => {
    const g = game.current;
    const _this = g.scene.keys.default;
    console.log('create -> creating elements...', _this);
    _this.add.image(400, 300, 'sky');

    var particles = _this.add.particles('red');

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    var logo = _this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }, []);

  useLayoutEffect(() => {
    if (Phaser && parent.current && canvas.current) {
      console.log('parent.current', parent.current);
      console.log('canvas.current', canvas.current);
      const config = {
        type: Phaser.CANVAS,
        parent: parent.current,
        canvas: canvas.current,
        width: 800,
        height: 600,
        // pixelArt: true,
        autoCenter: true,
        backgroundColor: '#000000',
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 },
          },
        },
        scene: {
          preload: () => preload(),
          create: e => create(e),
        },
        // callbacks: {
        //   preBoot: (game) => console.log('preBoot -> ', game),
        //   postBoot: (game) => console.log('postBoot -> ', game),
        // }
      };
      game.current = new Phaser.Game(config);
      console.log('game', game.current);
    }
  }, [Phaser, create, preload, parent, canvas]);

  return Phaser ? (
    <Tag
      className={`${styles.game} ${styles[`game__${variant}`]} ${className}`}
      ref={parent}
    >
      <canvas ref={canvas} />
    </Tag>
  ) : null;
};

Game.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default Game;
