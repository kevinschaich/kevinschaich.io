interface PhotoCardProps {
  img: string
  url: string
}

export default function PhotoCard({ img, url }: PhotoCardProps) {
  return (
    <a target="_blank" href={url} rel="noopener noreferrer" className="w-[200px] lg:w-[300px]">
      <div
        className="h-[200px] bg-center bg-no-repeat bg-cover lg:h-[300px]"
        style={{ backgroundImage: `url('/img/${img}')` }}
      ></div>
    </a>
  )
}
