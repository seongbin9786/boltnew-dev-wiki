import { cn } from '@/lib/utils'

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  description?: string
  children?: React.ReactNode
}

export function PageHeader({
  heading,
  description,
  children,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  )
}