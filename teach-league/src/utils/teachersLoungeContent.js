// import Film from '../app/img/film-banner.png';
// import Epics from '../app/img/epics-banner.png';
// import Programming from '../app/img/programming-banner.png';
// import Survival from '../app/img/survive-the-world-banner.png';
import LoungeCard from './LoungeCard';
import SecretTeacher from '../app/img/The-Secret-Teacher.webp';
import '../App.css'
import { CardImg, CardText } from 'reactstrap';

export const loungeData = [
  {
    icon: <span className='icons'>📽</span>,
    title: <span ><span id='icon'>📽</span> Secret Teacher</span>,
    image: <img 
    // className="classImage mx-auto d-none d-xxl-block" 
    src={SecretTeacher} alt='The Secret Teacher' />,
    content:
      < >
      {/* <CardImg src="https://ichef.bbci.co.uk/images/ic/640xn/p08vy7s8.jpg"></CardImg> */}
                 <CardText>The Secret Teacher is an anonymous blog from <span style={{fontStyle: 'italic'}}>The Guardian</span> where teachers can tell it like it is.</CardText>
 <div className='col-8'>
          <a
            role='button'
            className='btn btn-dark'
            href='https://www.theguardian.com/profile/the-secret-teacher' target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          </div>
          </>
  }
];