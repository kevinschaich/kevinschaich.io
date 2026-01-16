'use client'

import { useEffect, useState } from 'react'

interface RepoData {
  name: string
  html_url: string
  description: string
  language: string | null
  stargazers_count: number
  forks: number
  fork: boolean
  source?: {
    html_url: string
    full_name: string
  }
}

interface RepoCardProps {
  repo: string
}

export default function RepoCard({ repo }: RepoCardProps) {
  const [data, setData] = useState<RepoData | null>(null)
  const [emojis, setEmojis] = useState<Record<string, string>>({})
  const [colors, setColors] = useState<Record<string, { color: string }>>({})

  useEffect(() => {
    async function fetchData() {
      const [emojisRes, colorsRes, repoRes] = await Promise.all([
        fetch('https://api.github.com/emojis'),
        fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'),
        fetch(`https://api.github.com/repos/${repo}`),
      ])

      const emojisData = await emojisRes.json()
      const colorsData = await colorsRes.json()
      const repoData = await repoRes.json()

      setEmojis(emojisData)
      setColors(colorsData)
      setData(repoData)
    }

    fetchData()
  }, [repo])

  if (!data) {
    return <div className="w-[200px] lg:w-[300px]">Loading...</div>
  }

  const description = (data.description || '').replace(/:\w+:/g, (match: string) => {
    const name = match.substring(1, match.length - 1)
    const emoji = emojis[name]

    if (emoji) {
      return `<span><img src="${emoji}" style="width: 1rem; height: 1rem; vertical-align: -0.2rem;"></span>`
    }

    return match
  })

  return (
    <div className="w-[200px] lg:w-[300px] flex">
      <div
        className="border-2 border-[#333] rounded-md bg-[#222] p-4 text-sm leading-relaxed text-white flex flex-col h-full w-full"
        style={{
          fontFamily:
            '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
        }}
      >
        <div className="flex items-center">
          <svg
            className="mr-2 fill-[#777]"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            />
          </svg>
          <span className="font-semibold">
            <a className="no-underline text-[#2f90ff]" href={data.html_url}>
              {data.name}
            </a>
          </span>
        </div>
        {data.fork && (
          <div className="text-xs text-white">
            Forked from{' '}
            <a
              className="text-[#2f90ff] no-underline"
              href={data.source?.html_url}
            >
              {data.source?.full_name}
            </a>
          </div>
        )}
        <div
          className="text-xs mb-4 mt-2 text-white flex-grow"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="text-xs text-white flex mt-auto">
          {data.language && (
            <div className="mr-4">
              <span
                className="mr-2"
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '100%',
                  backgroundColor: colors[data.language]?.color || '',
                  display: 'inline-block',
                  top: '1px',
                  position: 'relative',
                }}
              />
              <span>{data.language}</span>
            </div>
          )}
          {data.stargazers_count > 0 && (
            <div className="flex items-center mr-4">
              <svg
                className="fill-[#777]"
              aria-label="stars"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                role="img"
              >
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                />
              </svg>
              &nbsp; <span>{data.stargazers_count}</span>
            </div>
          )}
          {data.forks > 0 && (
            <div className="flex items-center">
              <svg
                className="fill-[#777]"
              aria-label="fork"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                role="img"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
              &nbsp; <span>{data.forks}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
