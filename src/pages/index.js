import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Section from "../components/section"
import Project from "../components/project"

export default function Home() {

  return (
  	<div>
  		<Header />
  		<Section title={'About'}>
  			<p>This is an about me section</p>
		</Section>
  		<Section title={'Projects'}>
  			<p>This is the projects section</p>
  			<Project title={"Born to Be Brave"} image={"/images/btbb-screenshot.jpg"}>
  			description goes here
  			</Project>
  			<Project title={"True Girl"} image={"/images/truegirl-screenshot.jpg"}>
  			description alalalaal</Project>
  			<Project title={"Yellow Wood Yoga"} image={"/images/ywy-screenshot.jpg"}>
  			sdgasdgsadg</Project>
  			<Project title={"National Food Sales"} image={"/images/nfs-screenshot.jpg"}>
  			sadgasdgsad</Project>

		</Section>
  		<Section title={'Contact'}>
  			<p>This is the contact form section</p>
		</Section>
		<Footer />
	</div>
  	)
}
