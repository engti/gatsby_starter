import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
    window.dataLayer.push({
        event: "contact view",
        pageType: "contact"
    });
    return(
        <Layout pageHeading="About Page" pageTitle="About Us">
            This what I want people to do on the about page.
        </Layout>
    )
}

export default AboutPage