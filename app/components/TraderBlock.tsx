
import React from 'react'
import Image from 'next/image'
import FormGroup from '@mui/material/FormGroup';
import BuildingBlock from '@/app/components/BuildingBlock';
import { slugify } from '@/app/utils/utils'
import useBuildingStore from '@/app/stores/buildingStore';

function TraderBlock(
  {
    trader,
    buildings
  }:{
    trader: Trader,
    buildings: Building[]
}) {
  const Buildings = useBuildingStore((state) => state.buildings)
  const buildingsWithoutcamps = buildings.filter((b: Building) => b.category === 'food' || b.category === 'industry')
  const numberOfBuildingUnlocked = Buildings
    .filter((b: Building) => b.category === 'food' || b.category === 'industry')
    .filter((b: Building) => b.vendors.some(v => v === trader.slug)).length
  const isBlockComplete = numberOfBuildingUnlocked === buildingsWithoutcamps.length && buildingsWithoutcamps.length > 0

  return (
    <div className={[
      isBlockComplete ? "bg-[rgba(0,255,155,0.1)]" : "bg-[rgba(255,255,255,0.1)]",
      "rounded p-2",
      "relative overflow-hidden",
      "w-[15%] min-w-[200px]",
    ].join(' ')}>
      <div>
        <div className="text-xs font-bold mb-2 text-center bg-black p-2 pr-4 pl-16 h-[50px] flex flex-col items-center justify-center relative overflow-hidden">
          <Image
            className="absolute -bottom-6 -left-7 opacity-75 scale-75"
            src={`/images/traders/${trader.slug}.png`}
            width={100}
            height={100}
            alt={`Picture of ${trader.name}`}
          />
          <p>{trader.name}</p>
        </div>
        <FormGroup>
          {buildings.map(building => <BuildingBlock
            key={`${trader.slug}-${slugify(building.name)}`}
            building={building}
          />)}
        </FormGroup>
      </div>
    </div>
  )
}

export default TraderBlock