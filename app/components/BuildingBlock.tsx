import React from 'react'
import useBuildingStore from '@/app/stores/buildingStore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function BuildingBlock({
  building,
}: {
  building: Building
}) {
  const Buildings = useBuildingStore((state) => state.buildings)
  const { remove, add } = useBuildingStore()
  const hasBeenChecked = Buildings.some((b: Building) => b.name === building.name)
  const handleCheck = () => {
    if (hasBeenChecked) remove(building)
    else add(building)
  }
  const classes = [
    (building.category !== 'food' && building.category !== 'industry') && 'opacity-25',
    building.category === 'food' && 'text-green-400',
    building.category === 'industry' && 'text-orange-400',
    'mx-2'
  ].join(' ')
  return (
    <div className={classes}>
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={Buildings.some((b: Building) => b.name === building.name)}
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label={building.name}
      />
    </div>
  )
}

export default BuildingBlock