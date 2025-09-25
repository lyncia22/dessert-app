import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  return (
    <article className="card recipe-card">
      {recipe.imageUrl ? (
        <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" onError={(e) => { e.currentTarget.style.display = 'none' }} />
      ) : null}
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        {recipe.description && <p className="muted">{recipe.description}</p>}
        {recipe.tags?.length ? (
          <div className="tags">
            {recipe.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        ) : null}
        <div className="recipe-actions">
          <Link to={`/recipe/${recipe.id}`} className="btn">View</Link>
        </div>
      </div>
    </article>
  )
}
