const TopEvents = () => {
    const handlerFooter = (value, e) => {
        e.preventDefault();
        alert(value);
    }

    return (
        <a href="/" 
        onClick={e => handlerFooter('Back To Home', e)}
        >
            Back to Home
        </a>
    );
};

export default TopEvents;