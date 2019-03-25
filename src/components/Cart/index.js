import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';

const mapStateToProps = state => ({
  cart: state.cart,
});

class Cart extends PureComponent {
  render() {
    const { cart } = this.props;
    const { total, totalItems, items } = cart;
    return (
      <React.Fragment>
        <i className="fas fa-shopping-cart fa-lg" />
        {totalItems > 0
          && <Badge color="success">{totalItems}</Badge>
        }
      </React.Fragment>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.shape({
    total: PropTypes.number,
    totalItems: PropTypes.number,
    items: PropTypes.arrayOf(String),
  }).isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(Cart);
