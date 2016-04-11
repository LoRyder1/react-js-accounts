this.RecordForm = React.createClass({
  getInitialState: function() {
    return { title: '', date: '', amount: '' }
  },

  handleChange: function(e) {
    var name = e.target.name;
    var value = e.target.value;
    console.log(value);
    this.setState({ name: e.target.value })
    console.log(value);
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
        <button type='submit' disabled={!this.valid}> Create record </button>
      </form>
    )
  }
});

