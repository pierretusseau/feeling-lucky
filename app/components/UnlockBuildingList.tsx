

import React from 'react'
import Buildings from '@/app/static/buildings.json'
import BuildingBlock from '@/app/components/BuildingBlock'
import useSpeciesStore from '@/app/stores/speciesStore'
import useBuildingStore from '@/app/stores/buildingStore'
import { slugify } from '@/app/utils/utils'
import Image from 'next/image'

function UnlockBuildingList() {
  const species = useSpeciesStore((state) => state.species)
  const buildings = useBuildingStore((state) => state.buildings)
    .filter((b: Building) => b.vendors.length === 0)
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
  const foodBuildings = buildingsWithoutCamps.filter((b: Building) => b.category === 'food')
  const industryBuildings = buildingsWithoutCamps.filter((b: Building) => b.category === 'industry')
  const unlockedFoodBuilding = buildings.filter((b: Building) => b.category === 'food')
  const unlockedIndustryBuilding = buildings.filter((b: Building) => b.category === 'industry')
  return (
    <div>
      <div className="flex gap-2">
        <div className={[
          'w-1/2 p-2',
          unlockedFoodBuilding.length === foodBuildings.length ? "bg-[rgba(0,255,155,0.1)]" : "bg-[rgba(255,255,255,0.1)]"
        ].join(' ')}>
          <h3 className="relative overflow-hidden pl-12 text-xs font-bold mb-2 text-center bg-black p-2 h-12 flex flex-col items-center justify-center rounded">
            <Image
              className="absolute -bottom-7 -left-9 opacity-75 scale-75"
              src={`/images/icons/food.png`}
              width={100}
              height={100}
              alt={`Icon of food production buildings`}
            />
            Food production
          </h3>
          {foodBuildings.map((building: Building) => <BuildingBlock
            key={slugify(building.name)}
            building={building}
          />)}
        </div>
        <div className={[
          'w-1/2 p-2',
          unlockedIndustryBuilding.length === industryBuildings.length ? "bg-[rgba(0,255,155,0.1)]" : "bg-[rgba(255,255,255,0.1)]"
        ].join(' ')}>
          <h3 className="relative overflow-hidden pl-12 text-xs font-bold mb-2 text-center bg-black p-2 h-12 flex flex-col items-center justify-center rounded">
            <Image
              className="absolute -bottom-7 -left-9 opacity-75 scale-75"
              src={`/images/icons/industry.png`}
              width={100}
              height={100}
              alt={`Icon of industry buildings`}
            />
            Industry
          </h3>
          {industryBuildings.map((building: Building) => <BuildingBlock
            key={slugify(building.name)}
            building={building}
          />)}
        </div>
      </div>
    </div>
  )
}

export default UnlockBuildingList