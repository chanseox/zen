import React from 'react'
import '../styles/Home.css'
import PressToStart from '../components/PressToStart'

export default function Home () {
  return (
    <div className='home-page'>
      <div className='home-background' />
      <div className='start-button'>
        <PressToStart />
      </div>
      <div className='title-container'>
        <h1 className='title-message'>Let's Meditate</h1>
      </div>
    </div>
  )
}
