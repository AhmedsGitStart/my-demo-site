
import './Cards.css'
import Card from 'react-bootstrap/Card';
export const SkillsOfCard = ({ img, contain, button,title }) => {
    return (
        <>
            <div className="skillscards" id="skillsof">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='skills-info'>
                            <details>
                                <summary>Details</summary>
                                <p>{contain}</p>
                            </details>
                            </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}