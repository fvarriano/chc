'use client'

import Link from 'next/link'
import Image from 'next/image'

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

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="max-w-[1440px] mx-auto px-8 mb-24">
        <h2 className="text-4xl text-center">Our philosophy – beauty and harmony.</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="relative aspect-[4/3] group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30">
              <div className="absolute bottom-12 left-12">
                <p className="text-white text-sm mb-2">{project.location}</p>
                <h3 className="text-white text-4xl mb-6">{project.title}</h3>
                <Link 
                  href={`/projects/${project.slug}`}
                  className="inline-block px-6 py-3 text-sm font-medium text-white border border-white rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  See Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 