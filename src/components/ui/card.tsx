export function Card({ children, className = "", ...props }: any) {
  return (
    <div className={`bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-md ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = "", ...props }: any) {
  return (
    <div className={`text-sm ${className}`} {...props}>
      {children}
    </div>
  )
}
