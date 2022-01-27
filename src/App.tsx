import React from 'react'
import { createTheme, MuiThemeProvider } from '@material-ui/core'
import GlobalStyle from './Styles/grobalStyles'
import Creator from './components/page/Creator'

const theme = createTheme({
  typography: {
    "fontFamily": "\"Zen Kaku Gothic New\", \"sans-serif\"",
    button: {
      textTransform: "none"
    },

  }
})
const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <Creator />
    </MuiThemeProvider>
  )
}
export default App
