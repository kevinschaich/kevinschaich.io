interface PlaylistCardProps {
  img: string
  url: string
}

export default function PlaylistCard({ img, url }: PlaylistCardProps) {
  return (
    <div className="playlist-card">
      <a target="_blank" href={url} rel="noopener noreferrer">
        <img src={`/img/${img}`} alt="" />
      </a>
    </div>
  )
}
