import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { IMAGES_URL } from '../../../config';
import Grid from '@material-ui/core/Grid';
import styles from './ProductCard.module.scss';

const Component = ({ className, _id, name, images, manufacturer, price }) => (
  <Grid item xs={10} sm={5} lg={3} className={clsx(className, styles.root)}>
    <NavLink exact to={`/product/${_id}`}>
      <Card>
        <CardMedia
          component="img"
          image={`${IMAGES_URL}/${images[0]}`}
          title={name}
        />
        <CardContent>
          <Typography component="h4">
            {manufacturer}
          </Typography>
          <Typography component="h3">
            {name}
          </Typography>
          <Typography component="p">
            {price}
          </Typography>
        </CardContent>
      </Card>
    </NavLink>
  </Grid>
);

Component.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  manufacturer: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductCard,
  // Container as Product,
  Component as ProductCardComponent,
};