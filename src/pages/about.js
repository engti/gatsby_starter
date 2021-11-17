import * as React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
    return(
        <main>
            <title>About Page</title>
            <h1>Welcome to my about page</h1>
            <p>This is my about page</p>
            <Link to="/">
                Index Page
            </Link>
        </main>
    )
}

export default AboutPage