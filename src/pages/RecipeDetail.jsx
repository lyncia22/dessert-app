import { useParams, useNavigate } from 'react-router-dom'
import useLocalRecipes from '../storage/useLocalRecipes.js'
import { useMemo } from 'react'

export default function RecipeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { recipes, removeRecipe } = useLocalRecipes()

  const recipe = useMemo(() => recipes.find(r => r.id === id), [recipes, id])

  if (!recipe) {
    return (
      <section className="section">
        <h2>Recipe not found</h2>
        <button className="btn" onClick={() => navigate('/')}>Go back</button>
      </section>
    )
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    } catch {
      alert('Could not copy link. Please copy from address bar.')
    }
  }

  return (
    <section className="section">
      <div className="section-title">
        <h2>{recipe.title}</h2>
        {recipe.tags?.length ? (
          <div className="tags">
            {recipe.tags.map(t => <span className="tag" key={t}>{t}</span>)}
          </div>
        ) : null}
      </div>

      {recipe.imageUrl && (
        <img src={recipe.imageUrl} alt={recipe.title} className="hero-image" onError={(e) => { e.currentTarget.style.display = 'none' }} />
      )}

      {recipe.description && <p className="lead">{recipe.description}</p>}

      {recipe.ingredients?.length ? (
        <div className="card">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
        </div>
      ) : null}

      {recipe.steps?.length ? (
        <div className="card">
          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </div>
      ) : null}

      <div className="actions">
        <button className="btn" onClick={() => navigate('/')}>Back</button>
        <button className="btn" onClick={copyLink}>Share Link</button>
        <button className="btn danger" onClick={() => { removeRecipe(recipe.id); navigate('/') }}>Delete</button>
      </div>
    </section>
  )
}
