import Image from 'next/image'
import Link from 'next/link'

export default function Lakehouse() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[21/9] w-full">
        <Image
          src="/lakehouse.jpg"
          alt="Lakehouse I"
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
              <h1 className="text-5xl font-light mb-8">Lakehouse I</h1>
              <div className="space-y-6">
                <p className="text-gray-600">Perched on the edge of a serene Nova Scotia lake, Lakehouse I represents the perfect balance of modern architecture and natural surroundings. The design emphasizes horizontal lines that mirror the lake's surface, while floor-to-ceiling windows create a seamless connection between interior and exterior spaces.</p>
                <p className="text-gray-600">The home features an open-concept living area that extends onto a generous lakeside deck, creating an indoor-outdoor living experience. Sustainable materials and energy-efficient systems were carefully integrated into the design, making this retreat as environmentally conscious as it is beautiful.</p>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-sm font-medium mb-4">FLOOR AREA</h2>
                <p className="text-gray-600">Main House: 1850 sq.ft.</p>
                <p className="text-gray-600">Deck Space: 750 sq.ft.</p>
                <p className="text-gray-600">Boathouse: 400 sq.ft.</p>
              </div>
              <div>
                <h2 className="text-sm font-medium mb-4">FEATURES</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">3 Bedrooms | 2.5 Bathrooms | Lakefront Access | Private Dock | Floor-to-Ceiling Windows | Geothermal Heating | Solar Ready | Smart Home Integration</p>
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