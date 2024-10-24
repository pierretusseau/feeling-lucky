
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useSpeciesStore from '@/app/stores/speciesStore';

function SpeciesBlock(
  {
    spec
  }:{
    spec: Spec
}) {
  const { species, addSpecies, removeSpecies } = useSpeciesStore()
  const hasBeenChecked = species.some((s: Spec) => s.slug === spec.slug)

  const handleCheck = () => {
    if (hasBeenChecked) removeSpecies(spec)
    else addSpecies(spec)
  }

  return (
    <div className="bg-[rgba(255,255,255,0.1)] rounded p-1">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={species.some((s: Spec) => s.slug === spec.slug)}
              onChange={handleCheck}
              inputProps={{ 'aria-label': 'controlled' }}
              disabled={!hasBeenChecked && species.length >= 3}
            />
          }
          label={spec.name}
        />
      </FormGroup>
    </div>
  )
}

export default SpeciesBlock