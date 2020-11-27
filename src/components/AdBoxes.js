import React, { Component } from 'react'

import procreatePack from '../../static/img/starter-pack.jpg'
import premiumCourses from '../../content/review/digital-art-learning-resources/cgma-master-academy.jpg'
import youtubeChannels from '../../content/review/digital-art-learning-resources/00-proko-gesture-feature-art.jpg'

var AdBox = ({ title, description, href, image }) => {
  return (
    <a className="post-box" href={href} target="_blank">
      <div className="image-wrapper">
        <div className="thumbnail" style={{ background: `url('${image}')` }} />
      </div>
      <section className="description">
        <div className="title">{title}</div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </section>
    </a>
  )
}

class SignUp extends Component {
	render() {
		return (
			<div className="post-grid">
				<AdBox
					title="Download Procreate Starter Pack"
					description="Download Starter Pack that contains everything you need to get started with Digital Art!"
					href="/"
					image={procreatePack} />
				<AdBox
					title="Best Premium Digital Art Courses"
					description="Discover the premium online digital art courses that are worth paying for"
					href="/review/top-premium-digital-art-courses"
					image={premiumCourses} />
				<AdBox
					title="Best free Digital Art Youtube Channels"
					description="Discover the best youtube channels that will help you get better at digital art!"
					href="/review/best-digital-art-youtube-channels"
					image={youtubeChannels} />				
			</div>
		)
	}
}

export default SignUp
