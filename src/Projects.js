import transport from "./Images/transport.jpg";
import opt from "./Images/Opt.jpg";
import vet from "./Images/Vet.jpg";
import students from "./Images/student.jpg";
import covid from "./Images/covid.jpg";
const Projects = () => {
    return ( 
        <div className="projectsList">
            <h2>PROJECTS LIST</h2>
            <div className="project">
                <img src={transport} className="projectImage"/>
                <div className="projectDesc">
                    <p>Title: REALISATION OF A TRANSPORT MANAGEMENT SYSTEM</p>
                    <p>Tools: HTML , CSS JavaScript , React , NodeJS</p>
                    <p>Date: Current</p>
                </div>
            </div>

            <div className="project">
                <img src={opt} className="projectImage"/>
                <div className="projectDesc">
                    <p>Title: DEVELOPPEMT OF A LIBRARY FOR NON LINEAR OBTIMIZATION TOOLS </p>
                    <p>Tools: Python</p>
                    <p>Date: January 2022</p>
                </div>
            </div>

            <div className="project">
                <img src={vet} className="projectImage"/>
                <div className="projectDesc">
                    <p>Title: DEVELOPPEMENT OF INFORMATION SYSTEM :MANAGEMENT OF A GROUP OF VETERINARY CLINICS</p>
                    <p>Tools: Merise , ORACLE APEX</p>
                    <p>Date: January 2022</p>
                </div>
            </div>

            <div className="project">
                <img src={students} className="projectImage"/>
                <div className="projectDesc">
                    <p>Title: REALISATION OF A WEB APPLICATION TO MANAGE STUDENTS' ENROLLEMENT</p>
                    <p>Tools: HTML, CSS , JavaScript , PHP</p>
                    <p>Date: May 2021</p>
                </div>
            </div>

            <div className="project">
                <img src={covid} className="projectImage"/>
                <div className="projectDesc">
                    <p>Title: DEVELOPPEMT OF AN APPLICATION TO MANAGE COVID-19 PATIENTS</p>
                    <p>Tools: C,GTK+, Glade</p>
                    <p>Date: December 2020</p>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;