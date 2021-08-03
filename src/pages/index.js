import { Link } from "gatsby"
import * as React from "react"

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
    text: "Skills & Experience",
    url: "experience",
    description:
      "Read more about what I've done",
    color: "#BC027F",
  },
  {
    text: "Projects",
    url: "projects",
    description:
      "Get a glimpse of some of the projects I am (or have been) working",
    color: "#8EB814",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Personal Site - Roberto Hassell</title>
      <h1 style={headingStyles}>
        Hi! My name is Roberto
        <br />
        <span style={headingAccentStyles}>— I work with Python, TypeScript and Dart! </span>
        <span role="img" aria-label="computer">
          🖥💻📱
        </span>
      </h1>
      <p style={paragraphStyles}>
        I have been working with Python for the past seven years, from APIs to automation scripts to machine learning experiments. 
        <span role="img" aria-label="smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <Link
                style={linkStyle}
                to={`${link.url}`}
              >
                {link.text}
              </Link>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>

    </main>
  )
}

export default IndexPage
