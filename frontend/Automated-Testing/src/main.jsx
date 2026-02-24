import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoForm from './TodoForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoForm onAdd={(title) => console.log(title)} />
  </StrictMode>,
)
