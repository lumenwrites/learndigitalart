import React, { Component } from 'react'
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class index extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="cta">
          <h1>Procreate Starter Pack</h1>
          <div className="tagline">
            Subscribe to the monthly updates on my tutorials and courses, and receive a
            Starter Pack that contains everything you need to get started with Digital Art!
          </div>

          <div className="image-wrapper">
            <div className="thumbnail" style={{ backgroundImage: "url('/img/starter-pack.jpg')" }}></div>
          </div>

          <form action="https://gumroad.com/follow_from_embed_form" method="post">
            <input name="seller_id" type="hidden" value="1188969138974" />
            <input name="email" placeholder="Enter your email..." type="email" />
            <button className="btn-cta" type="submit">Get your Starter Pack!</button>
          </form>


          <div className="skills">
            <div className="wrapper">
              <a href="https://www.youtube.com/channel/UC0d7swrV0DggjroNftDJFPg" className="skill">
                <div className="icon">
                  <FontAwesomeIcon icon={["fab", "youtube"]} />
                </div>

                <h2>YouTube Tutorials</h2>
              </a>

              <a href="https://www.instagram.com/learndigitalart/" className="skill">
                <div className="icon">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </div>

                <h2>Instagram</h2>
              </a>

              <a href="https://discord.gg/k5yaWKKY8A" className="skill">
                <div className="icon">
                  <FontAwesomeIcon icon={["fab", "discord"]} style={{ fontSize: "57px" }} />
                </div>

                <h2>Discord Community</h2>

              </a>
            </div>
          </div>

        </div>

        <SEO title="Learn Digital Art" description="Learn Digital Art" />
      </>
    )
  }
}
