

import React from 'react'
import useSpeciesStore from '@/app/stores/speciesStore'
import useBuildingStore from '@/app/stores/buildingStore'
import Buildings from '@/app/static/buildings.json'

function BuildingCounters() {
  const species = useSpeciesStore((state) => state.species)
  const buildings = useBuildingStore((state) => state.buildings)
  const buildingsWithoutCamps = Buildings
    .filter((b: Building) => b.category === 'food' || b.category === 'industry')
    .filter((b: Building) => b.vendors.length === 0)
    .filter((b: Building) => {
      if (b.ignore) return false
      if (b.requires) {
        if (species.some((s: Spec) => s.slug === b.requires)) return true
        return false
      }
      return true
    })
  const totalTraderBuildings = Buildings.filter((b: Building) => b.vendors.length > 0)
  const foodBuildings = buildings.filter((b: Building) => b.category === 'food').length
  const industryBuildings = buildings.filter((b: Building) => b.category === 'industry').length
  const totalFoodBuildings = [...buildingsWithoutCamps, ...totalTraderBuildings]
    .filter((b: Building) => b.category === 'food')
    .length 
  const totalIndustryBuildings = [...buildingsWithoutCamps, ...totalTraderBuildings]
    .filter((b: Building) => b.category === 'industry')
    .length
  return (
    <div className="flex gap-2 items-center">
      {foodBuildings >= totalFoodBuildings && industryBuildings >= totalIndustryBuildings && <div className="animate-pulse font-bold text-xl">LAUNCH EXPEDITIONS !!</div>}
      <div className="bg-green-400 py-1 px-4 rounded text-black font-bold text-sm h-9 flex items-center uppercase">Food {foodBuildings} / {totalFoodBuildings}</div>
      <div className="bg-orange-400 py-1 px-4 rounded text-black font-bold text-sm h-9 flex items-center uppercase">Industry {industryBuildings} / {totalIndustryBuildings}</div>
    </div>
  )
}

export default BuildingCounters