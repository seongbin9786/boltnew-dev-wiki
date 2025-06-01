import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookIcon, CodeIcon, FileTextIcon, HashIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  // This would normally come from the Notion API
  const popularPages = [
    { id: '1', title: 'Getting Started with React', views: 1245, category: 'React' },
    { id: '2', title: 'Next.js Page Router vs App Router', views: 982, category: 'Next.js' },
    { id: '3', title: 'TypeScript Advanced Types', views: 876, category: 'TypeScript' },
    { id: '4', title: 'CSS Grid Layout Guide', views: 743, category: 'CSS' },
  ]

  const recentPages = [
    { id: '5', title: 'Node.js Streams Deep Dive', views: 321, category: 'Node.js' },
    { id: '6', title: 'React Server Components', views: 567, category: 'React' },
    { id: '7', title: 'Database Indexing Strategies', views: 432, category: 'Databases' },
    { id: '8', title: 'Modern Authentication Patterns', views: 654, category: 'Security' },
  ]

  const categories = [
    { name: 'React', count: 24 },
    { name: 'Next.js', count: 18 },
    { name: 'TypeScript', count: 15 },
    { name: 'CSS', count: 12 },
    { name: 'Node.js', count: 10 },
    { name: 'Databases', count: 8 },
    { name: 'Security', count: 7 },
    { name: 'DevOps', count: 9 },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        heading="Developer Wiki"
        description="Your central knowledge base for development resources and documentation."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <FileTextIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">132</div>
            <p className="text-xs text-muted-foreground">+12 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <HashIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <BookIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.2K</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Code Snippets</CardTitle>
            <CodeIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">368</div>
            <p className="text-xs text-muted-foreground">+41 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="popular" className="space-y-4">
        <TabsList>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="recent">Recently Updated</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="popular" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {popularPages.map((page) => (
              <Card key={page.id}>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1 text-md">{page.title}</CardTitle>
                  <CardDescription>{page.category}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <span className="text-sm text-muted-foreground">{page.views} views</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/wiki/${page.id}`}>Read</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {recentPages.map((page) => (
              <Card key={page.id}>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1 text-md">{page.title}</CardTitle>
                  <CardDescription>{page.category}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <span className="text-sm text-muted-foreground">{page.views} views</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/wiki/${page.id}`}>Read</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="categories">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card key={category.name}>
                <CardHeader className="p-4">
                  <CardTitle className="text-md">{category.name}</CardTitle>
                  <CardDescription>{category.count} articles</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/category/${category.name.toLowerCase()}`}>Browse</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}