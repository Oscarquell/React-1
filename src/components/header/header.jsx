function Header() {
    return (
        <header>
            <input type="input" className="searchInput" placeholder="Search"/>
            <button>Search</button>
            <div className="links">
                <a className="hLink" href="#">На главную</a>
                <a className="hLink" href="#">Категории</a>
                <a className="hLink" href="#">Выход</a>
            </div>
        </header>
    )
}

export default Header;