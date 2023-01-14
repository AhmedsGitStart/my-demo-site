
import { CardsProp } from './Cardsprop'
import { PersonalDetails } from './Details'
import { Footer } from './Footer'
import './Welcome.css'
import { ContactMeWith } from './WithApi'


export const Welcome = () => {
    return (
        <>
        <div className='start-word'>
        <h1 className='first-heading'>Welcome ! <br />
        Welcome to the Site ...</h1>
        <PersonalDetails/>
        <CardsProp/>
        <ContactMeWith/>
        <Footer/>
        </div>
        
        </>
    )
}