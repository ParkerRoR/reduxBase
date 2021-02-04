import React, {Component} from 'react'
import autobind from 'class-autobind'
import {connect} from 'react-redux'

const mapStateToProps = ({data: {initialState,loading_initialState}, dispatch}) => {
  return{
      initialState,
      loading_initialState,
      dispatch
  }
}


class app extends Component {

  constructor(props){
    super(props)
    autobind(this)
  }


  componentDidMount(){
    if(!this.props.initialState){
      this.props.dispatch({
        type: 'data/INITIAL_STATE'
      })
    }

  }

  getDados(){
    this.props.dispatch({ type : 'data/SET_STATE', payload : {
      initialState: {...this.props.initialState, chave : 'value'}
    }})
  }

  changeLocation(){

    this.props.dispatch({
      type: 'data/SET_STATE', payload: {
        initialState: {...this.props.initialState, location:'Rio de janeiro'}

      }
    })
  }


  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={() => this.changeLocation()}>Enviar</button>
        <button onClick={() => console.log(this.props)}>LOG REDUX</button>
        <button onClick={() => this.getDados()}>Envia dados</button>
        {this.props.initialState.location}
        <ul></ul>
        <button onClick={() => this.props.history.push('/qualquer')}>trocar de pagina -> qualquer</button>



        <button onClick={() => console.log(this.props.initialState)}>log do redux initial state</button>

      </div>
    )
  }
}


export const App = connect(mapStateToProps)(app)
export default App;
