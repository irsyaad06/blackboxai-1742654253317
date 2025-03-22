import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TimelineItem = ({ date, title, description, isLeft }) => {
  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} w-full items-center justify-center`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-5/12"
      >
        <div className={`p-4 rounded-lg bg-white shadow-lg ${isLeft ? 'text-left' : 'text-right'}`}>
          <div className="text-sm text-blue-600 font-semibold mb-2">{date}</div>
          <h3 className="text-lg font-bold text-[#0A0F30] mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>

      <div className="w-2/12 flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-4 h-4 bg-blue-600 rounded-full"
        />
      </div>

      <div className="w-5/12" />
    </div>
  );
};

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLeft: PropTypes.bool.isRequired,
};

export default TimelineItem;