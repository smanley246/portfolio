export default function TagList({ tags, className = "" }: { tags?: string[]; className?: string }) {
  if (!tags?.length) return null;
  return <ul aria-label="Tags" className={`flex flex-wrap gap-2 ${className}`}>
    {tags.map(tag => <li key={tag} className="card-chip">{tag}</li>)}
  </ul>;
}
