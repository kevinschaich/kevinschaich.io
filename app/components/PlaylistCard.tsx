interface PlaylistCardProps {
  img: string
  url: string
}

export default function PlaylistCard({ img, url }: PlaylistCardProps) {
  return (
    <div className="w-[200px] lg:w-[300px]">
      <a target="_blank" href={url} rel="noopener noreferrer">
        <img className="w-full" src={`/img/${img}`} alt="" />
      </a>
    </div>
  )
}
