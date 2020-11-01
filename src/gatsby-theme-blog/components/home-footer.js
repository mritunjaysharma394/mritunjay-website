import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
 © {new Date().getFullYear()} Mritunjay Sharma
    &emsp; &emsp;
    &emsp; &emsp;
    &emsp; &emsp; 
    &emsp; &emsp;
    &emsp; &emsp;

    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>
                {` `}&bull;{` `}
              </Fragment>
            )}
          </Fragment>
        ))
      : null}
      <br/>
  </footer>
)
export default Footer
