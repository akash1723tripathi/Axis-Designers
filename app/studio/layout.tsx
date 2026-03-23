import './studio.css'

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="sanity-studio">
      {children}
    </div>
  )
}
