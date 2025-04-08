import Image from 'next/image'
import Link from 'next/link'

export default function WhitePointRetreat() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[21/9] w-full">
        <Image
          src="/white-point.jpg"
          alt="White Point Retreat"
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
              <h1 className="text-5xl font-light mb-8">White Point Retreat</h1>
              <div className="space-y-6">
                <p className="text-gray-600">This home sits on a dramatic ocean-front site on Nova Scotia&apos;s beautiful south shore. Appreciating the ocean view was a priority for the homeowners, and the home&apos;s 27 feet of glass in the main living space make the view the focal point. The expansive 9-foot floor-to-ceiling Andersen windows and doors —with aluminum exteriors and warm wood interiors—flood the space with natural light and provide unobstructed views of the ocean and forest. Its interior is entirely clad in pine, which was readily available at the time from a local mill.</p>
                <p className="text-gray-600">The two wings of the L-shaped home wrap around a courtyard, which is further enclosed by a separate studio building, providing protection from the predominant south-west winds coming off the water. The studio contains a guest room/office, powder room, and sauna, and is connected to the main home via a wooden boardwalk flush with the grade. The exteriors of both buildings are clad in white cedar, stained a rich black.</p>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-sm font-medium mb-4">FLOOR AREA</h2>
                <p className="text-gray-600">Main House: 1407 sq.ft.</p>
                <p className="text-gray-600">Studio: 363 sq.ft.</p>
              </div>
              <div>
                <h2 className="text-sm font-medium mb-4">FEATURES</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">Main House: 2 Bedroom plus Den | 1.5 Bathroom | Wood Stove | 9ft Floor to Ceiling Windows | Outdoor Shower | Horizontal Pine Interior Finish</p>
                  <p className="text-gray-600">Studio: Guest Room/Office | Powder Room | Wood Fired Sauna</p>
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