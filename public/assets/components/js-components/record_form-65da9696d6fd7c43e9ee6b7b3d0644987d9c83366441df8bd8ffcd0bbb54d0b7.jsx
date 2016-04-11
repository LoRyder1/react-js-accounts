this.RecordForm = React.createClass({
  getInitialState: function() {
    return { title: '', date: '', amount: '' };
  },

  handleChange: function(e) {
    var name = e.target.name;
    console.log(name);
    // this.setState({ name: e.target.value });
    this.setState({name: event.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
  },

  render: function() {
    return (
      <form className='form-inline' onSubmit={this.handleSubmit} >
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Date' name='date' 
              value={this.state.date} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Title' name='title'
              value={this.state.title} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <input type='number' className='form-control' placeholder='Amount' name='amount'
              value={this.state.amount} onChange={this.handleChange} />
        </div>
        <button type='submit'> Create record </button>
      </form>
    )
  }
});

