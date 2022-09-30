import '../App.css';
import '../features/SecretTeacher';

const LoungeCard = (props) => {
    return (
        <div className='loungeCard'>
            {/* <img className='loungeCard-img' src={HeartLogo} alt='heart' /> */}
            <p className='loungeCard-message'>{props.msg}</p>
        </div>
    );
};

export default LoungeCard;