import { create } from 'zustand'

const useSpeciesStore = create((set) => ({
  species: [{name: "Humans", slug: "humans"}],
  addSpecies: (spec) => set(
    (state) => ({ species: [...state.species, spec] })
  ),
  removeSpecies: (spec) => set(
    (state) => {
      const newSpecies = state.species.filter(s => s.slug !== spec.slug)
      return { species: newSpecies }
    }
  ),
  reset: () => set({ species: [{name: "Humans", slug: "humans"}] }),
}))

export default useSpeciesStore