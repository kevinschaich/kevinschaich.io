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
      <div id="container">
          <div id="intro">
              <h1>👋&nbsp;&nbsp;Hi, I&apos;m Kevin.</h1>
              <img id="avatar" src="/img/avatar.jpg" alt="" />
              <p>
                  Building cool shit @{' '}
                  <strong>
                      <a href="https://darkgrade.com" target="_blank" rel="noopener noreferrer">
                          darkgrade
                      </a>
                  </strong>
                  . Prev. @ Palantir / Cornell CS
              </p>
          </div>

          <div id="projects">
              <h1>Projects</h1>
              <h2>
                  View more on{' '}
                  <a className="github" href="https://github.com/kevinschaich">
                      @kevinschaich on GitHub
                  </a>
                  .
              </h2>
              <div id="projects-inner">
                  {repos.map(repo => (
                      <RepoCard key={repo} repo={repo} />
                  ))}
              </div>
          </div>

          <div id="photos">
              <h1>Photos</h1>
              <h2>
                  View more on &nbsp;
                  <a
                      className="instagram"
                      target="_blank"
                      href="https://instagram.com/kevinschaich"
                      rel="noopener noreferrer"
                  >
                      @kevinschaich on Instagram<span className="underline"></span>
                  </a>
                  .
              </h2>
              <div id="photos-inner">
                  {photos.map((photo, idx) => (
                      <PhotoCard key={idx} img={photo.img} url={photo.url} />
                  ))}
              </div>
          </div>

          <div id="playlists">
              <h1>Playlists</h1>
              <h2>
                  View more on &nbsp;
                  <a className="spotify" href="https://open.spotify.com/user/kevinschaich">
                      @kevinschaich on Spotify
                  </a>
                  .
              </h2>
              <div id="playlists-inner">
                  {playlists.map((playlist, idx) => (
                      <PlaylistCard key={idx} img={playlist.img} url={playlist.url} />
                  ))}
              </div>
          </div>
      </div>
  )
}
