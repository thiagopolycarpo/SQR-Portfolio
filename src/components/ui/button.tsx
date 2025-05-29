import { cn } from "../../utils/cn"

export function Button({ children, variant = 'default', ...props }: any) {
  const base = "px-4 py-2 rounded-xl font-medium transition-all"
  const variants: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-200"
  }
  
  return (
    <button className={cn(base, variants[variant])} {...props}>
      {children}
    </button>
  )
}
