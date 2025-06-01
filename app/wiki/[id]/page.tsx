import { CommentSection } from '@/components/comments/comment-section'
import { PageHeader } from '@/components/layout/page-header'
import { TableOfContents } from '@/components/wiki/table-of-contents'
import { ViewCounter } from '@/components/wiki/view-counter'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CalendarIcon, Clock3Icon, ThumbsUpIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

// This would be replaced with getStaticPaths from Notion API
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]
}

// This would be replaced with getStaticProps from Notion API
async function getWikiPage(id: string) {
  // Mock data to simulate Notion API
  const pages = {
    '1': {
      id: '1',
      title: 'Getting Started with React',
      author: { name: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?img=1' },
      lastUpdated: '2023-06-15T00:00:00.000Z',
      readingTime: '8 min',
      category: 'React',
      tags: ['React', 'JavaScript', 'Frontend'],
      content: `
        <h2 id="introduction">Introduction to React</h2>
        <p>React is a JavaScript library for building user interfaces, particularly single-page applications where you need a responsive experience.</p>

        <h2 id="prerequisites">Prerequisites</h2>
        <p>Before you start learning React, you should have a basic understanding of:</p>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript ES6</li>
          <li>DOM manipulation</li>
          <li>Familiarity with NPM</li>
        </ul>

        <h2 id="creating-app">Creating Your First React App</h2>
        <p>The easiest way to create a React application is by using Create React App. Run this command:</p>

        <pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>

        <h2 id="components">Components in React</h2>
        <p>Components are the building blocks of any React application. A component is a JavaScript function or class that optionally accepts inputs and returns a React element that describes how a section of the UI should appear.</p>

        <pre><code>import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;</code></pre>

        <h2 id="state-props">State and Props</h2>
        <p>React components have two types of data: props and state. Props are like function arguments, and state is like variables declared within a function.</p>

        <h2 id="hooks">React Hooks</h2>
        <p>Hooks are a newer addition to React that lets you use state and other React features without writing a class.</p>

        <pre><code>import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>

        <h2 id="resources">Additional Resources</h2>
        <p>Here are some resources to further your React learning:</p>
        <ul>
          <li><a href="https://reactjs.org/docs/getting-started.html">Official React Documentation</a></li>
          <li><a href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a></li>
          <li><a href="https://beta.reactjs.org/">React Beta Docs</a></li>
        </ul>
      `,
      tableOfContents: [
        { id: 'introduction', title: 'Introduction to React', level: 2 },
        { id: 'prerequisites', title: 'Prerequisites', level: 2 },
        { id: 'creating-app', title: 'Creating Your First React App', level: 2 },
        { id: 'components', title: 'Components in React', level: 2 },
        { id: 'state-props', title: 'State and Props', level: 2 },
        { id: 'hooks', title: 'React Hooks', level: 2 },
        { id: 'resources', title: 'Additional Resources', level: 2 },
      ],
    },
    '2': {
      id: '2',
      title: 'Next.js Page Router vs App Router',
      author: { name: 'Sarah Miller', avatar: 'https://i.pravatar.cc/150?img=5' },
      lastUpdated: '2023-08-20T00:00:00.000Z',
      readingTime: '10 min',
      category: 'Next.js',
      tags: ['Next.js', 'React', 'Web Development'],
      content: `
        <h2 id="introduction">Introduction</h2>
        <p>Next.js has introduced a new App Router alongside its traditional Page Router. This article compares both approaches.</p>

        <h2 id="page-router">The Pages Router</h2>
        <p>The Pages Router has been the standard in Next.js for years. It uses a file-system based router built on the concept of pages.</p>

        <h2 id="app-router">The App Router</h2>
        <p>The App Router, introduced in Next.js 13, is built on React Server Components and provides enhanced features for building complex applications.</p>

        <h2 id="key-differences">Key Differences</h2>
        <p>Let's look at the main differences between these two routing systems:</p>
        <ul>
          <li>App Router uses React Server Components</li>
          <li>Different directory structure (/app vs /pages)</li>
          <li>Different data fetching methods</li>
          <li>Different rendering strategies</li>
        </ul>

        <h2 id="migration">Migration Strategies</h2>
        <p>If you're looking to migrate from Pages Router to App Router, here are some tips to make the transition smoother.</p>
      `,
      tableOfContents: [
        { id: 'introduction', title: 'Introduction', level: 2 },
        { id: 'page-router', title: 'The Pages Router', level: 2 },
        { id: 'app-router', title: 'The App Router', level: 2 },
        { id: 'key-differences', title: 'Key Differences', level: 2 },
        { id: 'migration', title: 'Migration Strategies', level: 2 },
      ],
    },
    '3': {
      id: '3',
      title: 'TypeScript Advanced Types',
      author: { name: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?img=3' },
      lastUpdated: '2023-07-10T00:00:00.000Z',
      readingTime: '12 min',
      category: 'TypeScript',
      tags: ['TypeScript', 'JavaScript', 'Web Development'],
      content: `
        <h2 id="introduction">Introduction to Advanced Types</h2>
        <p>TypeScript provides several advanced types that help you create more robust applications.</p>

        <h2 id="intersection">Intersection Types</h2>
        <p>Intersection types combine multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.</p>

        <pre><code>interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

type Employee = Identity & BusinessPartner;</code></pre>

        <h2 id="union">Union Types</h2>
        <p>Union types allow you to declare a type that could be one of many types.</p>

        <pre><code>type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;</code></pre>

        <h2 id="generics">Generics</h2>
        <p>Generics provide a way to create reusable components that can work with a variety of types rather than a single one.</p>

        <pre><code>function identity<T>(arg: T): T {
  return arg;
}</code></pre>

        <h2 id="conditional">Conditional Types</h2>
        <p>Conditional types help you describe relation between the types of inputs and outputs.</p>
      `,
      tableOfContents: [
        { id: 'introduction', title: 'Introduction to Advanced Types', level: 2 },
        { id: 'intersection', title: 'Intersection Types', level: 2 },
        { id: 'union', title: 'Union Types', level: 2 },
        { id: 'generics', title: 'Generics', level: 2 },
        { id: 'conditional', title: 'Conditional Types', level: 2 },
      ],
    },
    '4': {
      id: '4',
      title: 'CSS Grid Layout Guide',
      author: { name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/150?img=9' },
      lastUpdated: '2023-05-28T00:00:00.000Z',
      readingTime: '9 min',
      category: 'CSS',
      tags: ['CSS', 'Web Design', 'Frontend'],
      content: `
        <h2 id="introduction">Introduction to CSS Grid</h2>
        <p>CSS Grid Layout is a two-dimensional layout system designed for user interface design. It lets you organize content into rows and columns.</p>

        <h2 id="basics">Grid Basics</h2>
        <p>To create a grid container, you set the display property to grid or inline-grid. All direct children of the grid container become grid items.</p>

        <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 10px;
}</code></pre>

        <h2 id="placement">Item Placement</h2>
        <p>You can place items precisely where you want them in the grid:</p>

        <pre><code>.item {
  grid-column: 1 / 3; /* Start at column 1 and span to column 3 */
  grid-row: 1 / 2; /* Start at row 1 and end at row 2 */
}</code></pre>

        <h2 id="responsive">Responsive Grids</h2>
        <p>CSS Grid makes it easy to create responsive layouts without media queries using features like auto-fill and minmax.</p>

        <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}</code></pre>
      `,
      tableOfContents: [
        { id: 'introduction', title: 'Introduction to CSS Grid', level: 2 },
        { id: 'basics', title: 'Grid Basics', level: 2 },
        { id: 'placement', title: 'Item Placement', level: 2 },
        { id: 'responsive', title: 'Responsive Grids', level: 2 },
      ],
    },
  }

  return pages[id] || null
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await getWikiPage(params.id)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }
  
  return {
    title: `${article.title} | DevWiki`,
    description: `Learn about ${article.title} in our developer wiki`,
  }
}

export default async function WikiPage({ params }: { params: { id: string } }) {
  const article = await getWikiPage(params.id)
  
  if (!article) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <p>The article you are looking for does not exist.</p>
        <Button asChild className="mt-4">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    )
  }

  const formattedDate = new Date(article.lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-9">
          <article className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none">
            <PageHeader
              heading={article.title}
              description=""
            />
            
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3Icon className="h-4 w-4" />
                <span>{article.readingTime} read</span>
              </div>
              <ViewCounter id={article.id} />
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">{article.category}</Badge>
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
            
            <Separator className="my-6" />
            
            <div
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="flex items-center justify-between mt-10 pt-6 border-t">
              <Button variant="outline" className="gap-2">
                <ThumbsUpIcon className="h-4 w-4" /> Helpful
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/wiki/${parseInt(article.id) - 1}`}>Previous</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/wiki/${parseInt(article.id) + 1}`}>Next</Link>
                </Button>
              </div>
            </div>
          </article>
          
          <Separator className="my-10" />
          
          <CommentSection articleId={article.id} />
        </div>
        
        <div className="lg:col-span-3">
          <div className="sticky top-20">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-medium mb-4">Table of Contents</h3>
              <TableOfContents toc={article.tableOfContents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}