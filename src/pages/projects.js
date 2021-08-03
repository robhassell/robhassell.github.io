import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}
const headingAccentStyles = {
    color: "#663399",
}
const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}
const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
}
const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
}

const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
}

const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    marginBottom: 24,
}

const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
}

const docLink = {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
    color: "#8954A8",
}

const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
}

// data
const links = [
    {
        text: "Reference Guides",
        url: "https://www.gatsbyjs.com/docs/reference/",
        description:
            "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
        color: "#BC027F",
    },
    {
        text: "Plugin Library",
        url: "https://www.gatsbyjs.com/plugins",
        description:
            "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
        color: "#8EB814",
    },
]

// markup
const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <title>Projects - Roberto Hassell</title>
            <h1 style={headingStyles}>
                Projects
            </h1>
            <p><Link to="/">&laquo; Go back</Link></p>
            <p style={paragraphStyles}>
                Here you will some of my projects 
                <span role="img" aria-label="notebook emoji">
                    📓
                </span>
            </p>
            <h1>Preditiva</h1>
            <p>
                Preditiva was the winner of the Panama's first Artificial Intelligence (IAckaton 2019 - get the news from <a href="https://aig.gob.pa/iackaton-panama-promueve-la-inteligencia-artificial-en-beneficio-de-los-servicios-del-estado/" target="_blank">here</a> and <a href="https://ciudaddelsaber.org/prensa/iackaton-panama-promueve-la-inteligencia-artificial-en-beneficio-de-los-servicios-del-estado/" target="_blank">here</a>).
            </p>
            <p>
                The system was designed to allow the user to log in and train a neural network with some input
                parameters in order to generate a model that could later be used to get some predictions.
            </p>
            <p>
                Some technologies:
                <br/>
                <ul>
                    <li>Python with Keras, Tensorflow and Scikit Learn</li>
                    <li>Flask for building web services</li>
                    <li>React.js with Node and Webpack for the website</li>
                    <li>Docker for containers</li>
                </ul>
            </p>
        </main>
    )
}

export default IndexPage
