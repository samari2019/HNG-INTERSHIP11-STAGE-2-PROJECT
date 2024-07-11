import "../newCollection.css";

function NewCollection() {
    return (
        <>
            <div className="New-Collection-h1">
                <h1>New Collection</h1>
            </div>

            <hr />

            {/* First Collection Container */}
            <div className="Collection-1">
                <div className="Zacro-description">
                    <h1>Zacro bag</h1>
                    <p>Sed et iaculis semper purus in risus egestas. Amet ultrices eu mattis
                        massa erat quam nisi gravida. Faucibus viverra imperdiet sem risus auctor
                         enim odio eros pulvinar. Felis morbi enim metus tristique vestibulum.
                          In eget morbi ut arcu amet. Feugiat proin dapibus dolor posuere tincidunt sodales diam.
                          Quam orci eu odio interdum. Nulla cum amet tincidunt id. Massa sapien arcu arcu fermentum.
                          Tortor in etiam elit sagittis.</p>

                    <a href="">Shop Now</a>
                </div>

                <div className="Zacro-bag">
                    <img src="../images/Zacro bag.jpg" alt="" />
                </div>

            </div>

            {/* Second Collection Container */}
            <div className="Collection-2">
                <div className="Zacro-bag2">
                    <img src="../images/Zacro bag2.jpg" alt="" />
                </div>

                <div className="Zacro-description">
                    <h1>Zacro bag</h1>
                    <p>Sed et iaculis semper purus in risus egestas. Amet ultrices eu mattis
                        massa erat quam nisi gravida. Faucibus viverra imperdiet sem risus auctor
                         enim odio eros pulvinar. Felis morbi enim metus tristique vestibulum.
                          In eget morbi ut arcu amet. Feugiat proin dapibus dolor posuere tincidunt sodales diam.
                          Quam orci eu odio interdum. Nulla cum amet tincidunt id. Massa sapien arcu arcu fermentum.
                          Tortor in etiam elit sagittis.</p>

                    <a href="">Shop Now</a>
                </div>

            </div>

            {/* Third Collection Container */}
            <div className="Collection-3">

                <div className="Zacro-description">
                    <h1>Zacro bag</h1>
                    <p>Sed et iaculis semper purus in risus egestas. Amet ultrices eu mattis
                        massa erat quam nisi gravida. Faucibus viverra imperdiet sem risus auctor
                         enim odio eros pulvinar. Felis morbi enim metus tristique vestibulum.
                          In eget morbi ut arcu amet. Feugiat proin dapibus dolor posuere tincidunt sodales diam.
                          Quam orci eu odio interdum. Nulla cum amet tincidunt id. Massa sapien arcu arcu fermentum.
                          Tortor in etiam elit sagittis.</p>

                    <a href="">Shop Now</a>
                </div>

                <div className="Zacro-bag2">
                    <img src="../images/Zacro bag3.png" alt="" />
                </div>
            </div>

            {/* Popular items section */}

            <h1 className="Popular-Items-h1">Popular Items</h1>

            <div className="Popular-Items-Container">

                <div className="Item-1">

                    <div className="Zaraco-bag1" >
                        <img src="../images/Zaraco bag1.png" alt="Zaraco Bag" />
                    </div>
                </div>

                <div className="Item-2"></div>
                <div className="Item-3"></div>
                <div className="Item-4"></div>
            </div>

            {/* Follow us on Instragram section */}
            <h1 className="Popular-Items-h1">Follow us on Instragram</h1>

            <div className="Instagram-photos">
                <div className="Instagram-photo1">
                    <img src="../images/instagram bag1.jpg" alt="Zaraco Bag" />
                </div>
                <div className="Instagram-photo1">
                    <img src="../images/instagram bag2.jpg" alt="Zaraco Bag" />
                </div>
                <div className="Instagram-photo1">
                    <img src="../images/instagram bag3.jpg" alt="Zaraco Bag" />
                </div>
            </div>

            <div className="Home-container2">
                <h2 className="h2-1">Hawvey<span className="Span-1"> Carry elegance everywhere</span></h2>
            </div>
        </>
    )
}

export default NewCollection
