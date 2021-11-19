import* as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return(
    <Layout pageHeading="Here is Home Page" pageTitle="Home Page">
        This what I want people to do on the home page.
        <StaticImage src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" alt="a pic"></StaticImage>
        <StaticImage src="../images/chicken.jpeg" alt="chicken" loading="lazy"></StaticImage>
    </Layout>
)
}

export default HomePage