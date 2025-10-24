import React from 'react'
import { useEffect, useState } from 'react'
import { Paper, Box, Typography, IconButton, Stack, Tooltip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { api } from '../services/api'

export default function Roster() {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchPlayers = async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/api/player')
      setRows(data || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const deletePlayer = async (id) => {
    try {
      await api.delete(`/api/player/${id}`)
      fetchPlayers()
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => { fetchPlayers() }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'first_name', headerName: 'First Name', flex: 1 },
    { field: 'last_name', headerName: 'Last Name', flex: 1 },
    { field: 'age', headerName: 'Age', width: 90, type: 'number' },
    { field: 'jersey_number', headerName: 'Jersey #', width: 110, type: 'number' },
    { field: 'soccer_club', headerName: 'Club', flex: 1 },
    { field: 'position_played', headerName: 'Position', flex: 1 },
    {
      field: 'actions', headerName: 'Actions', sortable: false, width: 200,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Tooltip title="View">
            <IconButton color="primary" onClick={() => navigate(`/players/${params.row.id}`)}>
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton color="info" onClick={() => navigate(`/players/${params.row.id}/edit`)}>
              <EditOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton color="error" onClick={() => deletePlayer(params.row.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      )
    }
  ]

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4">Roster</Typography>
        <Typography color="text.secondary">Manage players of selected US Soccer Teams</Typography>
      </Box>
      <div style={{ height: 520, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} loading={loading} disableRowSelectionOnClick />
      </div>
    </Paper>
  )
}
