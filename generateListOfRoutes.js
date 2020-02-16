import albums from './static/content/work.json'

const sluggify = (title) =>
  title
    .toLowerCase()
    .split(' ')
    .filter(a => a)
    .join('-')

const reduceAlbums = (accu, folder) => {
  const slug = sluggify(folder.folder_name)

  accu.push(`/album/${slug}`)
  accu[slug] = {
    gallery: folder.gallery,
    title: folder.folder_name,
    url: slug
  }

  return accu
}

const routes = Array.isArray(albums.folders)
  ? albums.folders.reduce(reduceAlbums, [])
  : []

module.exports = routes
