import "./index.css";
function Checkout() {
    return (
        <>
            <section className="Checkout-Main-section ">
                <div className="Checkout-h1">
                    <h1>Checkout</h1>
                </div>
                <hr />
                <div className="Checkout-section">

                    <div className="Contact-details-container">
                        <h3>Contact details</h3>

                        <form method="POST">
                            <div className="Contact-detail">

                                <div className="First-Name-container">
                                    <label className="First-Name-Label">First Name</label>
                                    <input className="First-Name" type="text" name="" placeholder=" " />
                                </div>

                                <div className="Email-container">
                                    <label className="Email">Email</label>
                                    <input className="Email-address" type="email" name="" placeholder=" " />
                                </div>

                                <div className="Home-address-container">
                                    <label className="Home-Address-Label">Home address</label>
                                    <input className="First-Name" type="text" name="" placeholder=" " />
                                </div>
                            </div>
                            <div className="Contact-detail-2">
                                <div className="Last-Name-Container">
                                    <label className="Last-Name-Label">Last Name</label>
                                    <input className="last-Name" type="text" name="" placeholder=" " />
                                </div>

                                <div className="First-Name-container">
                                    <label className="Phone-number-Label">Phone number</label>
                                    <input className="phone-number" type="text" name="" placeholder=" " />
                                </div>

                                <div className="office-address-container">
                                    <label className="Office-address-Label">Office address</label>
                                    <input className="Office-address" type="text" name="" placeholder=" " />
                                </div>
                            </div>
                        </form>

                        <div className="delivery-method-container">
                            <h3>Delivery method</h3>

                            <div className="delivery-cont1">
                                <label>Express delivery</label>
                                <input className="delivery-input" type="text" name="" placeholder="Express delivery (1-2 days) $15 " />
                            </div>

                            <div>
                                <label>Standard delivery</label>
                                <input type="text" name="" placeholder="Standard delivery (5-7 days)  " />
                            </div>
                        </div>



                        {/* <div className="Shipping-details">
                            <h3>Shipping-details</h3>

                            <div className="Contact-detail">
                                <div className="First-Name-container">
                                    <label className="First-Name-Label">Country</label>
                                    <input className="First-Name" type="text" name="" placeholder=" " />
                                </div>

                                <div className="Email-container">
                                    <label className="Address">Address</label>
                                    <input className="Email-address" type="text" name="" placeholder=" " />
                                </div>
                            </div>

                            <div className="Contact-detail-2">
                                <div className="Last-Name-Container">
                                    <label className="Last-Name-Label">Postal Code</label>
                                    <input className="last-Name" type="text" name="" placeholder=" " />
                                </div>

                                <div className="First-Name-container">
                                    <label className="Phone-number-Label">City</label>
                                    <input className="phone-number" type="text" name="" placeholder=" " />
                                </div>
                            </div>
                        </div> */}


                        {/*
                            <div className="payment-details">
                                <h3>Payment details</h3>
                                <div>
                                    <label>Express delivery</label>
                                    <input type="text" name="" placeholder="Express delivery (1-2 days) $15 " />
                                </div>

                                <div className="Contact-detail">
                                    <div className="First-Name-container">
                                        <label className="First-Name-Label">Card type</label>
                                        <input className="First-Name" type="text" name="" placeholder=" " />
                                    </div>

                                    <div className="Email-container">
                                        <label className="Address">Card number</label>
                                        <input className="Email-address" type="text" name="" placeholder=" " />
                                    </div>
                                </div>

                                <div className="Contact-detail-2">
                                    <div className="Last-Name-Container">
                                        <label className="Last-Name-Label">Card name</label>
                                        <input className="last-Name" type="text" name="" placeholder=" " />
                                    </div>

                                    <div className="First-Name-container">
                                        <label className="Phone-number-Label">Cvv</label>
                                        <input className="phone-number" type="text" name="" placeholder=" " />
                                    </div>
                                </div>

                                <div>
                                    <label>Express delivery</label>
                                    <input type="text" name="" placeholder="Express delivery (1-2 days) $15 " />
                                </div>

                                <div>
                                    <label>Express delivery</label>
                                    <input type="text" name="" placeholder="Express delivery (1-2 days) $15 " />
                                </div>
                            </div>

                        </form>*/}
                    </div>

                    <div className="Cart-summary-2">
                        <div className="cart-main-container">
                            <div className="cart-summary-2">
                                {/* <div className="cart-sub-container-1"> */}
                                <div className="Zaraco-container-2">
                                    <div className="img-2">
                                        <img src="../images/yellow bag.jpg" alt="" />

                                    </div>
                                    <div className="yellow-bag-description2">
                                        <h3 className="h3-2">Zaroca</h3>
                                        <p className="Art-2">Art:234579</p>
                                        <p className="Colour2">Colour: lemon green</p>
                                        <p className="Quality2">Quality: premium luxuary</p>
                                    </div>

                                    <div className="price-container-2">
                                        <p className="price-2">$230.00</p>
                                    </div>
                                </div>
                                <div className="remove-container-2">
                                    <div className="add-con">
                                        <p className="sub"> - </p>
                                        <p className="num-1">1</p>
                                        <p classname="add"> + </p>
                                    </div>

                                    <div className="Remove-2">
                                        <h2>Remove</h2>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                            <div className="cart-summary-3">
                                <div className="Zaraco-container-2">
                                    <div className="img-2">
                                        <img src="../images/yellow bag.jpg" alt="" />

                                    </div>
                                    <div className="yellow-bag-description2">
                                        <h3 className="h3-2">Zaroca</h3>
                                        <p className="Art-2">Art:234579</p>
                                        <p className="Colour2">Colour: lemon green</p>
                                        <p className="Quality2">Quality: premium luxuary</p>
                                    </div>

                                    <div className="price-container-2">
                                        <p className="price-2">$230.00</p>
                                    </div>
                                </div>
                                <div className="remove-container-2">
                                    <div className="add-con">
                                        <p className="sub"> - </p>
                                        <p className="num-1">1</p>
                                        <p classname="add"> + </p>
                                    </div>

                                    <div className="Remove-2">
                                        <h2>Remove</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-summary-4">
                                <div className="Zaraco-container-2">
                                    <div className="img-2">
                                        <img src="../images/yellow bag.jpg" alt="" />

                                    </div>
                                    <div className="yellow-bag-description2">
                                        <h3 className="h3-2">Zaroca</h3>
                                        <p className="Art-2">Art:234579</p>
                                        <p className="Colour2">Colour: lemon green</p>
                                        <p className="Quality2">Quality: premium luxuary</p>
                                    </div>

                                    <div className="price-container-2">
                                        <p className="price-2">$230.00</p>
                                    </div>
                                </div>
                                <div className="remove-container-2">
                                    <div className="add-con">
                                        <p className="sub"> - </p>
                                        <p className="num-1">1</p>
                                        <p classname="add"> + </p>
                                    </div>

                                    <div className="Remove-2">
                                        <h2>Remove</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-summary-5"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout
