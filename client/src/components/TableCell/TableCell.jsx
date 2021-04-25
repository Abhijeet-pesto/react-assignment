import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, BTN_TYPES } from "../Button/Button";
import { bookShift, cancelShift } from "../../slices";
import "./TableCell.css";

export const TableCell = ({
  shiftId,
  shiftTime,
  shiftArea,
  isShiftBooked,
  isShiftOverlapping,
}) => {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    if (isShiftBooked) {
      dispatch(cancelShift(shiftId));
    } else {
      dispatch(bookShift(shiftId));
    }
  };

  return (
    <div className="table-cell">
      <div className="shift-details">
        <div className="shift-time">{shiftTime}</div>
        {shiftArea && <div className="shift-area">{shiftArea}</div>}
      </div>
      <div className="shift-action">
        <Button
          btnType={isShiftBooked ? BTN_TYPES.CANCEL : BTN_TYPES.BOOK}
          onClick={onBtnClick}
          disabled={isShiftOverlapping}
        />
      </div>
    </div>
  );
};

TableCell.propTypes = {
  shiftId: PropTypes.string.isRequired,
  shiftTime: PropTypes.string.isRequired,
  shiftArea: PropTypes.string,
  isShiftBooked: PropTypes.bool.isRequired,
  isShiftOverlapping: PropTypes.bool.isRequired,
};

TableCell.defaultProps = {
  shiftArea: null,
};
