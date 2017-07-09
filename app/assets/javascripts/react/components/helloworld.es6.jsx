class HelloWorld extends React.Component {
  popup() {
    window.alert("Congratulations we made it");
  }
  render() {
    return (
      <div>
      <RaisedButton label="HelloWorld" backgroundColor="red" onClick={this.popup}/>
      <h3>Hello Helping Hands!</h3>
      </div>
    )
  }
}
