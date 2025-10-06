"use client"

// Button Component
export function Button({ children, className = "", variant = "default", size = "default", onClick, ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    outline: "border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500 bg-transparent",
    ghost: "text-green-700 hover:bg-green-50 hover:text-green-800",
  }

  const sizes = {
    sm: "px-3 py-2 text-sm",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
