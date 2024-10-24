'use client'
import React from 'react'
import Button from '@mui/material/Button';

import useSpeciesStore from '@/app/stores/speciesStore';
import useBuildingStore from '@/app/stores/buildingStore';

function ResetBlock() {
  const {reset: resetSpecies} = useSpeciesStore()
  const {reset: resetBuildings} = useBuildingStore()
  return (
    <Button
      variant="outlined"
      color="error"
      onClick={() => {
        resetSpecies()
        resetBuildings()
      }}
    >Reset</Button>
  )
}

export default ResetBlock