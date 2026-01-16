import RepoCard from './components/RepoCard'
import PhotoCard from './components/PhotoCard'
import PlaylistCard from './components/PlaylistCard'

const repos = [
  'darkgrade/darkgrade',
  'kevinschaich/mintable',
  'kevinschaich/h3-pyspark',
  'kevinschaich/pyspark-cheatsheet',
  'kevinschaich/billboard',
  'kevinschaich/kevinschaich.io',
]

const photos = [
  { img: '1.jpg', url: 'https://www.instagram.com/p/0qE8SGGZfL/' },
  { img: '2.jpg', url: 'https://www.instagram.com/p/-USkVvmZX1/' },
  { img: '3.jpg', url: 'https://www.instagram.com/p/6THGY4mZeU/' },
  { img: '8.jpg', url: 'https://www.instagram.com/p/CAN15OgD0jL/' },
  { img: '4.jpg', url: 'https://www.instagram.com/p/6LjXQDGZRh/' },
  { img: '5.jpg', url: 'https://www.instagram.com/p/CD17Tt3D81Q/' },
  { img: '6.jpg', url: 'https://www.instagram.com/p/CDo2VJqjKHG/' },
  { img: '7.jpg', url: 'https://www.instagram.com/p/CATsZQSDDAD/' },
  { img: '9.jpg', url: 'https://www.instagram.com/p/CDSFzFwDYbY/' },
]

const playlists = [
  {
    img: 'Lush.jpg',
    url: 'https://open.spotify.com/playlist/4LuO3ABJh50ZMFSW0D1t6o?si=-8NWBszXRguQIYMmvYQX8Q',
  },
  {
    img: 'Highly Flammable.jpg',
    url: 'https://open.spotify.com/playlist/3vXY8DBRcSUwcF4Tv1iIAb?si=hyChd00tRoujELtQXFnzHQ',
  },
  {
    img: 'Booze Cruise.jpg',
    url: 'https://open.spotify.com/playlist/1f0YU37AZua6Ojq9d0LMR8?si=v9p-gxJaRDC8miRwHfv6zw',
  },
  {
    img: 'Weekend Rotation.jpg',
    url: 'https://open.spotify.com/playlist/5KYN4gbdNKqNNBrPRXKxyf?si=t1KpjmlRQ02PmVnNqyoYKw',
  },
  {
    img: 'Cerebral.jpg',
    url: 'https://open.spotify.com/playlist/5d5m0nwbaLZ2K6Hn8OPKfI?si=qqAyVcsqSw64t8Mr73Meww',
  },
]

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        ol, ul {
          display: flex;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        a {
          text-decoration: none;
        }
      ` }} />
      <div className="mx-auto max-w-[1200px] px-10 py-8 flex flex-col md:px-2.5 md:py-8">
      <div className="flex flex-col text-justify mb-16">
        <h1 className="text-center text-4xl font-bold mb-6">👋&nbsp;&nbsp;Hi, I&apos;m Kevin.</h1>
        <img className="mx-auto rounded-full w-[150px] mb-6" src="/img/avatar.jpg" alt="" />
        <p className="text-xl font-medium leading-8 text-center">
          Building cool shit @{' '}
          <a
            href="https://darkgrade.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffc800] border-b-2 border-[#ffc800] pb-0.5 font-medium"
          >
            darkgrade
          </a>
          . Prev. @ Palantir / Cornell CS
        </p>
      </div>

      <div className="flex flex-col mb-16">
        <h1 className="text-center text-4xl font-bold mb-3">Projects</h1>
        <h2 className="text-center text-xl font-medium mb-8">
          View more on{' '}
          <a
            className="text-[#2f90ff] border-b-2 border-[#2f90ff] hover:text-[#2f90ff] hover:border-b-2 hover:border-[#2f90ff] font-medium"
            href="https://github.com/kevinschaich"
          >
            @kevinschaich on GitHub
          </a>
          .
        </h2>
        <div className="flex flex-row justify-center flex-wrap gap-5 items-stretch">
          {repos.map((repo) => (
            <RepoCard key={repo} repo={repo} />
          ))}
        </div>
      </div>

      <div className="flex flex-col mb-16">
        <h1 className="text-center text-4xl font-bold mb-3">Photos</h1>
        <h2 className="text-center text-xl font-medium mb-8">
          View more on &nbsp;
          <a
            className="inline relative font-medium"
            target="_blank"
            href="https://instagram.com/kevinschaich"
            rel="noopener noreferrer"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 107%, #fdf497 0, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            @kevinschaich on Instagram
            <span
              className="absolute left-0 w-full"
              style={{
                height: '2px',
                bottom: '2px',
                backgroundImage:
                  'radial-gradient(circle at 30% 107%, #fdf497 0, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)',
                pointerEvents: 'none',
              }}
            ></span>
          </a>
          .
        </h2>
        <div className="flex flex-row justify-center flex-wrap gap-5">
          {photos.map((photo, idx) => (
            <PhotoCard key={idx} img={photo.img} url={photo.url} />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-center text-4xl font-bold mb-3">Playlists</h1>
        <h2 className="text-center text-xl font-medium mb-8">
          View more on &nbsp;
          <a
            className="text-[#1db954] border-b-2 border-[#1db954] hover:text-[#1db954] hover:border-b-2 hover:border-[#1db954] font-medium"
            href="https://open.spotify.com/user/kevinschaich"
          >
            @kevinschaich on Spotify
          </a>
          .
        </h2>
        <div className="flex flex-row justify-center flex-wrap gap-5">
          {playlists.map((playlist, idx) => (
            <PlaylistCard key={idx} img={playlist.img} url={playlist.url} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
