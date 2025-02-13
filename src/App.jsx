import { useState } from 'react'
import './App.css'
import Header from './component/header/header'
import Button from './component/button/button'
import heroImage from './assets/svg/hero.svg'
import AboutItem from './component/aboutItem/aboutItem'
import person1 from './assets/image/person1.png'
import Person from './component/person/person'
import Footer from './component/footer/footer'
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

      <section className='about'>
        <div className="container">
          <div className="about__block">
            <div className="about__title_block">
              <h2 className="about__title">What’s different about Manage?</h2>
              <p className="about__sub_title">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
            </div>
            <ul className="about__list">
              <li className="about__item">
                <AboutItem button="01" title="Track company-wide progress"
                  subTitle="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again." /></li>
              <li className="about__item">
                <AboutItem button="02" title="Advanced built-in reports"
                  subTitle="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed." />
              </li>
              <li className="about__item">
                <AboutItem button="03" title="Everything you need in one place"
                  subTitle="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution." />
              </li>
            </ul>
          </div>
        </div>

      </section>

      <section className="person">
        <div className="container">
          <h2 className="person__title">
            What they’ve said
          </h2>
          <ul className="person__list">
            <li className="person__item">
              <Person img={person1} name="Anisha Li"
                title="Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" />
            </li>
            <li className="person__item">
              <Person img={person1} name="Ali Bravo"
                title="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”" />
            </li>
          </ul>
          <div className='person__button'>
            <Button />
          </div>
        </div>
      </section>

      <section className="work">
        <div className="container">
          <div className="work__block">
            <h1 className="work__title">Simplify how your team <br/>works today.</h1>
            <Button />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
