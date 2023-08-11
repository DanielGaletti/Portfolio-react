import Header from '../header/header';
import './home.css';

function HomePage() {
    return (
        <>
            <Header />

            <section className="subtitle-content">
                <div>
                    <h3> About Me </h3>
                </div>
                <div >
                    <h2> Hello! My Name is </h2>
                    <div className="title-about">
                        <h2><span>Daniel Galetti!</span></h2>
                    </div>
                </div>

                <div>
                    <p className="div-content-one div-content"> Hey everyone! I Hope you are doing well!
                        My name is <b> Daniel Galetti </b> and  I am 25 Years Old.
                        I graduated in Computer Engineering, at a renowned university in Brasil, called Technology Federal University. 
                        <br /> <b>Look at me!</b> <br /><img src="./Daniel.jpeg" alt="This is Me!"/> </p>
                </div>
                <div>
                    <p className="div-content-two div-content"> I currently work at a company called <b> Gympass</b> like Software Engineering,
                    where I can use technologies like Javascript, HTML, CSS, React, Micro Frontend, Handlebars and Git. I Love learn about programming
                    languages - I like Java, but I'm not expert &#128517;, love create own projects to practice my hard skills, and love 
                    study about WAI-ARIA (Acessibility Web). This portfolio has been created using Acessibility Web and Mobile First techniques</p>
                </div>
                <div>
                    <p className="div-content-one div-content"> Now, talking about me, there are curiosities that I think its good for you to know: 
                     I have another graduation: Theology. Im Christian and a lead a local church (Methodist). I Play a lot of instruments - 8 instruments, 
                     and I can play 3 at sime time - sometimes I post on my instagram. Besides that, I love sports. I practise workout at gym everyday, but 
                     play table tennis and Volleyball 4 times a week. I love read - theology books, personal development and programming books. </p>
                </div>
                <div>
                    <p className="div-content-two div-content"> In a near future, I expected start my master's degree formation - I'm considering UI university, in Germany.
                    I like to travel, so I want to live a nomad life - knowing countries while work at home office. I'm studying to cambridge test - English is not my mother tongue,
                    so I need to study to try to take a test and get a good grade (I hope more than C1), to help me with this dream. </p>
                </div>
            </section>
        </>
    )
}

export default HomePage;