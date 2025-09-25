import { useEffect, useMemo, useState } from 'react'
import { v4 as uuid } from 'uuid'

const KEY = 'dessert-app:recipes'

export default function useLocalRecipes() {
  const [recipes, setRecipes] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [search, setSearch] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(recipes))
    } catch {
      // ignore write errors
    }
  }, [recipes])

  function addRecipe(data) {
    const newRecipe = { id: uuid(), createdAt: Date.now(), ...data }
    setRecipes(prev => [newRecipe, ...prev])
  }

  function updateRecipe(id, patch) {
    setRecipes(prev => prev.map(r => r.id === id ? { ...r, ...patch, updatedAt: Date.now() } : r))
  }

  function removeRecipe(id) {
    setRecipes(prev => prev.filter(r => r.id !== id))
  }

  const byNewest = useMemo(() => [...recipes].sort((a, b) => (b.updatedAt ?? b.createdAt) - (a.updatedAt ?? a.createdAt)), [recipes])

  return { recipes: byNewest, addRecipe, updateRecipe, removeRecipe, search, setSearch }
}
