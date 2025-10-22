import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { Paper, Box, Typography, Grid, TextField, Button, Stack } from '@mui/material'

export default function PlayerEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    age: '',
    jersey_number: '',
    soccer_club: '',
    position_played: ''
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await api.get(`/api/player/${id}`)
        setForm({
          first_name: data.first_name || '',
          last_name: data.last_name || '',
          age: data.age ?? '',
          jersey_number: data.jersey_number ?? '',
          soccer_club: data.soccer_club || '',
          position_played: data.position_played || ''
        })
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = {
        ...form,
        age: form.age !== '' ? Number(form.age) : null,
        jersey_number: form.jersey_number !== '' ? Number(form.jersey_number) : null
      }
      await api.put(`/api/player/${id}`, payload)
      navigate(`/players/${id}`)
    } catch (e) {
      console.error(e)
    }
  }

  if (loading) return null

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Edit Player</Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={() => navigate(-1)}>Cancel</Button>
          <Button variant="contained" onClick={onSubmit}>Save</Button>
        </Stack>
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
        </Grid>
      </Box>
    </Paper>
  )
}
