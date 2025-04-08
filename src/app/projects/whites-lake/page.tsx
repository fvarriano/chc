import Image from 'next/image'
import Link from 'next/link'

export default function WhitesLake() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[21/9] w-full">
        <Image
          src="/whites-lake.jpg"
          alt="Whites Lake"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Description Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <p className="text-sm mb-4">NOVA SCOTIA</p>
              <h1 className="text-5xl font-light mb-8">Whites Lake</h1>
              <div className="space-y-6">
                <p className="text-gray-600">Situated on the tranquil shores of Whites Lake, this contemporary lakehouse combines modern design with natural elements. The home&apos;s design maximizes lake views while maintaining privacy, featuring a series of carefully positioned windows and outdoor spaces that capture the changing light throughout the day.</p>
                <p className="text-gray-600">The interior spaces flow seamlessly to exterior decks and patios, creating multiple opportunities for outdoor living and entertaining. The material palette includes locally sourced wood and stone, complemented by modern finishes that create a sophisticated yet comfortable atmosphere.</p>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-sm font-medium mb-4">FLOOR AREA</h2>
                <p className="text-gray-600">Main House: 1800 sq.ft.</p>
                <p className="text-gray-600">Outdoor Living: 600 sq.ft.</p>
              </div>
              <div>
                <h2 className="text-sm font-medium mb-4">FEATURES</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">2 Bedrooms | 2.5 Bathrooms | Gourmet Kitchen | Lake View Master Suite | Private Dock | Wraparound Deck | Smart Home Technology</p>
                </div>
              </div>
              <Link
                href="https://airbnb.com"
                className="inline-flex items-center justify-center px-6 py-3 mt-8 text-sm font-medium text-black border border-black rounded-full hover:bg-black hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book now on Airbnb
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floorplan Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-8">Floor Plans</h2>
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/floorplan-placeholder.jpg"
              alt="Floor Plans"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  )
} 