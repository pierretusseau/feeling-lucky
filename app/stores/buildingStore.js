import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useBuildingStore = create(
  persist(
    (set) => ({
      buildings: [],
      add: (spec) => set(
        (state) => ({ buildings: [...state.buildings, spec] })
      ),
      remove: (spec) => set(
        (state) => {
          const newBuildings = state.buildings.filter(s => s.name !== spec.name)
          return { buildings: newBuildings }
        }
      ),
      reset: () => set({ buildings: [] }),
    }),
    {
      name: 'flh-buildings', // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)


export default useBuildingStore