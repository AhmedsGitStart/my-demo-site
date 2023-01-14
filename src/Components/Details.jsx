import './Details.css'


export const PersonalDetails = () => {
    return (
        <>
            <div className="main-persnol-details" id="Aboutme">
                <div className="heading">
                    <h1 className='containt-heading'><u > <span>About Me</span>  </u></h1>
                </div>
                <fieldset>
                    <legend>My Self</legend>
                    <label htmlFor="">Name :- Shaikh Khubaib Ahmed Shaikh Musataf </label> <br />
                    <label htmlFor="">City :- Mahoor , Dist.Nanded </label> <br />
                    <label htmlFor="">State :- Maharashtra</label> <br />
                    <label htmlFor="">Education : 1) School :- Annisa Urdu High School, Aurangabad <br />
                        2) Collage [11th & 12th] :- Maulana Azad Jr. Collage ,Aurangabad  <br />
                        3) U.G :- Kavayitri Bahinabai Chaudhari North Maharashtra University is a university situated in Jalgaon, Maharashtra.
                    </label>
                    <label htmlFor=""> Phone No :- 0123456789</label>
                </fieldset>
                <hr />
                <center className='myhoby'><h1><u> Hobbies </u></h1></center>
                <h2><u> Motorcycle Riding </u></h2>
                <div className="hobys">
                    <p>Grand adventures await those who are willing to turn the corner. You must be open to trying a new experience.  I had always wanted to ride a motorcycle but lived in fear to ride.  Part of my fear came from media images. Motorcyclists have been publicly profiled to be troublemakers and bad boys. <br />
                    Many Americans tend to reference motorcycle clubs and motorcyclist as nuisance.  I also became fearful due to the reports of motorcycle deaths and injuries. These stories influenced my beliefs; therefore, I believed riding a motorcycle was terrifying.</p>
                    <img src="https://media.istockphoto.com/id/1145262097/photo/pov-shot-of-young-man-riding-on-a-motorcycle-hands-of-motorcyclist-on-a-street.jpg?s=612x612&w=0&k=20&c=bjIhDkfZr8E9hVfvJgYqCKFa2zVmiV6qK3cmGRQ8ZOk=" alt="" style={{height:"300px"}} className="hobies-image-1" />
                </div>
                <hr />
                <h2><u> Car Riding </u></h2>
                <div className="hobys">
                <img src="https://img.freepik.com/premium-photo/safe-drive-speed-control-security-distance-road-driving-safely_61573-1811.jpg?w=2000" alt="" style={{height:"300px"}} className="hobies-image-2" />
                    <p>Car rides are great, long, relaxed and stress free. Sitting in the back, laid down, listening to music. You wonder can life get any better! As a kid, you might have hated car rides. They felt way too long and your parents would probably have to be annoyed by you saying “are we there yet?” As a child you would need to be occupied; you can’t stay still for a good two minutes without something to do. Sometimes car rides suck! If something dreadful happens, it leaves a mark on you forever, something that you will always remember. You will never forget.  <br />
                    Driving in the hills is full of thrills. The roads are steep and curvy. My father was very cautious here as driving up the hills is a bit tough.</p>
                </div>
                <hr />
            </div>
        </>
    )
}