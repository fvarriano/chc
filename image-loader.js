export default function imageLoader({ src }) {
  return src.startsWith('/') ? src.slice(1) : src
} 