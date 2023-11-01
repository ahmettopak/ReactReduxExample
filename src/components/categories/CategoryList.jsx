import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import { bindActionCreators } from 'redux'
import { ListGroup, ListGroupItem } from 'reactstrap'

export class CategoryList extends Component {

  componentDidMount() {
    this.props.actions.getCategories()
    console.log(this.props.categories.products.length)
  }
  render() {
    return (
      <div>CategoryList
        <ListGroup>

          {this.props.categories.products.map(products => (<ListGroupItem key={products.id} > {products.category}</ListGroupItem>
          ))}
        </ListGroup>
      </div >
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


