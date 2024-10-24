import styles from "./page.module.css";

import SpeciesList from "@/app/components/SpeciesList";
import TradersList from "@/app/components/TradersList";
import ResetBlock from "@/app/components/ResetBlock";
import UnlockBuildingList from "@/app/components/UnlockBuildingList";
import BuildingCounters from "@/app/components/BuildingCounters";

export default function Home() {
  return (
    <div className="p-4 relative">
      <header className="fixed flex justify-between items-center w-screen -top-0 -left-0 py-2 pl-4 pr-8 bg-black z-10">
        <h1>Feeling Lucky Helper</h1>
        <div className="flex gap-2 items-center">
          <BuildingCounters />
          <ResetBlock />
        </div>
      </header>
      <main className={[
        'pt-20'
      ].join(' ')}>
        <h2>Species you have in this game</h2>
        <SpeciesList />
        <h2>Traders</h2>
        <div className="flex">
          <TradersList />
          <UnlockBuildingList />
        </div>
      </main>
      <footer className={styles.footer}>
        &copy;Pierre &quot;Kobaru&quot; Tusseau
      </footer>
    </div>
  );
}
