'use client'

import SpeciesList from "@/app/components/SpeciesList";
import TradersList from "@/app/components/TradersList";
import ResetBlock from "@/app/components/ResetBlock";
import UnlockBuildingList from "@/app/components/UnlockBuildingList";
import BuildingCounters from "@/app/components/BuildingCounters";
import { Button } from "@mui/material";
import useBuildingStore from "@/app/stores/buildingStore";

export default function Home() {
  const year = new Date().getFullYear();
  const buildings = useBuildingStore((state) => state.buildings)
  const resetBuildings = useBuildingStore((state) => state.reset)
  return (
    <div className="p-4 relative w-full" style={{minHeight: "calc(100vh - 20px)"}}>
      <header className="fixed flex justify-between items-center w-screen -top-0 -left-0 py-2 pl-4 pr-8 bg-black z-10">
        <h1>Feeling Lucky Helper</h1>
        <div className="flex gap-2 items-center">
          <BuildingCounters />
          <ResetBlock />
        </div>
      </header>
      <main className={[
          'pt-10 flex flex-col gap-4'
        ].join(' ')}
        style={{minHeight: "calc(100vh - 60px)"}}
      >
        
        <SpeciesList />
        {/* <h2>Traders</h2> */}
        <div className={['flex flex-col gap-2 mt-4'].join(' ')}>
          <Button
            onClick={() => resetBuildings()}
            variant="outlined"
            color="error"
            className={buildings.length > 0 ? 'opacity-100' : 'opacity-0'}
          >Reset buildings</Button>
          <div className="flex gap-2 justify-between">
            <TradersList />
            <UnlockBuildingList />
          </div>
        </div>
      </main>
      <footer className="mt-auto self-end flex justify-between">
        <p>
          &copy;{year} Pierre &quot;Kobaru&quot; Tusseau
        </p>
        <p className="text-xs text-neutral-700 font-bold">
          Pictures, character names, and building names are not my property
        </p>
      </footer>
    </div>
  );
}
