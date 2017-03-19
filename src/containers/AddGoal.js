import { connect } from 'react-redux'
import { addGoal } from '../actions'
import AddGoal from '../components/AddGoal'

const mapDispatchToProps = (dispatch) => {
  return {
    addGoal: (title) => {
      dispatch(addGoal(title))
    }
  }
}

const AddGoalContainer = connect(
  null,
  mapDispatchToProps
)(AddGoal)

export default AddGoalContainer
