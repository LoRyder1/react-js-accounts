# @RecordForm = React.createClass
#   getInitialState: ->
#     title: ''
#     date: ''
#     amount: ''

#   valid: ->
#     @state.title && @state.date && @state.amount

#   handleChange: (e) ->
#     name = e.target.name
#     @setState "#{ name }": e.target.value

#   handleSubmit: (e) ->
#     e.preventDefault()
#     $.post '', { record: @state }, (data) =>
#       @props.handleNewRecord data
#       @setState @getInitialState()
#     , 'JSON'

#   render: ->
#     React.DOM.form
#       className: 'form-inline'
#       onSubmit: @handleSubmit
#       React.DOM.div
#         className: 'form-group'
#         React.DOM.input
#           type: 'text'
#           className: 'form-control'
#           placeholder: 'Date'
#           name: 'date'
#           value: @state.date
#           onChange: @handleChange
#       React.DOM.div
#         className: 'form-group'
#         React.DOM.input
#           type: 'text'
#           className: 'form-control'
#           placeholder: 'Title'
#           name: 'title'
#           value: @state.title
#           onChange: @handleChange
#       React.DOM.div
#         className: 'form-group'
#         React.DOM.input
#           type: 'number'
#           className: 'form-control'
#           placeholder: 'Amount'
#           name: 'amount'
#           value: @state.amount
#           onChange: @handleChange
#       React.DOM.button
#         type: 'submit'
#         className: 'btn btn-primary'
#         disabled: !@valid()
#         'Create record'

#         




var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },
  render: function() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
});


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
