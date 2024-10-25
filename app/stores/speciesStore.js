import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useSpeciesStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: 'flh-species', // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useSpeciesStore