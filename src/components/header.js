import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//import logoImage from "../../static/logo.png"

const Header = () => {
	return (<StaticQuery
		query={graphql`
	      query {
					logo: file(relativePath: { eq: "images/logo.png" }) {
						name
						childImageSharp {
							fixed(width: 32) {
								...GatsbyImageSharpFixed_withWebp
							}
						}
					}
	      }
	    `}
		render={data => (
			<header>
				<div className="wrapper">
					<Link to="/" className="logo">
						{/* <img src={logoImage} />  */}
						<Img className="logo-image"
							alt={data.logo.name}
							fixed={data.logo.childImageSharp.fixed} />
						Learn Digital Art
		      </Link>
					<div className="right">

						{/* <Link to="/posts" className="btn">
							Posts
			  		</Link> */}

						{/* <div className="dropdown">
							<div className="menu-handle btn">Resources</div>
							<div className="menu left">
								<Link to="/writers-room" className="item btn">
									Writer's Room
				  			</Link>
							</div>
						</div> */}

					</div>
					{/* End right */}
					<div className="clearfix" />
				</div>
				{/* End main wrapper */}
			</header>
		)}
	/>
	)
}

export default Header

