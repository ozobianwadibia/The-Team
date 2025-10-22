import React from 'react'
import { AppBar, Toolbar, Typography, Container, Box, IconButton } from '@mui/material'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'

export default function Layout({ title = 'The Team', children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #eaeef4' }}>
        <Toolbar>
          <IconButton edge="start" color="primary" sx={{ mr: 1 }}>
            <SportsSoccerIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>{title}</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>{children}</Container>
      <Box component="footer" sx={{ py: 3, textAlign: 'center', color: 'text.secondary' }}>
        <Typography variant="body2">© {new Date().getFullYear()} The Team</Typography>
      </Box>
    </Box>
  )
}
