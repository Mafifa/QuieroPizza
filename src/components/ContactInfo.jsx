export function ContactInfo ({ icon, text }) {
  return (
    <div className="flex items-center">
      <div className="mr-4">{icon}</div>
      <p>{text}</p>
    </div>
  )
}