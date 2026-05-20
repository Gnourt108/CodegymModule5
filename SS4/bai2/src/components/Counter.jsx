import { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Số đếm: ${count}`
    }, [count])
  return (
     <div className="container py-4" style={{ maxWidth: '400px' }}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="mb-3">Counter</Card.Title>

          <h1 className="display-1 fw-bold mb-4">{count}</h1>

          <div className="d-flex justify-content-center gap-3">
            <Button variant="danger" onClick={() => setCount(count - 1)}>
              Giảm
            </Button>
            <Button variant="secondary" onClick={() => setCount(0)}>
              Reset
            </Button>
            <Button variant="success" onClick={() => setCount(count + 1)}>
              Tăng
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Counter
