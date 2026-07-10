import { getGenerationBySlug } from '../lib/data/generations'
import { generateGenerationMetadata } from '../lib/metadata-helpers'
import GenerationGuide from '../components/GenerationGuide'

const SLUG = 'gen-alpha'

export const revalidate = 86400

export async function generateMetadata() {
  const gen = getGenerationBySlug(SLUG)
  return gen ? generateGenerationMetadata(gen) : { title: 'Generation Alpha | FindMyGen' }
}

export default function Page() {
  return <GenerationGuide slug={SLUG} />
}
