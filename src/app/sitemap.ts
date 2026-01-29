import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://daika.dev',
            lastModified: '2026-01-29',
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://daika.dev/about',
            lastModified: '2026-01-29',
            changeFrequency: 'yearly',
            priority: 0.8,
        },
    ]
}