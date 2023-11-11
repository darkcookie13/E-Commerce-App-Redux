// this navbar component represents a navigation bar with links to different pages, a humburger icon for mobile navigation and dynamic rendering according to user's status. 

// Import necessary dependencies and styles
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { authSelector, removeSessionThunk } from "../../Redux/Reducers/authReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faBagShopping, faCartShopping, faRightToBracket, faRightFromBracket, faStore } from '@fortawesome/free-solid-svg-icons';
import styles from "../../styles/navbar.module.css";

// Main Navbar component
export default function Navbar() {
    // Redux setup
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(authSelector);

    // State variables for mobile responsiveness
    const [showNavLinks, setShowNavLinks] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Function to toggle navigation links visibility
    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };

    // Effect hook to handle window resize events
    useEffect(() => {
        // Function to update isMobile state based on window width
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // JSX structure for the Navbar component
    return (
        <>
            <div className={styles.navbarContainer}>
                {/* Application name link */}
                <div className={styles.appName}>
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faStore}/>
                        .Anything Shop
                    </NavLink>
                </div>

                {/* Hamburger icon for mobile navigation */}
                <div
                    className={`${styles.hamburgerIcon} ${showNavLinks || !isMobile ? styles.hide : ''}`}
                    onClick={toggleNavLinks}
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>

                {/* Navigation links */}
                <div className={`${styles.navLinks} ${showNavLinks ? styles.show : ''}`}>
                    {/* Home link */}
                    <NavLink to="/">
                        <span>
                            <FontAwesomeIcon icon={faHouse} />
                            {/* Home */}
                        </span>
                    </NavLink>

                    {/* My Order link, visible when user is logged in */}
                    {isLoggedIn && (
                        <NavLink to="/myorder">
                            <span>
                                <FontAwesomeIcon icon={faBagShopping} />
                                {/* My Order */}
                            </span>
                        </NavLink>
                    )}

                    {/* Cart link, visible when user is logged in */}
                    {isLoggedIn && 
                        <NavLink to="/cart">
                            <span>
                                <FontAwesomeIcon icon={faCartShopping} />
                                Cart
                            </span>
                        </NavLink>
                    }

                    {/* Sign In/Sign Out link based on user login status */}
                    <NavLink to={!isLoggedIn ? "/signin" : "/"}>
                        <span>
                            {!isLoggedIn ? (
                                <>
                                    <FontAwesomeIcon icon={faRightToBracket} />
                                    SignIn
                                </>
                            ) : 
                                <>
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                    {/* SignOut */}
                                    <span onClick={() => dispatch(removeSessionThunk())}>SignOut</span>
                                </>
                            }
                        </span>
                    </NavLink>
                </div>
            </div>
            
            {/* Render nested routes */}
            <Outlet />
        </>
    );
}
