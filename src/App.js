import React, {Component} from 'react'
import autobind from 'class-autobind'
import {connect} from 'react-redux'

const mapStateToProps = ({data: {initialState}, dispatch}) => {
  return{
      initialState,
      dispatch
  }
}

class app extends Component {
  constructor(props){
    super(props)
    autobind(this)
  }


  componentDidMount(){
    this.props.dispatch({
      type: 'data/INITIAL_STATE'
    })
  }

  getDados(){
    this.props.dispatch({ type : 'data/SET_STATE', payload : {
      initialState: {...this.props.initialState, chave : 'value'}
    }})
  }
  render() {
    return (
      <div>
        <input type="text" />
        <button >Enviar</button>
        <button onClick={() => console.log(this.props)}>LOG REDUX</button>
        <button onClick={() => this.getDados()}>Envia dados</button>
        <ul></ul>
      </div>
    )
  }
}


export const App = connect(mapStateToProps)(app)
export default App;
