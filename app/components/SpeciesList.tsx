'use client'
import React from 'react'
import SpeciesBlock from "@/app/components/SpeciesBlock"
import Species from '@/app/static/species.json'

function SpeciesList() {
  return (
    <div className="species flex gap-2">
      {Species.map(spec => <SpeciesBlock
        spec={spec}
        key={spec.slug}
      />)}
    </div>
  )
}

export default SpeciesList