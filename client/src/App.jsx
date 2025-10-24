import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { Button, Stack, CssBaseline, IconButton, Tooltip } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Layout from './components/Layout'
import Roster from './pages/Roster'
import PlayerDetail from './pages/PlayerDetail'
import PlayerForm from './pages/PlayerForm'
import PlayerEdit from './pages/PlayerEdit'

export default function App() {
  const [mode, setMode] = React.useState(() => {
    try {
      return localStorage.getItem('themeMode') || 'light'
    } catch {
      return 'light'
    }
  })

  React.useEffect(() => {
    try {
      localStorage.setItem('themeMode', mode)
    } catch {}
  }, [mode])

  const theme = React.useMemo(() => {
    const palette = {
      mode,
      primary: { main: '#0ea5e9' },
      secondary: { main: '#22c55e' },
    }
    if (mode === 'light') {
      palette.background = { default: '#f7f9fc', paper: '#ffffff' }
      palette.text = { primary: 'rgba(0,0,0,0.87)', secondary: 'rgba(0,0,0,0.6)' }
    } else {
      palette.background = { default: '#000000', paper: '#000000' }
      palette.text = { primary: '#ffffff', secondary: 'rgba(255,255,255,0.7)' }
    }
    return createTheme({
      palette,
      shape: { borderRadius: 12 },
      typography: {
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        h4: { fontWeight: 700 },
        h6: { fontWeight: 600 },
      },
      components: {
        MuiButton: { styleOverrides: { root: { textTransform: 'none', borderRadius: 10, paddingInline: 20 } } },
        MuiPaper: { styleOverrides: { root: { boxShadow: '0 10px 30px rgba(2, 6, 23, 0.06)' } } },
      },
    })
  }, [mode])

  const toggleMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout title="US Soccer Team">
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Button component={Link} to="/" variant="contained">Roster</Button>
          <Button component={Link} to="/players/new" variant="outlined">Add Player</Button>
          <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
            <IconButton onClick={toggleMode} color="primary" aria-label="toggle color mode" sx={{ borderRadius: 0 }}>
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>
        </Stack>
        <Routes>
          <Route path="/" element={<Roster />} />
          <Route path="/players/new" element={<PlayerForm />} />
          <Route path="/players/:id" element={<PlayerDetail />} />
          <Route path="/players/:id/edit" element={<PlayerEdit />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

