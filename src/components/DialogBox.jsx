import PropTypes from 'prop-types';

export const DialogBox = ({ message }) => {
  return (
    <div
      data-testid="dialog-box"
      className="dialog-box my-2 p-2 text-white bg-red-300 rounded"
      role="alert">
      {message}
    </div>
  )
}

DialogBox.propTypes = {
  message: PropTypes.string.isRequired
}