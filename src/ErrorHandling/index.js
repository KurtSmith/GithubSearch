import {Card} from 'react-bootstrap';

export default function ErrorFallback({error, resetErrorBoundary}) {
    return (
       <Card
       bg='Danger'
       text='dark'
       style={{ width: '18rem' }}
       className="mb-2"
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