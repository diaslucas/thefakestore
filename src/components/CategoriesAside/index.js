import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './categoriesAside.scss';
import CategoriesMenu from '../CategoriesMenu';
import { filterProductByCategory } from '../../actions';

const mapStateToProps = state => ({
  categories: state.categories,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterProductByCategory }, dispatch);
}

class CategoriesAside extends PureComponent {
  render() {
    // eslint-disable-next-line no-shadow
    const { categories, filterProductByCategory } = this.props;
    return (
      <aside className="categorie-aside">
        <CategoriesMenu categories={categories} filterProducts={filterProductByCategory} />
      </aside>
    );
  }
}

CategoriesAside.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesAside);
