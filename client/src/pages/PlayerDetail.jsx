import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { Paper, Box, Typography, Grid, Button, Stack } from '@mui/material'

export default function PlayerDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await api.get(`/api/player/${id}`)
        setPlayer(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [id])

  if (!player) return null

  const fields = [
    ['First Name', player.first_name],
    ['Last Name', player.last_name],
    ['Age', player.age],
    ['Jersey #', player.jersey_number],
    ['Club', player.soccer_club],
    ['Position', player.position_played]
  ]

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Player Details</Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
          <Button variant="contained" onClick={() => navigate(`/players/${id}/edit`)}>Edit</Button>
        </Stack>
      </Box>
      <Grid container spacing={2}>
        {fields.map(([label, value]) => (
          <Grid item xs={12} sm={6} md={4} key={label}>
            <Typography variant="overline" color="text.secondary">{label}</Typography>
            <Typography variant="h6">{value ?? '-'}</Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
