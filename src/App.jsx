import { useState } from 'react'
import './App.css'
import Header from './component/header/header'
import Button from './component/button/button'
import heroImage from './assets/svg/hero.svg'
function App() {
  return (
    <>
      <Header />

      <section className='hero'>
        <div className="container">
          <div className="hero__block">
            <div className="hero__about">
              <h2 className="hero__title">Bring everyone
                together to build
                better products.</h2>
              <p className="hero__sub_title">
                Manage makes it simple for software teams
                to plan day-to-day tasks while keeping the
                larger team goals in view.
              </p>
              <Button />

            </div>
            <div className="hero__image">
              <img src={heroImage} alt="hero image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
