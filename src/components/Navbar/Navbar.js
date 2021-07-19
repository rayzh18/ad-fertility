import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse'
import img_logo from '../../assets/images/logo.svg';
import img_dropdown_arrow_icon from '../../assets/images/dropdown-arrow.svg';
import img_contact_location from '../../assets/images/location.svg';
import img_contact_phone from '../../assets/images/phone.svg';
import { useHistory } from "react-router-dom";

const Navbar = (props) => {

    const [mobile_menu_open, setMobileMenuOpen] = useState(false);
    const [mobile_sub_menu_service_open, setMobileSubMenuServiceOpen] = useState(false);
    const [mobile_sub_menu_about_open, setMobileSubMenuAboutOpen] = useState(false);
    const [contact_modal_open, setContactModalOpen] = useState(false);

    const history = useHistory();

    const close_mobile_menu = (event) => {
        event.preventDefault(); 
        setMobileMenuOpen(false); 
    }

    useEffect(() => {
        console.log('hello >>>>')
        if(props.modalStatus)
            setContactModalOpen(true)
    }, [props.modalStatus])

    return (
        <div className="header-nav">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="navigation">
                            <nav className="navbar navbar-expand-lg navbar-light "> <a onClick={(e) => { e.preventDefault(); history.push('/') }} className="navbar-brand" href="#"> <img src={img_logo} alt="Logo" /> </a>
                                <button onClick={() => setMobileMenuOpen(!mobile_menu_open)} className={(mobile_menu_open ? 'active ' : '') + "navbar-toggler collapsed"} type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation"> <span className="toggler-icon"></span> <span className="toggler-icon"></span> <span className="toggler-icon"></span> </button>
                                <Collapse in={mobile_menu_open}>
                                    <div className={(mobile_menu_open ? 'show ' : '') + "navbar-collapse sub-menu-bar collapse"} id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item active"> <a onClick={(e) => { e.preventDefault(); setMobileSubMenuServiceOpen(!mobile_sub_menu_service_open) }} className="nav-link" href="">Services <img src={img_dropdown_arrow_icon} alt="" /></a>
                                                <Collapse in={mobile_sub_menu_service_open}>
                                                    <ul className="sub-menu" style={mobile_sub_menu_service_open ? { display: 'block' } : {}}>
                                                        <li className=""><a target="_blank" href='/emclass'>emClass</a></li>
                                                        <li className=""><a target="_blank" href="https://emborrow.com/">emBorrow</a></li>
                                                    </ul>
                                                </Collapse>
                                            </li>
                                            <li className="nav-item"> <a onClick={(e) => { e.preventDefault(); setMobileSubMenuAboutOpen(!mobile_sub_menu_about_open) }} className="nav-link" href="#">About Us <img src={img_dropdown_arrow_icon} alt="" /></a>
                                                <Collapse in={mobile_sub_menu_about_open}>
                                                    <ul className="sub-menu" style={mobile_sub_menu_about_open ? { display: 'block' } : {}}>
                                                        <li><a onClick={(e) => { close_mobile_menu(e); history.push('/why-us') }} href="#">Why emHealth</a></li>
                                                        <li><a onClick={(e) => { e.preventDefault(); setContactModalOpen(true) }}>Contact Us</a></li>
                                                    </ul>
                                                </Collapse>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Modal 
                dialogClassName='contact-modal-content'
                centered
                show={contact_modal_open}
                animation={true}
                onHide={() => {setContactModalOpen(false)}}
            >
                <div className='contact-modal-contain'>
                    <div className='header'>
                        <div className='close-button' onClick={() => setContactModalOpen(false)}>
                            Close
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-5 title'>
                            Contact Us
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-5 contact-info'>
                            <div className='contact-info-item'>
                                <img src={img_contact_location}></img>
                                <div className='description'>
                                    2100 Sanders Rd – Suite 200
                                    Northbrook, IL 60062
                                </div>
                            </div>
                            <div className='contact-info-item'>
                                <img src={img_contact_phone}></img>
                                <div className='description'>
                                    1-866-3-EMBRYO
                                    1-866-336-2796
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className='input-item'>
                                <div className='label'>
                                    Name
                                </div>
                                <div className='input-name-contain'>
                                    <input type='text' className='input-element' placeholder='First Name'></input>
                                    <input type='text' className='input-element' placeholder='Last Name'></input>
                                </div>
                            </div>
                            <div className='input-item'>
                                <div className='label'>
                                    Email
                                </div>
                                <input type='email' className='input-element' placeholder='Enter Email'></input>
                            </div>
                            <div className='input-item'>
                                <div className='label'>
                                    Subject
                                </div>
                                <input type='text' className='input-element' placeholder='Enter Subject'></input>
                            </div>
                            <div className='input-item'>
                                <div className='label'>
                                    Message
                                </div>
                                <textarea className='input-element text-area' placeholder='Enter Message'>
                                </textarea>
                            </div>
                            <div className='submit-button'>
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Navbar;