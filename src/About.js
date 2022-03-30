import image from "./Images/web.jpg";
const About = () => {
    return ( 
        <div className="About">
            <div className="aboutMe">
                <h2>Web development enthusiast</h2>
                <p>
                    My name is LANJRI Walid , I was born in the year 2000 and I live in Morocco,
                    I'm an engineering student at the National School for Computer Science 
                    (École nationale supérieure d'informatique et d'analyse des systèmes - ENSIAS in french).
                </p>
                <p>
                    Ever since I was a child,I was always close to computers thanks to my family,and day after that 
                    I find my self getting closer and closer to the IT world.Which led me to chose ENSIAS as an engineering
                    school after two years of preperatory classes.
                </p>
                <p>
                    In ENSIAS I was able to learn how computers works,by analysing in depth the diffrents levels of abstractions of a computer.
                    Ever since I worked on my year-end project in web development,I figured that I should learn and do more in this field,
                    because it's vaste and important domain , web application can be ran in all diffirents web platform due it power in computer science.
                </p>
            </div>
            <div className="image">
                <img src={image}/>
            </div>
        </div>
     );
}
 
export default About;