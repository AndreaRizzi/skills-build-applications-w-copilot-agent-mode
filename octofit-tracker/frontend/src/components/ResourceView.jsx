import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function formatValue(value) {
  if (value === null || value === undefined) return '—'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

export default function ResourceView({ title, description, endpoint, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchCollection(endpoint)
      .then((nextItems) => {
        if (active) {
          setItems(nextItems)
          setStatus('ready')
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError.message)
          setStatus('error')
        }
      })

    return () => {
      active = false
    }
  }, [endpoint])

  return (
    <section className="resource-panel">
      <div className="resource-heading">
        <div>
          <p className="eyebrow">Live collection</p>
          <h2>{title}</h2>
          <p className="muted">{description}</p>
        </div>
        <span className="count-badge">{items.length} records</span>
      </div>
      {status === 'loading' && <p className="state-message">Loading collection...</p>}
      {status === 'error' && <p className="state-message error-message">{error}</p>}
      {status === 'ready' && items.length === 0 && <p className="state-message">No records found.</p>}
      {status === 'ready' && items.length > 0 && (
        <div className="table-wrap">
          <table className="table align-middle">
            <thead>
              <tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id || item.id || index}>
                  {columns.map((column) => <td key={column.key}>{formatValue(item[column.key])}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
