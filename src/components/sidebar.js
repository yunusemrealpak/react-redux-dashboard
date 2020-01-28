import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Sidebar.scss';
import { Icon } from 'semantic-ui-react';
import { TweenMax } from 'gsap';
import LinkComponent from './link';

const Sidebar = props => {
    const { selectedItem } = useSelector(state => state.sidebarReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [open, setOpen] = useState(false);

    let sidebar = useRef(null);

    useEffect(() => {
        dispatch({ type: 'CHANGE_ITEM', payload: location.pathname });
        TweenMax.from(sidebar, .5, {
            x: -20,
            opacity: 0
        });
    }, []);

    function menuControl() {
        var value = open ? false : true;
        setOpen(value);
    }

    // Mini sidebar ın yönlendirme kodu
    // function login(route) {
    //     setOpen(false);
    //     history.push(route);
    // }

    const logout = () => {
        //TODO: Gerekli action işlemleri yapılacak.
        localStorage.clear();
        history.push("/");
    }

    // Sidebar ın li ler arası akışını sidebarReducer ile bu kodda sağlıyoruz.
    const selectMenuItem = (route) => {
        dispatch({ type: 'CHANGE_ITEM', payload: route })
    }

    return (
        <div>
            <div ref={el => { sidebar = el }} className="sidebar">
                <div className="first-block">
                    <div className="logo">
                        <span>LOGO</span>
                    </div>
                    <div className="line"></div>
                    <div className="list">
                        <ul>
                            <LinkComponent route="/dashboard">
                                <li className={`${selectedItem ==="/dashboard" ? "active" : ""}`} onClick={() => selectMenuItem("/dashboard")}>
                                    <div className={`list-item ${selectedItem ==="/dashboard" ? "active" : ""}`}>
                                        {selectedItem ==="/dashboard" ? <Icon name='tachometer alternate' /> : <Icon name='tachometer alternate' color="black" />}
                                        <span>Dashboard</span>
                                    </div>
                                </li>
                            </LinkComponent>
                            <LinkComponent route="/dashboard/products">
                                <li className={`${selectedItem ==="/dashboard/products" ? "active" : ""}`} onClick={() => selectMenuItem("/dashboard/products")}>
                                    <div className={`list-item ${selectedItem ==="/dashboard/products" ? "active" : ""}`}>
                                        {selectedItem ==="/dashboard/products" ? <Icon name='table' /> : <Icon name='table' color="black" />}
                                        <span>Products</span>
                                    </div>
                                </li>
                            </LinkComponent>
                            <LinkComponent route="/dashboard/favourites">
                                <li className={`${selectedItem ==="/dashboard/favourites" ? "active" : ""}`} onClick={() => selectMenuItem("/dashboard/favourites")}>
                                    <div className={`list-item ${selectedItem ==="/dashboard/favourites" ? "active" : ""}`}>
                                        {selectedItem ==="/dashboard/favourites" ? <Icon name='heart outline' /> : <Icon name='heart outline' color="black" />}
                                        <span>Favourites</span>
                                    </div>
                                </li>
                            </LinkComponent>
                            <LinkComponent route="/dashboard/orderlist">
                                <li className={`${selectedItem ==="/dashboard/orderlist" ? "active" : ""}`} onClick={() => selectMenuItem("/dashboard/orderlist")}>
                                    <div className={`list-item ${selectedItem ==="/dashboard/orderlist" ? "active" : ""}`}>
                                        {selectedItem ==="/dashboard/orderlist" ? <Icon name='list' /> : <Icon name='list' color="black" />}
                                        <span>Order Lists</span>
                                    </div>
                                </li>
                            </LinkComponent>
                        </ul>
                    </div>
                </div>
                <div className="second-block">
                    <div className="line"></div>
                    <div className="settings">
                        <ul>
                            <LinkComponent route="/dashboard/settings">
                                <li className={`${selectedItem ==="/dashboard/settings" ? "active" : ""}`} onClick={() => selectMenuItem("/dashboard/settings")}>
                                    <div className={`list-item ${selectedItem ==="/dashboard/settings" ? "active" : ""}`}>
                                        {selectedItem ==="/dashboard/settings" ? <Icon name='setting' /> : <Icon name='setting' color="black" />}
                                        <span>Settings</span>
                                    </div>
                                </li>
                            </LinkComponent>
                            <li onClick={logout}>
                                <div className="list-item">
                                    <Icon name='power off' />
                                    <span>Log Out</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`sidebar-shrink${open ? ' active' : ''}`}>
                <div className="nav-items">
                    <div>LOGO</div>
                    <div onClick={menuControl}>MENU</div>
                </div>
                <ul className={`${open ? 'active' : ''}`}>
                    <li>Dashboard</li>
                    <li>Products</li>
                    <li>Order Lists</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;