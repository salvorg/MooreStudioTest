const Navbar = () => {
    const currentPath = window.location.pathname;

    return (
        <nav className="max-w-[430px] mx-auto px-8 py-3 bg-white rounded-2xl">
            <ul className="flex justify-between space-x-6 text-txtNavbar">
                <li className={currentPath === '/' ? 'text-txtOlive' : ''}>
                    <a href="/">Главная</a>
                </li>
                <li className={currentPath === '/about' ? 'text-txtOlive' : ''}>
                    <a href="/about">О нас</a>
                </li>
                <li className={currentPath === '/news' ? 'text-txtOlive' : ''}>
                    <a href="/news">Новости</a>
                </li>
                <li className={currentPath === '/catalog' ? 'text-txtOlive' : ''}>
                    <a href="/catalog">Каталог</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;