import PropTypes from "prop-types";
import '../styles/inbox.css'

const Inbox = ({ dummyList }) => {

  return (
    <>
      {
        (dummyList.map((item, index) => (
          <div className="application" key={index}>
            <div className="label">{item.label}</div>
            <div className="details">
              <div className="date">{item.date}</div>
              <div className="stats">{item.status}</div>
            </div>
          </div>
        )
        ))

      };
    </>
  );
}
Inbox.propTypes = {
  dummyList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Inbox;