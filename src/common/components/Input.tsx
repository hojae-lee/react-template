import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = ({ label, error, className, ...props }: InputProps): JSX.Element => {
  const baseStyle = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
  const errorStyle = error ? 'border-red-500' : 'border-gray-300'
  const classes = `${baseStyle} ${errorStyle} ${className || ''}`

  return (
    <div className="mb-4">
      {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <input className={classes} {...props} />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}

export default Input
