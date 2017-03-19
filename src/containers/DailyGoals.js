import { connect } from 'react-redux'
import { fetchAllData } from '../actions'
import DailyGoals from '../components/DailyGoals'

const mapStateToProps = (state) => {
  return {
    goals: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllData: () => {
      dispatch(fetchAllData())
    }
  }
}

const DailyGoalsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyGoals)

export default DailyGoalsContainer
