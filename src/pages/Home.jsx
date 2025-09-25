import RecipeForm from '../components/RecipeForm.jsx'
import RecipeCard from '../components/RecipeCard.jsx'
import useLocalRecipes from '../storage/useLocalRecipes.js'

export default function Home() {
  const { recipes, addRecipe, removeRecipe, search, setSearch } = useLocalRecipes()

  const filtered = recipes.filter(r => {
    const q = search.toLowerCase()
    return (
      r.title.toLowerCase().includes(q) ||
      r.description?.toLowerCase().includes(q) ||
      r.tags?.some(t => t.includes(q)) ||
      r.ingredients?.some(i => i.toLowerCase().includes(q))
    )
  })

  return (
    <section className="section">
      <div className="section-title">
        <h2>Share your sweetest recipes</h2>
        <p className="muted">Create, save and share your desserts with the community.</p>
      </div>

      <div className="toolbar">
        <input
          className="search"
          placeholder="Search by title, ingredient, or tag"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid">
        {filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>

      <RecipeForm onAdd={addRecipe} />

      {recipes.length > 0 && (
        <div className="small muted" style={{ marginTop: 16 }}>
          Tip: Click a recipe to view details and share a direct link.
        </div>
      )}
    </section>
  )
}
