export async function getSubstackFeed() {
const url = 'https://reflections-in-the-sand.substack.com/feed'
const res = await fetch(url, { next: { revalidate: 60 } })
const xml = await res.text()
// parse with a light XML lib or regex for title/link/description
// return [{ title, link, excerpt, date }]
}