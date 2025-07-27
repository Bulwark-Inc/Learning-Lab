import DarkModeToggle from './ModeToggle'

function Header() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold">📝 GPT Writing Assistant</h1>
      <DarkModeToggle />
    </div>
  )
}

export default Header
