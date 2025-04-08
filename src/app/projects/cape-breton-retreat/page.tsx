import Image from 'next/image'
import Link from 'next/link'

export default function CapeBretronRetreat() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[21/9] w-full">
        <Image
          src="/cape-breton.jpg"
          alt="Cape Breton Retreat"
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
              <h1 className="text-5xl font-light mb-8">Cape Breton Retreat</h1>
              <div className="space-y-6">
                <p className="text-gray-600">The Cape Breton Retreat is a private residence that showcases both prefabricated construction techniques and a deep appreciation for the natural environment. At the heart of this project lies our clients&apos; profound desire to spend as much time outside as possible. This concept is realized through the subdivision of the program into five distinct buildings, each carefully nestled within the landscape, that pinwheel around a central gathering space (&quot;the Lodge&quot;). Breaking up the program and creating an extensive network of trails throughout the property encourages movement between buildings and engagement with the outdoors.</p>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-sm font-medium mb-4">FLOOR AREA</h2>
                <p className="text-gray-600">Main Lodge: 1511 sq.ft.</p>
                <p className="text-gray-600">Primary Cabin: 984 sq.ft.</p>
                <p className="text-gray-600">Guest Cabin: 901 sq.ft.</p>
                <p className="text-gray-600">The Barn: 1597 sq.ft.</p>
                <p className="text-gray-600">Sauna: 782 sq.ft.</p>
              </div>
              <div>
                <h2 className="text-sm font-medium mb-4">FEATURES</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">5 Distinct Buildings | Central Gathering Space | Network of Trails | Prefabricated Construction | Integrated with Natural Landscape</p>
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