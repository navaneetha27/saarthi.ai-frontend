class FlavorForm extends React.Component {
  

 

  handleSubmit(event) {
   
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          
        </label>
        <input type="file" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);
