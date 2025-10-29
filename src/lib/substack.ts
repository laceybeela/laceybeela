export async function getSubstackFeed() {
  try {
    const url = 'https://reflections-in-the-sand.substack.com/feed'
    const res = await fetch(url, { next: { revalidate: 60 } })
    const xml = await res.text()
    
    // Simple XML parsing for RSS feed
    const itemRegex = new RegExp('<item>(.*?)</item>', 'gs')
    const items = xml.match(itemRegex) || []
    
    return items.slice(0, 4).map(item => {
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || 'Untitled'
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || '#'
      const description = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] || ''
      const excerpt = description.replace(/<[^>]*>/g, '').slice(0, 150) + '...'
      
      return { title, link, excerpt }
    })
  } catch (error) {
    console.error('Failed to fetch Substack feed:', error)
    return []
  }
}