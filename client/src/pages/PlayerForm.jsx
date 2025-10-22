import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { Paper, Box, Typography, Grid, TextField, Button } from '@mui/material'

export default function PlayerForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    age: '',
    jersey_number: '',
    soccer_club: '',
    position_played: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = {
        ...form,
        age: form.age ? Number(form.age) : null,
        jersey_number: form.jersey_number ? Number(form.jersey_number) : null
      }
      await api.post('/api/player', payload)
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4">Add Player</Typography>
      </Box>
      <Box component="form" onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" name="first_name" value={form.first_name} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" name="last_name" value={form.last_name} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Age" name="age" type="number" value={form.age} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Jersey #" name="jersey_number" type="number" value={form.jersey_number} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Club" name="soccer_club" value={form.soccer_club} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Position" name="position_played" value={form.position_played} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">Save</Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}
