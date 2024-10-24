'use client'
import React from 'react'
import SpeciesBlock from "@/app/components/SpeciesBlock"
import Species from '@/app/static/species.json'
import useSpeciesStore from '@/app/stores/speciesStore';

function SpeciesList() {
  const species = useSpeciesStore((state) => state.species)
  return (
    <div>
      {species.length < 3 && <h2 className="text-3xl text-red-400 animate-pulse ml-4 uppercase font-bold">Don't forget to add all your species !</h2>}
      <div className="species flex gap-2 flex-wrap">
        {Species.map(spec => <SpeciesBlock
          spec={spec}
          key={spec.slug}
        />)}
      </div>
    </div>
  )
}

export default SpeciesList