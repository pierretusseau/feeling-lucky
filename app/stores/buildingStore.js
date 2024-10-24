import { create } from 'zustand'

const useBuildingStore = create((set) => ({
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
}))

export default useBuildingStore