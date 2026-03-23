import { client } from './sanity'

// --- Interfaces ---

interface SanitySlug {
  current: string
}

interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

interface GalleryImage extends SanityImage {
  altText?: string
}

interface RichText {
  _type: 'block'
  _key: string
  children: Array<{
    _type: string
    _key: string
    text: string
    marks?: string[]
  }>
  style?: string
  markDefs?: Array<{
    _type: string
    _key: string
    href?: string
  }>
}

export interface Sector {
  _id: string
  name: string
  slug: SanitySlug
  icon: string
  order: number
}

export interface EventSummary {
  _id: string
  title: string
  slug: SanitySlug
  coverImage: SanityImage
  date: string
}

export interface EventFull {
  _id: string
  title: string
  slug: SanitySlug
  coverImage: SanityImage
  description: RichText[]
  date: string
  gallery: GalleryImage[]
  sector: {
    _id: string
    name: string
    slug: SanitySlug
  }
}

export interface BlogSummary {
  _id: string
  title: string
  slug: SanitySlug
  coverImage: SanityImage
  excerpt: string
  publishedAt: string
}

export interface BlogFull {
  _id: string
  title: string
  slug: SanitySlug
  coverImage: SanityImage
  excerpt: string
  publishedAt: string
  body: RichText[]
}

export interface Career {
  _id: string
  title: string
  department: string
  location: string
  employmentType: string
  isActive: boolean
  postedAt: string
  description: RichText[]
}

// --- Queries ---

export async function getAllSectors(): Promise<Sector[]> {
  return client.fetch(
    `*[_type == "sector"] | order(order asc) {
      _id, name, slug, icon, order
    }`
  )
}

export async function getEventsBySector(slug: string): Promise<EventSummary[]> {
  return client.fetch(
    `*[_type == "event" && sector->slug.current == $slug] | order(date desc) {
      _id, title, slug, coverImage, date
    }`,
    { slug }
  )
}

export async function getEventBySlug(slug: string): Promise<EventFull> {
  return client.fetch(
    `*[_type == "event" && slug.current == $slug][0] {
      _id, title, slug, coverImage, description, date,
      gallery[] { ..., altText },
      sector-> { _id, name, slug }
    }`,
    { slug }
  )
}

export async function getAllBlogs(): Promise<BlogSummary[]> {
  return client.fetch(
    `*[_type == "blog"] | order(publishedAt desc) {
      _id, title, slug, coverImage, excerpt, publishedAt
    }`
  )
}

export async function getBlogBySlug(slug: string): Promise<BlogFull> {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      _id, title, slug, coverImage, excerpt, publishedAt, body
    }`,
    { slug }
  )
}

export async function getActiveCareers(): Promise<Career[]> {
  return client.fetch(
    `*[_type == "career" && isActive == true] | order(postedAt desc) {
      _id, title, department, location, employmentType, isActive, postedAt, description
    }`
  )
}
