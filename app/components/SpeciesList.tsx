
import React from 'react'
import SpeciesBlock from "@/app/components/SpeciesBlock"
import Species from '@/app/static/species.json'
import useSpeciesStore from '@/app/stores/speciesStore';
import { Button } from '@mui/material';

function SpeciesList() {
  const species = useSpeciesStore((state) => state.species)
  const reset = useSpeciesStore((state) => state.reset)
  return (
    <div className="mt-4">
      {species.length < 3 && <h2 className="text-3xl text-red-400 animate-pulse ml-4 uppercase font-bold">
        Don&lsquo;t forget to add all your species !
      </h2>}
      <div className="flex gap-4">
        <div className="species flex gap-2 flex-wrap">
          {Species.map(spec => <SpeciesBlock
            spec={spec}
            key={spec.slug}
          />)}
        </div>
        {species.length > 1 && <Button
          onClick={() => reset()}
          variant="outlined"
          color="error"
        >Reset species</Button>}
      </div>
    </div>
  )
}

export default SpeciesList