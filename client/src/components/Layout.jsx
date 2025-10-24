import React from 'react'
import { AppBar, Toolbar, Typography, Container, Box, IconButton } from '@mui/material'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'

export default function Layout({ title = 'The Team', children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #eaeef4' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              px: 6,
              py: 1,
              borderRadius: 2,
            }}
          >
            <IconButton edge="start" color="inherit" sx={{ p: 0 }}>
              <SportsSoccerIcon />
            </IconButton>
            <Typography variant="h6" sx={{ m: 0 }}>{title}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>{children}</Container>
      <Box component="footer" sx={{ py: 3, textAlign: 'center', color: 'text.secondary' }}>
        <Typography variant="body2">© {new Date().getFullYear()} The Team</Typography>
      </Box>
    </Box>
  )
}

