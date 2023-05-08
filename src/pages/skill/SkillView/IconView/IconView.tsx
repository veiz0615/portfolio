import { FC } from 'react'
import styles from './IconView.module.css'
import Html from '/assets/html-5-logo.svg'
import Css from '/assets/alternate-css3-logo.svg'
import JavaScript from '/assets/javascript-js.svg'
import TypeScript from '/assets/typescript.svg'
import ReactJs from '/assets/reactjs-line.svg'
import NextJs from '/assets/nextjs.svg'
import VueJs from '/assets/vuejs.svg'
import NodeJs from '/assets/nodejs.svg'
import Git from '/assets/git.svg'

type Props = {
  imageType:
    | 'html'
    | 'css'
    | 'javaScript'
    | 'typeScript'
    | 'react'
    | 'next'
    | 'vue'
    | 'node'
    | 'git'
  name: string
}

const IconView: FC<Props> = ({ imageType, name }) => {
  let imageDiv = null
  switch (imageType) {
    case 'html':
      imageDiv = <Html width="100%" height="100%" />
      break
    case 'css':
      imageDiv = <Css width="100%" height="100%" />
      break
    case 'javaScript':
      imageDiv = <JavaScript width="100%" height="100%" />
      break
    case 'typeScript':
      imageDiv = <TypeScript width="100%" height="100%" />
      break
    case 'react':
      imageDiv = <ReactJs width="100%" height="100%" />
      break
    case 'next':
      imageDiv = <NextJs width="100%" height="100%" />
      break
    case 'vue':
      imageDiv = <VueJs width="100%" height="100%" />
      break
    case 'node':
      imageDiv = <NodeJs width="100%" height="100%" />
      break
    case 'git':
      imageDiv = <Git width="100%" height="100%" />
      break
  }

  return (
    <div className={styles.root}>
      <div className={styles.image}>{imageDiv}</div>
      <div className={styles.name}>{name}</div>
    </div>
  )
}

export default IconView
