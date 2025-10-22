import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { Button, Stack } from '@mui/material'
import Layout from './components/Layout'
import Roster from './pages/Roster'
import PlayerDetail from './pages/PlayerDetail'
import PlayerForm from './pages/PlayerForm'
import PlayerEdit from './pages/PlayerEdit'

export default function App() {
  return (
    <Layout title="US Soccer Team">
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Button component={Link} to="/" variant="contained">Roster</Button>
        <Button component={Link} to="/players/new" variant="outlined">Add Player</Button>
      </Stack>
      <Routes>
        <Route path="/" element={<Roster />} />
        <Route path="/players/new" element={<PlayerForm />} />
        <Route path="/players/:id" element={<PlayerDetail />} />
        <Route path="/players/:id/edit" element={<PlayerEdit />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
