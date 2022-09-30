const LoungeCardList = () => {
    return (
        <div className='hearts-container'>
         {messages.map((message, index) => (
                <CandyColoredHeart key={index} msg={message} />
            ))}
        </div>
    );
};

export default LoungeCardList;