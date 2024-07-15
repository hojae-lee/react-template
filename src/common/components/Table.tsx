import { TableHTMLAttributes } from 'react'

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  headers: string[]
  data: any[][]
}

export const Table = ({ headers, data, className, ...props }: TableProps): JSX.Element => {
  const baseStyle = 'min-w-full divide-y divide-gray-200'
  const classes = `${baseStyle} ${className || ''}`

  return (
    <div className="overflow-x-auto">
      <table className={classes} {...props}>
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
