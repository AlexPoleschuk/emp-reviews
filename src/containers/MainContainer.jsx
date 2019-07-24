import { connect } from 'react-redux';
import { getEmployees } from '../modules/Main';
import Main from '../components/Main';
import { getEmployeesList } from '../modules/Main/actions';

const mapStateToProps = state => ({
  employees: getEmployees(state),
});

const mapDispatchToProps = { getEmployeesList };

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
