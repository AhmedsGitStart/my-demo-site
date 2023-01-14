import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Footer = () => {
    return (
        <>
            <Card bg="dark text-white" variant="dark">
                <Card.Header>Khubaib.in</Card.Header>
                <Card.Body>
                    <Card.Title>Front-End Developer</Card.Title>
                    <Card.Text>
                        Technical Skills Are Html5 , Css3 , JavaScript , ES6 , React Js ,Readux , Bootstrap , Tailwind css , GitHub , V.S Code . <br />
                        Open for new technologies, challenges and quickly. <br />
                        Ability to deliver a quality product on time and ability to work on challenging environment.
                    </Card.Text>
                    <Button variant="primary" href='/'>Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}