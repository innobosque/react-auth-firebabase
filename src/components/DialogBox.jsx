import PropTypes from 'prop-types';

export const DialogBox = ({message}) => {
  return (
    <div className="my-2 p-2 text-white bg-red-300 rounded">{message}</div>
  )
}

DialogBox.propTypes = {
  message: PropTypes.string.isRequired
}