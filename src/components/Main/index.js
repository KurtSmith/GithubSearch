import './index.css'
import { ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { GithubContext } from '../../context';
import ErrorFallback from '../../ErrorHandling';
import RefineSearch from '../RefineSearch';
import Paging from '../Paging';


const NoResults= () => {
    return (
        <Card className='noResults'>
            <Card.Body>Your search returned no results.</Card.Body>
        </Card>
    )
}

export default function Main() {
    const [state] = useContext(GithubContext);

    return (
        state.error === '' ?
            <>
                {state.results.length > 0 &&
                    <RefineSearch />
                }
                <div id="main">
                    {state.empty === true ?
                        <NoResults/>
                        :
                        <article>
                            <ListGroup className="detailList" data-testid="detailList">
                                {state.results.map((result) => (
                                    <Card key={result.id}>
                                        <Card.Img variant="top" src={`${result.owner.avatar_url}/100px180`} className='cardImage' />
                                        <Card.Body>
                                            <Card.Title> <Link to={{
                                                pathname: "/details",
                                                search: "",
                                                hash: "#",
                                                state:
                                                {
                                                    fullName: result.full_name,
                                                    description: result.description,
                                                    language: result.language,
                                                    owner: result.owner.login,
                                                    avatar: result.owner.avatar_url,
                                                    stars: result.stargazers_count
                                                }
                                            }}>{result.full_name}</Link></Card.Title>
                                            <Card.Text>
                                                {result.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>))}
                            </ListGroup>
                        </article>}
                </div>
                {state.results.length > 0 &&
                    <Paging />
                }
            </>
            : <ErrorFallback error={state.error} />
    )
}