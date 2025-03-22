import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const MemberCard = ({ name, role, image, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0A0F30] mb-2">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 flex space-x-3">
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MemberCard;