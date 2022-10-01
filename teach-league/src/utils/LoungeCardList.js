import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const LoungeCardList = ({ icon, title, content, image }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="lounge-card-item">
      <div className="lounge-card-title" onClick={() => setIsActive(!isActive)}>
      <CardTitle>{icon}{title}{image}
      <span className='d-none d-md-block d-xxl-none' id='openCloseSymbols' style={{ color: 'red' }}>{isActive ? ' 🪐' : ' 🚀'}</span>
      </CardTitle>
      </div>
      <Card>
      <CardBody className="lounge-card-content-theme">
      {isActive && <div className="lounge-card-content" >{content}
      </div>}
      </CardBody>
      </Card>
    </div>
  );
};

export default LoungeCardList