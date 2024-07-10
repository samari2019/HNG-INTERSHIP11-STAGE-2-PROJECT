import "../Pages/style.css";
function Home() {
    return (
        <>
            <section className="main-section">

                {/* First container */}
                <div className="Home-container1">

                    <div className="black-bag">
                        <img src="../images/black bag.jpg" alt="" />
                    </div>

                    <div className="Latest-collection">

                        <div className="latest-collection-content">
                            <h1>Latest Collection</h1>
                            <p>High-quality bags, carefully sorted to meet your aesthetic design
                             and functionality in everyday carry</p>
                        </div>

                        <div className="white-bag">
                            <img src="../images/white bag.jpg" alt="" />
                        </div>
                    </div>

                    <div className="brown-bag">
                        <img src="../images/brown bag.jpg" alt="" />
                    </div>
                </div>

                {/* second container */}
                <div className="Home-container2">
                    <h2 className="h2-1">Hawvey
                    <span className="Span-1"> Carry elegance everywhere</span>
                    </h2>
                </div>
            </section>
        </>
    )
}

export default Home
