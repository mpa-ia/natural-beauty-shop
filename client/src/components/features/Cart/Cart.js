import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { getCart, getTotalPrice } from '../../../redux/cartRedux.js';
import { NavLink } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';
import styles from './Cart.module.scss';
import { countProductsInCart } from '../../../utils/countProductsInCart.js';
import Button from '@material-ui/core/Button';

const Component = ({ className, cart, total }) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={clsx(className, styles.root)}>
      <CardActions className={styles.head} disableSpacing>
        <ShoppingCartIcon color="secondary" />
        <span>{total} zł</span>
        <IconButton
          className={`${styles.expand} ${expanded ? styles.expandOpen : ''}`}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={styles.items}>
          {cart.products.length ? (cart.products.map(product => (
            <CartItem id={product._id} key={product._id} />
          ))) :
            (
              <small className={styles.noProducts}>
                <i>Brak produktów w koszyku</i>
              </small>
            )
          }
          <p>
            Podsumowanie zamówienia
          </p>
          <div className={styles.summary}>
            <span>ilość produktów:</span>
            <span>{countProductsInCart(cart.products)}</span>
          </div>
          <div className={styles.summary}>
            <span>Wartość zamówienia: </span>
            <span>{total} zł</span>
          </div>
          <Button disabled={cart.products.length ? false : true}>
            <NavLink className={styles.link} exact to="/order">
              Kontynuuj zamówienie
            </NavLink>
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.object,
  total: PropTypes.number,
};

const mapStateToProps = state => ({
  cart: getCart(state),
  total: getTotalPrice(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
