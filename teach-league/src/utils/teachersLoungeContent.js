// import Film from '../app/img/film-banner.png';
// import Epics from '../app/img/epics-banner.png';
// import Programming from '../app/img/programming-banner.png';
// import Survival from '../app/img/survive-the-world-banner.png';
import LoungeCard from './LoungeCard';
import SecretTeacher from '../app/img/The-Secret-Teacher.webp';
import '../App.css'
import { CardImg, CardText } from 'reactstrap';
import Rebuttal from '../app/img/moms-spaghetti.webp';

export const loungeData = [
  {
    title: <span >The Rebuttal</span>,
    image: <img className='lounge-card-image'
    src={Rebuttal} alt='The Rebuttal' />,
    content:
      < >
      What the teachers are saying. Teachers pushing back against the infantilization of the profession
 <div className='btnStyle col-8'>
          <a
            role='button'
            className='btn'
            href='https://www.cpr.org/2022/03/22/denver-public-schools-teachers-burnout-mental-health-pandemic/' target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          </div>
          </>
  },
  {
    title: <span >Secret Teacher</span>,
    image: <img
    src={SecretTeacher} alt='The Secret Teacher' />,
    content:
      < >
                 The Secret Teacher is an anonymous blog from <span style={{fontStyle: 'italic'}}>The Guardian</span> where teachers can tell it like it is.
 <div className='btnStyle col-8'>
          <a
            role='button'
            className='btn'
            href='https://www.theguardian.com/profile/the-secret-teacher' target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          </div>
          </>
  }
];