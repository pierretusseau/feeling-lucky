'use client'
import React from 'react'
import TraderBlock from "@/app/components/TraderBlock"
import Traders from '@/app/static/vendors.json'
import Buildings from '@/app/static/buildings.json'

function TradersList() {
  const filteredTraders = Traders.filter(t => !t.ignore)
  const regularTraders = filteredTraders.filter((t: Trader) => t.type === "regular")
  const gladeTraders = filteredTraders.filter((t: Trader) => t.type === "glade")
  return (
    <div className="traders flex flex-col gap-2">
      {/* <h3>Regular traders</h3> */}
      <div className="flex gap-2 flex-wrap">
        {regularTraders.map((trader: Trader) => {
          const traderBuildings = Buildings.filter((building: Building) => building.vendors.some(vendor => vendor === trader.slug))
          return <TraderBlock
            trader={trader}
            buildings={traderBuildings}
            key={trader.slug}
          />})}
      </div>
      {/* <h3>Glade traders</h3> */}
      <div className="flex gap-2 flex-wrap">
        {gladeTraders.map((trader: Trader) => {
          const traderBuildings = Buildings.filter((building: Building) => building.vendors.some(vendor => vendor === trader.slug))
          return <TraderBlock
            trader={trader}
            buildings={traderBuildings}
            key={trader.slug}
          />})}
      </div>
    </div>
  )
}

export default TradersList