import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import { bindActionCreators } from 'redux'

export class CategoryList extends Component {

  componentDidMount() {
    this.props.actions.getCategories()
  }
  render() {
    return (
      <div>CategoryList {this.props.categories.products.length}</div>
    )
  }
}

function mapSateToProps(state) {
  return {

    currentCategory: state.changeCategoryReducer,
    categories: state.getCategoriesReducer

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {

      getCategories: bindActionCreators(categoryActions.getCategories, dispatch)
    }

  }
}
export default connect(mapSateToProps, mapDispatchToProps)(CategoryList)


