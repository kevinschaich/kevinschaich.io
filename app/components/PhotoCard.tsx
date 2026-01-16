interface PhotoCardProps {
  img: string
  url: string
}

export default function PhotoCard({ img, url }: PhotoCardProps) {
  return (
    <a target="_blank" href={url} rel="noopener noreferrer">
      <div className="photo-card" style={{ backgroundImage: `url('/img/${img}')` }}></div>
    </a>
  )
}
