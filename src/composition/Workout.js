export default class WorkoutForm extends Component {
    static defaultProps = {
        history: {
          push: () => { }
        },
      }
    static contextType = AppContext

    handleSubmit = (e) => {
        e.preventDefault()
        const item = {
            id: uuid(),
            name: e.target['name'].value,
            // reps: e.target['reps'].value,
            // sets: e.target['sets'].value,
            // weight: e.target['weight'].value,
            date: this.context.selectedDay,
        }

        this.context.addItem(item)

    fetch('http://localhost:3000/add-workout', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(item),
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(item => {
        //   this.context.addItem(item)
        //   this.props.history.push(`/add-workout`)
        })
        .catch(error => {
          console.error({ error })
        })
    }

    handleFormChange = (e) => {
        this.context.setTerm(e.target.value)
    }
    render() {
        return (
            <div class="workout-form">
                <h1>REPPY, SET, GO!</h1>
                <h2>{this.context.selectedDay.toString()}</h2>
                <NotefulForm onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label htmlFor='name-input'>
                            Name
                        </label>
                        <input onChange={this.handleFormChange} type='text' id='name-input' name='name' />
                    </div>
                    <div className='field'>
                        <label htmlFor='set-input'>
                            Sets
                        </label>
                        <textarea id='sets-input' name='sets' />
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>


                </NotefulForm>
                <WorkoutList
                    date={this.context.selectedDay} />
            </div>
        )
    }
}

function NotefulForm(props) {
    const { className, ...otherProps } = props
    return (
      <form
        className={['Noteful-form', className].join(' ')}
        action='#'
        {...otherProps}
      />
    )
  }
