

function Banner(){
    let name = "HELLO FRIEND";
    let info = "let's start"
    return(
        <>
         <header>
        <div class="container">
            <div class="intro-text">
                <div class="intro-lead-in">{name}</div>
                <div class="intro-heading">Yes Mel, Ajmal, Chien, Junne maybe and Syok.</div>
                <a href="#services" class="page-scroll btn btn-xl">{info}</a>
            </div>
        </div>
    </header>
        </>
    )
}

export default Banner;