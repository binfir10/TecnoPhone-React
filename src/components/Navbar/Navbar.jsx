import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { SiRos } from 'react-icons/si';
import { CartContainer, LinkContainer, LogoStyled, NavContainer, NavIcon, NavegationNavbar } from './NavbarStyles.js';
import { closeMenu, toggleCart , toggleMenu} from '../../redux/cartSlice.js';
import ModalUser from './ModalUser/ModalUser.jsx';
import { FaShoppingCart } from 'react-icons/fa';
import CartModal from './ModalCart/CartModal.jsx';

const Navbar = () => {
  const isCartOpen = useSelector(state => state.cart.isCartOpen);
  const isMenuOpen = useSelector(state => state.cart.isMenuOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCartItemsQuantity = useSelector(state => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  )

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());

  };

  const handleToggleCart = () => {
    dispatch(toggleCart());

  };

  return (
  
      <NavContainer>
        

        {/* Logo */}
        <LogoStyled onClick={() => { handleCloseMenu(); navigate('/');  }}>
          <img src="https://res.cloudinary.com/dv4ukplcm/image/upload/v1687477081/Phone/logo_jexqwj.webp" alt="" />
        </LogoStyled>
        <NavegationNavbar>
          

          {/* Icono de menú hamburguesa */}
          <NavIcon onClick={handleToggleMenu}>
            <SiRos style={{ color: "white" }} />
          </NavIcon>


          {/* Icono del carrito */}
          <CartContainer onClick={handleToggleCart}>
            <FaShoppingCart style={{background: 'transparent'}} />
            <span>{totalCartItemsQuantity}</span>
          </CartContainer>


          {/* Navegación */}
          <LinkContainer open={isMenuOpen}>
            <li style={{background: 'transparent'}} >
          
                <NavLink to="/" style={{ fontWeight: "800"}} onClick={handleToggleMenu}>Home</NavLink>

          
            </li>
          <li style={{ background: 'transparent' }}>
        
                <NavLink to="/products" onClick={handleToggleMenu}>Productos</NavLink>

             

            </li>
          <li style={{ background: 'transparent' }}>
              
                <NavLink to="/contact" onClick={handleToggleMenu}>Contacto</NavLink>

            

            </li>
          <li style={{ background: 'transparent' }}>
           
                <ModalUser handleToggleMenu={handleToggleMenu} handleToggleCart={handleToggleCart} isCartOpen={isCartOpen} />

       

            </li>

          </LinkContainer>
          <CartModal isCartOpen={isCartOpen} handleClose={handleToggleCart}/>
        </NavegationNavbar>
      </NavContainer>

  );
};

export default Navbar;
