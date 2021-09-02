import { createGlobalStyle } from "styled-components";

import { sizes } from "./sizes";

export const GlobalStyles = createGlobalStyle`
  :root {
    --dark-blue: hsl(227, 30%, 18%);
    --medium-blue: hsl(227, 30%, 34%);
    --accent-blue-dark: hsl(226, 27%, 10%);
    --accent-blue: hsl(193, 91%, 56%);
    --accent-pink: hsl(300, 89%, 64%);
    --accent-purple: hsl(258, 67%, 60%);
    --dark-purple: hsl(258, 41%, 34%);
    --base-white: hsl(0, 0%, 97%);
    --text-white: hsl(226, 35%, 83%);
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--dark-blue);
    width: 100%;
    height: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--accent-blue);
  }

  body::-webkit-scrollbar-track {
    background: var(--medium-blue);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: var(--accent-blue) ;
    border-radius: 6px;
    border: none;
  }

  section {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: RobotoBold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1;
  }

  p {
    margin: 0;
    padding: 0;
    padding-bottom: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: var(--paragraph-font-size, 1.7rem);
    color: var(--paragraph-color, var(--text-white));
    line-height: 1.8;
    &:last-child {
      padding-bottom: 0;
    }
    ${sizes.aboveTablet} {
      font-size: 2rem;
    }
  }

  strong {
    font-weight: 700;
    color: #D564CD;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: inherit;
    color: var(---accent-blue);
    transition: color 300ms ease-in-out;
    ${sizes.aboveTablet} {
      font-size: 2rem;
    }
  }

  ul, ol {
    margin: 0;
    padding: 0 0 0 40px;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    gap: 40px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    list-style: none;
  }

  li {
    position: relative;
    font-size: var(--list-font-size, 1.7rem);
    line-height: 1.8;
    color: var(--list-color, var(--text-white));
    ${sizes.aboveTablet} {
      font-size: 2rem;
    }
  }

  button {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  label {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
