import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from './components/NewsletterForm'
import FeaturedProjects from './components/FeaturedProjects'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="home.jpg"
            alt="Modern interior with large windows"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col justify-center h-full px-8 max-w-7xl mx-auto">
          <h1 className="text-7xl font-light text-white mb-4">
            Designer<br />Prefab:
          </h1>
          <p className="text-2xl text-white mb-8">Modern dwellings in Atlantic Canada</p>
          <Link 
            href="/catalogue"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-100 w-fit"
          >
            View Design Catalogue
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter-section" className="relative py-16 px-8 bg-white overflow-visible">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter to receive updates about new projects and design insights.</p>
          <NewsletterForm />
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Process Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="process-image.jpg"
            alt="Modern house in nature"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col justify-center h-full px-8 max-w-7xl mx-auto">
          <p className="text-sm text-white mb-4">OUR PROCESS</p>
          <h2 className="text-5xl font-light text-white mb-8">
            Designed by architects to suit you<br />and your landscape.
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white rounded-full hover:bg-white hover:text-black transition-colors w-fit"
          >
            Create with us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <h3 className="text-2xl mb-8 md:mb-0">Ready to get started?</h3>
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-medium text-black border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Get in touch
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200">
            <Image
              src="/logo.svg"
              alt="The Coach House Co."
              width={200}
              height={30}
              className="h-8 w-auto mb-8 md:mb-0 invert"
            />
            <div className="text-sm text-gray-500">
              <p>© The Coach House Co. 2025</p>
              <p>6662 B Bank Street, Ottawa, ON K0A 2P0 Canada</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

const projects = [
  {
    title: 'White Point Retreat',
    location: 'NOVA SCOTIA',
    image: 'white-point.jpg',
    slug: 'white-point-retreat'
  },
  {
    title: 'Cape Breton Retreat',
    location: 'NOVA SCOTIA',
    image: 'cape-breton.jpg',
    slug: 'cape-breton-retreat'
  },
  {
    title: 'Whites Lake',
    location: 'NOVA SCOTIA',
    image: 'whites-lake.jpg',
    slug: 'whites-lake'
  },
  {
    title: 'Lakehouse I',
    location: 'NOVA SCOTIA',
    image: 'lakehouse.jpg',
    slug: 'lakehouse-1'
  }
]
