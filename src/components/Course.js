import Header from  "./Header";
import Content from "./Content";



const Course = ({courses}) => {
 return (
    <div>
        <Header name={courses.name} />
        <Content parts={courses.parts} />
    </div>
 )
}


export default Course;