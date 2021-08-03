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
            <title>Personal Site - Roberto Hassell</title>
            <h1 style={headingStyles}>
                Skills & Experience
            </h1>
            <p><Link to="/">&laquo; Go back</Link></p>
            <p style={paragraphStyles}>
                Here you will find a brief resume of my skills and work 
                <span role="img" aria-label="Sunglasses smiley emoji">
                    😎
                </span>
            </p>


            <p style={paragraphStyles}>
                In the past years I have been working as QA Enginer, focused on test and process automation. My main goal is to have a strong, maintanable product, using the best and most updated practices in the industry! I’ve also worked with some of the tecnologies mentioned below.
            </p>


            <h1>Skills</h1>

            <p>My go-to programming language is Python, but I’m also fluent in Dart and some low level languages, like C.

                Here’s a detailed explanation if you want to explore:
            </p>

            <h2>Python 🐍 </h2>

            <p>
                I mostly have used Python for process and test automation, using libraries like Appium and Selenium, and frameworks like Robot Framework. I’ve done analysis with Pandas, Numpy and Scikit-Learn, mainly to explore perfomance testing results and gaining insigths from data. Also, I've developed REST APIs with Flask.

                I like to use Python to glue many different technologies 🤓 (get a CSV from here, model it there, output a JSON, serve it as an API… you get it).

            </p>

            <h2>Dart and Flutter 💙</h2>

            <p>
                Since I knew the principles behind Flutter (compilation to native, performant code, running at 60 fps) I fell in love with it. I’ve developed medium-sized applications that interact with web services and use the native capacities of the platform: contacts, file management, permanent storage with SQlite and so on. I’ve tried to learn the best practices of the industry, such as using BLoC state management, dependency injection and widget and unit testing.
            </p>

            <h2>Other tools 🛠</h2>

            <p>

                I’ve used and practiced with languages like JavaScript / TypeScript, and libraries like React.

                I love automating some compilation processes using Jenkins and bringing there some Bash code.

                I studied Electronic Engineering, so naturally I love working with microprocessors and even writing some Assembly code!
            </p>


            <h2>How can I help you?</h2>
            <p>
                Currently, I’m open to freelance or any position in the languages and technologies mentioned above. I’m open to test automation opportunities only if you truly believe in it and think it will help you and your organization. But I’m also I good learner and I love learning new things
            </p>
        </main>
    )
}

export default IndexPage
