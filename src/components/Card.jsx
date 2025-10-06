"use client"

// Card Components
export function Card({ children, className = "", onClick }) {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "" }) {
  return <div className={`p-6 pb-4 ${className}`}>{children}</div>
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
}

export function CardDescription({ children, className = "" }) {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>
}
