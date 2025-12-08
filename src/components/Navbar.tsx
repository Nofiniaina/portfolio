function Navbar() {

    const navcontent = ["About", "Tools & Stack", "Skills", "Projects", "Contact"];

    return(
        <nav className="pb-4 text-xl flex justify-between border-b-2">
            <div>
                {'<Nofiniaina/>'}
            </div>
            <ul className="flex gap-4">
                {
                    navcontent.map((content, index)=> 
                        <li key={index}>
                            <span className="text-accent">{index+1}.</span> {content}
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default Navbar;