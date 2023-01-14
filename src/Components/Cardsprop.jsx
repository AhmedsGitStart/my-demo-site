import { SkillsOfCard } from './Cards'
import './Cards.css'
export const CardsProp = () => {
    return (
        <>
        <h1 id='heading-of-skills'><u>Skill's</u></h1>
           <div className="first-line-skill">
            <SkillsOfCard img="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg" title="HTML" contain="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript." /><br />
            <SkillsOfCard img="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" title="CSS" contain="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript." />
            </div> 
            <br />
            
            <div className="first-line-skill">
                <SkillsOfCard img="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png" title="React Js" contain="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies."/><br />

                <SkillsOfCard img="https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg" title="JavaScript" contain="JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS." />
            
            </div>
            <br />

            <div className="first-line-skill">
            <SkillsOfCard img="https://www.pngkey.com/png/detail/142-1424654_we-help-you-to-solve-any-issues-or.png" title="Bootstrap" contain="Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.Bootstrap 5 is the newest version of Bootstrap" /> <br />
            <SkillsOfCard img="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" title="GitHub" contain="GitHub, Inc. is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.Headquartered in California, it has been a subsidiary of Microsoft since 2018." />
            </div>
            <br />
            <div className="first-line-skill">
            <SkillsOfCard img="https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg" title="Tailwind" contain="Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of utility CSS classes that can be used to style each element by mixing and matching." />
            </div>
            <hr />
        </>
    )
}