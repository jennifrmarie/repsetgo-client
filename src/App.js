import React from 'react';
import './App.css';
import AppContext from './AppContext'
import Dashboard from './composition/Dashboard'
import { Link, Route } from 'react-router-dom';
import LandingPage from './composition/LandingPage'
import WorkoutForm from './composition/WorkoutForm'


export default class App extends React.Component {
  state = {
    term: '',
    items: [],
    selectedDays: [],
    selectedDay: '',
  }

  // componentDidMount() {
  //   Promise.all([
  //     fetch(`localhost3000/items`),
  //     fetch(`localhost3000/dates`)
  //   ])
  //     .then(([itemsRes, datesRes]) => {
  //       if (!itemsRes.ok)
  //         return itemsRes.json().then(e => Promise.reject(e))
  //       if (!datesRes.ok)
  //         return datesRes.json().then(e => Promise.reject(e))

  //       return Promise.all([
  //         itemsRes.json(),
  //         datesRes.json(),
  //       ])
  //     })
  //     .then(([items, dates]) => {
  //       this.setState({ items, dates })
  //     })
  //     .catch(error => {
  //       console.error({ error })
  //     })
  // }

  addItem = (item) => {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    })
  }

  removeItem = (id) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    })
  }

  editItem = (item) => {
    this.setState({
      items: this.state.items.map(i => i.id == item.id ? item : i)
    })
  }

  handleDateClicked = (index) => {
    // const index = e.target.getAttribute("data-index")
    let dates = this.state.selectedDays
    let date = dates[index]
    this.setState({
       index,
       term: '',
       items: [],
       selectedDays: date,
     })
     console.log(this.state.selectedDay)
  }

  setTerm = (term) => {
    this.setState({
      term,
    })
  }

  setReps = (reps) => {
    this.setState({
      reps,
    })
  }

  // setDay = (day) => {
  //   this.setState({
  //     selectedDay: day,
  //   })
  // }

  setDays = (days) => {
    this.setState({
      selectedDays: days,
    })
  }

  renderNavRoutes() {
    return (
    <>
    <Route
      path="/dashboard"
      component={Dashboard}
    />
    <Route 
      path='/'
      component={LandingPage}
    />
    <Route
      path='/add-workout'
      component={WorkoutForm}
    />
    <Route
      path='/edit-workout/:id'
      component={WorkoutForm}
    />
    </>
    )

  }

  render() {
    const value = {
      items: this.state.items,
      term: this.state.term,
      selectedDays: this.state.selectedDays,
      selectedDay: this.state.selectedDay,
      error: this.state.error,
      getItems: this.getItems,
      addItem: this.addItem,
      removeItem: this.removeItem,
      handleDateClicked: this.handleDateClicked,
      setTerm: this.setTerm,
      setDays: this.setDays,
      setDay: this.setDay,
      editItem: this.editItem,
    }

    return (
      <AppContext.Provider value={value}>
        <div className="App">
          <nav className='App__nav'></nav>
            <header className='App__header'>
              {/* <h1>
                <Link to='/dashboard' type='button' className='app-title'>Reppy, Set, GO!</Link>
                {' '}
              </h1> */}
            </header>
            <main className='App__main'>
              {this.renderNavRoutes()}
            </main>
          
        </div>
      </AppContext.Provider>
    )

  }

}
