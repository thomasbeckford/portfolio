import React from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Theme } from '@/themes/index'

function GlobalStyle(): JSX.Element {
  const theme = useTheme<Theme>() // Passing types to useTheme function

  return (
    <Global
      styles={css`
        * {
          @font-face {
            font-family: 'Bloc';
            src: url('./BlocRegular.ttf');
          }
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html,
        body {
          background-color: ${theme.color.background};
          padding: 0;
          margin: 0;
          font-family: 'Bloc', 'Poppins', sans-serif;
          color: ${theme.color.primary};
          height: 100%;
        }
        ul li {
          list-style-type: none;
          padding: 10px;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        img {
          width: 100%;
        }
        a:after {
          background: none repeat scroll 0 0 transparent;
          bottom: -5px;
          content: '';
          display: block;
          height: 5px;
          left: 50%;
          position: absolute;
          background: blue;
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
          width: 0;
        }
        a:hover:after {
          width: 100%;
          left: 0%;
        }
        a {
          position: relative;
        }
      `}
    />
  )
}

export default GlobalStyle
