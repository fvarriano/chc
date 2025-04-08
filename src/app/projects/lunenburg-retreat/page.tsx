import Image from 'next/image'
import Link from 'next/link'

export default function LunenburgRetreat() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[21/9] w-full">
        <Image
          src="/lunenburg.jpg"
          alt="Lunenburg Retreat"
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
              <h1 className="text-5xl font-light mb-8">Lunenburg Retreat</h1>
              <div className="space-y-6">
                <p className="text-gray-600">Nestled in the historic town of Lunenburg, a UNESCO World Heritage site, this thoughtfully restored retreat combines maritime heritage with contemporary comfort. The property offers stunning views of the harbor and maintains the architectural character that defines this iconic Nova Scotia destination.</p>
                <p className="text-gray-600">The renovation preserves original architectural details while introducing modern amenities and sustainable features. Large windows frame picturesque views of the colorful waterfront, while the interior spaces showcase a blend of traditional craftsmanship and modern design elements.</p>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-sm font-medium mb-4">FLOOR AREA</h2>
                <p className="text-gray-600">Main House: 2200 sq.ft.</p>
                <p className="text-gray-600">Garden Space: 800 sq.ft.</p>
              </div>
              <div>
                <h2 className="text-sm font-medium mb-4">FEATURES</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">3 Bedrooms | 2.5 Bathrooms | Chef&apos;s Kitchen | Harbor Views | Private Garden | Original Hardwood Floors | Period Details | Modern Amenities</p>
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