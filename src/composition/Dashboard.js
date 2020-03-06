import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import WorkoutList from './WorkoutList';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext'
import './Dashboard.css'

export default class Dashboard extends Component {
static contextType = AppContext

  handleWeekClick = (weekNumber, days, e) => {
    this.context.setDays(days)
  };

  // handleDayClick = (day, { selected }) => {
  //   this.setState({
  //     selectedDay: day,
  //   })
  // }

  handleDateClicked = (index) => {
  //  const index = e.currentTarget.getAttribute("data-index")
   this.context.handleDateClicked(index)
   this.props.history.push("/add-workout")
  }

render() {

    const { selectedDays, selectedDay } = this.context;
    
    const daysAreSelected = selectedDays.length > 0;
    const modifiers = {
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
      daysHighlighted: selectedDays,
    };
    const modifiersStyles = {
      daysHighlighted: {
        backgroundColor: 'white',
        color: 'black',
      },
      outside: {
        backgroundColor: 'black'
      }
    };
    let dates = this.context.selectedDays
  
    const Datelist = () => (
      <div>
      <ul className="date-selector">
        {dates.map((date, index) => 
        <li key={index} data-index={index} className="li-date" 
        onClick={e => this.handleDateClicked(index)}>
          {moment(date).format('MMM Do, YYYY')}
        </li>
        )}
      </ul>
      </div>
    );

    return (
      <div className="date-section">
        <h1>REPPY, SET, GO!</h1>
        <h3>click on a week to get started</h3>
        <div className="calendar">
        <DayPicker
          showWeekDays
          className="Selectable"
          selectedDays={this.context.selectedDays}
          onDayClick={this.handleDayClick} 
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          showWeekNumbers
          onWeekClick={this.handleWeekClick}

        />
        </div>
        {/* {this.state.selectedDays} */}
        <Datelist 
          />
      
      <div>

        {/* <Link to="/add-workout"> Add Workout </Link> */}
        </div>
      </div>

    );
  }
}