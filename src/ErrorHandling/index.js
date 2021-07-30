import {Card} from 'react-bootstrap';
import './index.css'

export default function ErrorFallback({error, resetErrorBoundary}) {
    return (
       <Card
       bg='Danger'
       text='dark'
       className="error"
     >
       <Card.Header>Uh oh, something is awry.</Card.Header>
       <Card.Body>
         <Card.Title>Error</Card.Title>
         <Card.Text>
         {error}
         </Card.Text>
       </Card.Body>
     </Card>
    )
  }