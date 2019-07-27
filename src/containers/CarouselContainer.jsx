import { connect } from 'react-redux';
import { getOpenForm } from '../modules/EmployeePage';
import openCloseForm from '../modules/EmployeePage/actions';
import Carousel from '../components/Carousel';

const mapStateToProps = state => ({
  openForm: getOpenForm(state),
});

const mapDispatchToProps = { openCloseForm };

const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Carousel);

export default CarouselContainer;
