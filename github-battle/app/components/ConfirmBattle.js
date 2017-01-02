var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function puke (object) {
  return <pre>{JSON.stringify(object, null, '')}</pre>
}

function ConfirmBattle(props) {
  return props.isLoading === true
  ? <p> LOADING! </p>
  : <div className="jumbotron col-sm-12 text-center">
      <h1>Confirm Players</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-6'>
          <p className='lead'>Player 1</p>
          {puke(props.playersInfo[0])}
        </div>
        <div className='col-sm-6'>
          <p className='lead'>Player 2</p>
          {puke(props.playersInfo[1])}
        </div>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12'>
          <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
            START the BATTLE!
          </button>
        </div>
        <div className='col-sm-12'>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>
              Switch Players
            </button>
          </Link>
        </div>
      </div>
    </div>
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
