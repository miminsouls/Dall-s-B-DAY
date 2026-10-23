export default function Note({ text }) {
  return (
    <div className="note">
      <span className="note-pin" aria-hidden="true" />
      <p>{text}</p>
    </div>
  )
}
