import { create } from 'zustand'

const store = create((set) => ({
    category: null,
    setCategory: (category) => set(() => ({ category }))
}))

export default store