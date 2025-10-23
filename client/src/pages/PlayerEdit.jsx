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
  const [errors, setErrors] = useState({})

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
    const v = name === 'position_played' ? value.toUpperCase() : value
    setForm((f) => ({ ...f, [name]: v }))
  }

  const validate = () => {
    const errs = {}
    const isInt = (n) => Number.isInteger(n)
    const ageNum = form.age === '' ? NaN : Number(form.age)
    const jerseyNum = form.jersey_number === '' ? NaN : Number(form.jersey_number)
    const pos = (form.position_played || '').toUpperCase()

    if (!form.first_name.trim()) errs.first_name = 'First name is required'
    if (!form.last_name.trim()) errs.last_name = 'Last name is required'
    if (!isInt(ageNum) || ageNum < 18) errs.age = 'Age must be an integer >= 18'
    if (!isInt(jerseyNum) || jerseyNum < 1) errs.jersey_number = 'Jersey number must be an integer >= 1'
    if (pos.length !== 2 || !/^[A-Z]{2}$/.test(pos)) {
      errs.position_played = 'Must be 2 uppercase letters'
    } else if (!['GK','DF','MF','FW'].includes(pos)) {
      errs.position_played = 'Must be one of GK, DF, MF, FW'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    try {
      const payload = {
        ...form,
        age: Number(form.age),
        jersey_number: Number(form.jersey_number),
        position_played: (form.position_played || '').toUpperCase()
      }
      await api.put(`/api/player/${id}`, payload)
      navigate(`/players/${id}`)
    } catch (e) {
      if (e.response && e.response.status === 400 && e.response.data && e.response.data.details) {
        const apiErrs = {}
        e.response.data.details.forEach((d) => { apiErrs[d.field] = d.message })
        setErrors(apiErrs)
      } else {
        console.error(e)
      }
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
            <TextField label="First Name" name="first_name" value={form.first_name} onChange={handleChange} fullWidth required error={!!errors.first_name} helperText={errors.first_name} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" name="last_name" value={form.last_name} onChange={handleChange} fullWidth required error={!!errors.last_name} helperText={errors.last_name} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Age" name="age" type="number" value={form.age} onChange={handleChange} fullWidth required error={!!errors.age} helperText={errors.age} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Jersey #" name="jersey_number" type="number" value={form.jersey_number} onChange={handleChange} fullWidth required error={!!errors.jersey_number} helperText={errors.jersey_number} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Club" name="soccer_club" value={form.soccer_club} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Position" name="position_played" value={form.position_played} onChange={handleChange} fullWidth required inputProps={{ maxLength: 2 }} error={!!errors.position_played} helperText={errors.position_played || 'GK, DF, MF, FW'} />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}
