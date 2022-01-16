import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import EnhancedCreator from './containers/Creator'
import GlobalStyle from './Styles/grobalStyles'

const theme = createMuiTheme({
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
      <EnhancedCreator />
    </MuiThemeProvider>
  )
}
export default App
