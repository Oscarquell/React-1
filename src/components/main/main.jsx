function MainMenu() {
    return (
        <div className='container'>
            <main>
                <div className="content-menu">
                    <div className="content image1"></div>
                    <div className="content image2"></div>
                    <div className="content image3"></div>
                </div>
                <h1>К Вашему вниманию наш видеоролик. Спорт это жизнь!</h1>
                <div className="video-window">
                    <iframe width="100%" height="320px" src="https://www.youtube.com/embed/-JUERJLrZ0M"
                            title="Мотивация на спорт. Реклама найк. Nike Боевой клич: просто сделай это" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </main>
        </div>
    )
}

export default MainMenu;