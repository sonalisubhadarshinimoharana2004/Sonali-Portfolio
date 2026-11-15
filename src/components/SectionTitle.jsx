export default function SectionTitle({ eyebrow, title, description, center = false }) {
  return <div className={`mb-10 ${center ? "text-center mx-auto" : ""} max-w-3xl`}>
    {eyebrow && <p className="section-kicker mb-3">{eyebrow}</p>}
    <h2 className="section-title">{title}</h2>
    {description && <p className="muted mt-4 leading-7">{description}</p>}
  </div>;
}