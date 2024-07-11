import "../footer.css";
function Footer() {
    return (
        <>
            <div className="Footer-Container">

                <div className="footer-sub-container-1">
                    <h2>Hawvey</h2>
                    <p>No 12 Alongo street, off Uzoba road
                     +234-703-3578-111</p>
                </div>

                <div className="footer-sub-container-2">
                    <a href="">Sales</a>
                    <a href=" http://localhost:3000/NewCollection">Catalog</a>
                    <a href="">Contact</a>

                </div>

                <div className="footer-sub-container-3">
                    <h2>Subscribe to Newsletter</h2>
                    <input className="email" type="email" name="" placeholder="Email  " />
                </div>

            </div>
        </>
    )
}

export default Footer
