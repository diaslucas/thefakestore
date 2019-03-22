import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './categoriesAside.scss';
import CategoriesMenu from '../CategoriesMenu';

const mapStateToProps = state => ({
  categories: state.categories,
});

class CategoriesAside extends PureComponent {
  render() {
    const { categories } = this.props;
    return (
      <aside className="categorie-aside">
        <CategoriesMenu categories={categories} />
      </aside>
    );
  }
}

CategoriesAside.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(CategoriesAside);
