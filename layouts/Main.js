import Head from "next/head";

import styled, { ThemeProvider } from "styled-components";
import { theme, hex2Rgba } from "../styles";

const Wrapper = styled.div`
  background-color: ${({ theme }) => hex2Rgba(theme.color.primaryLight, 0.1)};
  min-height: 100vh;
`;

const MainContent = styled.main`
  box-sizing: border-box;
  margin: 0 auto;

  display: grid;
  width: 100%;

  grid-template:
    "sidebar main" 100vh
    / minmax(400px, 20%) auto;
`;

export default ({ children, title = "This is the default title" }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Head>
        <title>{title}</title>
      </Head>

      <MainContent>{children}</MainContent>
    </Wrapper>
  </ThemeProvider>
);
