import { connect } from 'react-redux';
import { getEmployees, getSelectedEmp } from '../modules/Main';
import Main from '../components/Main';
import { getEmployeesList, getSelectedEmployee } from '../modules/Main/actions';

const mapStateToProps = state => ({
  employees: getEmployees(state),
  selectedEmp: getSelectedEmp(state),
});

const mapDispatchToProps = { getEmployeesList, getSelectedEmployee };

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
