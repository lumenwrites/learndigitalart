import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class SignUp extends Component {
	render() {
		return (
			<div className="mailing-list">
				Subscribe to the monthly updates on our tutorials and courses:
				<form action="https://gumroad.com/follow_from_embed_form" method="post">
					<input name="seller_id" type="hidden" value="1188969138974" />
					<input name="email" placeholder="Enter your email..." type="email" />
					<button className="btn-subscribe" type="submit">Subscribe</button>
					<a className="btn-square" href="https://www.youtube.com/channel/UC0d7swrV0DggjroNftDJFPg">
						<FontAwesomeIcon icon={["fab", "youtube"]} />
					</a>
					<a className="btn-square" href="https://www.instagram.com/learndigitalart">
						<FontAwesomeIcon icon={["fab", "instagram"]} />
					</a>
					<div className="clearfix" />
				</form>

			</div>
		)
	}
}

export default SignUp
