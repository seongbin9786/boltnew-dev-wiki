import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'

// This would be replaced with getStaticPaths from Notion API
export async function generateStaticParams() {
  return [
    { slug: 'react' },
    { slug: 'nextjs' },
    { slug: 'typescript' },
    { slug: 'css' },
    { slug: 'nodejs' },
  ]
}

// This would be replaced with getStaticProps from Notion API
async function getCategoryArticles(slug: string) {
  // Mock data to simulate Notion API
  const categoryData = {
    'react': {
      name: 'React',
      description: 'A JavaScript library for building user interfaces',
      articles: [
        { id: '1', title: 'Getting Started with React', views: 1245, lastUpdated: '2023-06-15T00:00:00.000Z' },
        { id: '11', title: 'React Hooks In Depth', views: 987, lastUpdated: '2023-07-20T00:00:00.000Z' },
        { id: '12', title: 'State Management in React', views: 1102, lastUpdated: '2023-05-10T00:00:00.000Z' },
        { id: '13', title: 'React Performance Optimization', views: 876, lastUpdated: '2023-08-05T00:00:00.000Z' },
        { id: '14', title: 'Building Reusable Components', views: 743, lastUpdated: '2023-04-22T00:00:00.000Z' },
        { id: '15', title: 'React Router v6 Guide', views: 659, lastUpdated: '2023-07-01T00:00:00.000Z' },
      ]
    },
    'nextjs': {
      name: 'Next.js',
      description: 'The React framework for production',
      articles: [
        { id: '2', title: 'Next.js Page Router vs App Router', views: 982, lastUpdated: '2023-08-20T00:00:00.000Z' },
        { id: '21', title: 'Server Components in Next.js', views: 854, lastUpdated: '2023-09-05T00:00:00.000Z' },
        { id: '22', title: 'Data Fetching in Next.js', views: 921, lastUpdated: '2023-07-25T00:00:00.000Z' },
        { id: '23', title: 'Optimizing Images with Next.js', views: 667, lastUpdated: '2023-06-30T00:00:00.000Z' },
        { id: '24', title: 'Authentication in Next.js', views: 789, lastUpdated: '2023-08-12T00:00:00.000Z' },
      ]
    },
    'typescript': {
      name: 'TypeScript',
      description: 'JavaScript with syntax for types',
      articles: [
        { id: '3', title: 'TypeScript Advanced Types', views: 876, lastUpdated: '2023-07-10T00:00:00.000Z' },
        { id: '31', title: 'TypeScript Generics Explained', views: 765, lastUpdated: '2023-06-18T00:00:00.000Z' },
        { id: '32', title: 'Type Guards and Type Assertions', views: 654, lastUpdated: '2023-08-24T00:00:00.000Z' },
        { id: '33', title: 'Utility Types in TypeScript', views: 543, lastUpdated: '2023-05-15T00:00:00.000Z' },
        { id: '34', title: 'TypeScript with React', views: 976, lastUpdated: '2023-07-05T00:00:00.000Z' },
      ]
    },
    'css': {
      name: 'CSS',
      description: 'Cascading Style Sheets for web styling',
      articles: [
        { id: '4', title: 'CSS Grid Layout Guide', views: 743, lastUpdated: '2023-05-28T00:00:00.000Z' },
        { id: '41', title: 'CSS Flexbox Deep Dive', views: 832, lastUpdated: '2023-04-15T00:00:00.000Z' },
        { id: '42', title: 'Modern CSS Variables', views: 621, lastUpdated: '2023-06-22T00:00:00.000Z' },
        { id: '43', title: 'CSS Animation Techniques', views: 544, lastUpdated: '2023-08-30T00:00:00.000Z' },
        { id: '44', title: 'Responsive Design Best Practices', views: 912, lastUpdated: '2023-07-19T00:00:00.000Z' },
      ]
    },
    'nodejs': {
      name: 'Node.js',
      description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
      articles: [
        { id: '5', title: 'Node.js Streams Deep Dive', views: 321, lastUpdated: '2023-09-12T00:00:00.000Z' },
        { id: '51', title: 'Building REST APIs with Express', views: 765, lastUpdated: '2023-08-10T00:00:00.000Z' },
        { id: '52', title: 'Node.js Performance Tuning', views: 432, lastUpdated: '2023-07-05T00:00:00.000Z' },
        { id: '53', title: 'Authentication in Node.js', views: 598, lastUpdated: '2023-06-20T00:00:00.000Z' },
        { id: '54', title: 'Working with Databases in Node.js', views: 643, lastUpdated: '2023-05-15T00:00:00.000Z' },
      ]
    },
  }

  return categoryData[slug as keyof typeof categoryData] || null
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategoryArticles(params.slug)
  
  if (!category) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <p>The category you are looking for does not exist.</p>
        <Button asChild className="mt-4">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6">
      <PageHeader
        heading={category.name}
        description={category.description}
      />
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {category.articles.map((article) => {
          const formattedDate = new Date(article.lastUpdated).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
          
          return (
            <Card key={article.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="line-clamp-1 text-xl">{article.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <EyeIcon className="h-3 w-3" />
                  <span>{article.views.toLocaleString()} views</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Updated: {formattedDate}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/wiki/${article.id}`}>Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}