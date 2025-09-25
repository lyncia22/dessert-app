import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import RecipeDetail from './pages/RecipeDetail.jsx'
import Header from './components/Header.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container small">
          <p>Made with ❤️ for dessert lovers. Share your sweet creations!</p>
        </div>
      </footer>
    </div>
  )
}

function NotFound() {
  return (
    <section className="section">
      <h2>Page not found</h2>
      <p>
        Return to the <NavLink to="/" className="link">home page</NavLink>.
      </p>
    </section>
  )
}
