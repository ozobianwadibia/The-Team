import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0ea5e9' },
    secondary: { main: '#22c55e' },
    background: { default: '#f7f9fc', paper: '#ffffff' }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 10, paddingInline: 20 }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: { boxShadow: '0 10px 30px rgba(2, 6, 23, 0.06)' }
      }
    }
  }
})

export default theme
