// import Film from '../app/img/film-banner.png';
// import Epics from '../app/img/epics-banner.png';
// import Programming from '../app/img/programming-banner.png';
// import Survival from '../app/img/survive-the-world-banner.png';
import SecretTeacher from '../app/img/secretteacher.jpeg';
import '../App.css';

export const loungeData = [
  {
    icon: <span className='icons'>📽</span>,
    title: <span ><span id='icon'>📽</span> Secret Teacher</span>,
    // <CardImg src="https://ichef.bbci.co.uk/images/ic/640xn/p08vy7s8.jpg"></CardImg>
                // <CardText>The Secret Teacher is an anonymous blog from <span style={{fontStyle: 'italic'}}>The Guardian</span> where teachers can tell it like it is.</CardText>
    image: <img 
    // className="classImage mx-auto d-none d-xxl-block" 
    src={SecretTeacher} alt='Film banner' />,
    content:
      < >
 <div className='col-12'>
          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://www.theguardian.com/profile/the-secret-teacher' target="_blank" rel="noopener noreferrer">
            Read More
          </a>
                      
            <a role='button' className='btn btn-light btn-link'
            href='https://classroom.google.com/u/1/c/NDk3NTAxMzY5NjMw' target="_blank" rel="noopener noreferrer">
            📚 Classroom Page
          </a>
          </div>
          </>
  }
];