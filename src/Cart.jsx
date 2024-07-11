import "./index.css";
import { NavLink } from 'react-router-dom';
function Cart() {
    return (
        <>
            <section className="Cart-main-container">
                <div className="Cart-h1">
                    <h1>Cart</h1>
                </div>

                <hr />

                <div className="cart-container-1">
                    <div className="cart-sub-container-1">

                        <div className="Zaraco-container-1">
                            <div className="img-1">
                                <img src="../images/yellow bag.jpg" alt="" />
                            </div>
                            <div className="yellow-bag-description">
                                <h3 className="h3-1">Zaroca</h3>
                                <p className="Art">Art:234579</p>
                                <p className="Colour">Colour: lemon green</p>
                                <p className="Quality">Quality: premium luxuary</p>
                            </div>

                            <div className="price-container-1">
                                <p className="price-1">$230.00</p>
                            </div>
                        </div>

                        <div className="remove-container-1">
                            <div className="add-con">
                                <p className="sub"> - </p>
                                <p className="num-1">1</p>
                                <p classname="add"> + </p>
                            </div>

                            <div className="Remove-1">
                                <h2>Remove</h2>
                            </div>
                        </div>
                    </div>

                    <div className="cart-sub-container-2A">
                        <div className="Cart-summary-container">
                            <h3 className="cart-sum-h3"> Cart Summary</h3>
                            <p>Subtotal <span>$690.00</span></p>
                            <p>Delivery cost <span>$70.00</span></p>
                            <p>Discount <span>$10.00</span></p>
                            <p>Estimated <span>$770.00</span></p>

                        </div>
                        <div className="Checkout-1">
                            <h3><NavLink className="NavLink checkout-link" to="/Checkout">Checkout </NavLink></h3>
                        </div>
                    </div>


                </div>


                {/* Second container */}

                <div className="cart-sub-container-2">
                    <div className="Zaraco-container-1">
                        <div className="img-1">
                            <img src="../images/yellow bag.jpg" alt="" />

                        </div>
                        <div className="yellow-bag-description">
                            <h3 className="h3-1">Zaroca</h3>
                            <p className="Art">Art:234579</p>
                            <p className="Colour">Colour: lemon green</p>
                            <p className="Quality">Quality: premium luxuary</p>
                        </div>

                        <div className="price-container-1">
                            <p className="price-1">$230.00</p>
                        </div>
                    </div>
                    <div className="remove-container-1">
                        <div className="add-con">
                            <p className="sub"> - </p>
                            <p className="num-1">1</p>
                            <p classname="add"> + </p>
                        </div>

                        <div className="Remove-1">
                            <h2>Remove</h2>
                        </div>
                    </div>
                </div>

                {/* Third container */}

                <div className="cart-sub-container-3">
                    <div className="Zaraco-container-1">
                        <div className="img-1">
                            <img src="../images/yellow bag.jpg" alt="" />

                        </div>
                        <div className="yellow-bag-description">
                            <h3 className="h3-1">Zaroca</h3>
                            <p className="Art">Art:234579</p>
                            <p className="Colour">Colour: lemon green</p>
                            <p className="Quality">Quality: premium luxuary</p>
                        </div>

                        <div className="price-container-1">
                            <p className="price-1">$230.00</p>
                        </div>
                    </div>
                    <div className="remove-container-1">
                        <div className="add-con">
                            <p className="sub"> - </p>
                            <p className="num-1">1</p>
                            <p classname="add"> + </p>
                        </div>

                        <div className="Remove-1">
                            <h2>Remove</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
