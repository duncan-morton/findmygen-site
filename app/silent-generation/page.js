import { getGenerationBySlug } from '../lib/data/generations'
import { generateGenerationMetadata } from '../lib/metadata-helpers'
import GenerationGuide from '../components/GenerationGuide'

const SLUG = 'silent-generation'

export const revalidate = 86400

export async function generateMetadata() {
  const gen = getGenerationBySlug(SLUG)
  return gen ? generateGenerationMetadata(gen) : { title: 'Silent Generation | FindMyGen' }
}

export default function Page() {
  return <GenerationGuide slug={SLUG} />
}
