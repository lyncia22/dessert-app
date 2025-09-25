import { useState } from 'react'

const empty = {
  title: '',
  description: '',
  ingredients: '',
  steps: '',
  imageUrl: '',
  tags: ''
}

export default function RecipeForm({ onAdd }) {
  const [form, setForm] = useState(empty)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim()) return

    const recipe = {
      title: form.title.trim(),
      description: form.description.trim(),
      ingredients: form.ingredients.split(',').map(s => s.trim()).filter(Boolean),
      steps: form.steps.split('\n').map(s => s.trim()).filter(Boolean),
      imageUrl: form.imageUrl.trim(),
      tags: form.tags.split(',').map(s => s.trim().toLowerCase()).filter(Boolean)
    }
    onAdd?.(recipe)
    setForm(empty)
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h3>Add a new recipe</h3>

      <label>
        <span>Title</span>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="e.g., Classic Tiramisu"
          required
        />
      </label>

      <label>
        <span>Description</span>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={2}
          placeholder="A short description of your dessert"
        />
      </label>

      <label>
        <span>Ingredients (comma separated)</span>
        <input
          name="ingredients"
          value={form.ingredients}
          onChange={handleChange}
          placeholder="Mascarpone, Eggs, Sugar, ..."
        />
      </label>

      <label>
        <span>Steps (one per line)</span>
        <textarea
          name="steps"
          value={form.steps}
          onChange={handleChange}
          rows={4}
          placeholder={"Whisk eggs and sugar\nFold in mascarpone\nLayer with coffee-soaked ladyfingers"}
        />
      </label>

      <label>
        <span>Image URL</span>
        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="https://..."
          type="url"
        />
      </label>

      <label>
        <span>Tags (comma separated)</span>
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="no-bake, italian, quick"
        />
      </label>

      <div className="actions">
        <button type="submit" className="btn primary">Add Recipe</button>
        <button type="button" className="btn" onClick={() => setForm(empty)}>Clear</button>
      </div>
    </form>
  )
}
