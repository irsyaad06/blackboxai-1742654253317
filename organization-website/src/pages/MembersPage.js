import { motion } from 'framer-motion';
import MemberCard from '../components/MemberCard';

const MembersPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#0A0F30] mb-4">Our Team</h1>
          <p className="text-xl text-gray-600">
            Meet the talented individuals who make our organization great
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    description: 'Visionary leader with over 15 years of experience in technology and innovation.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
    description: 'Tech enthusiast and strategic thinker driving our technological advancement.',
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Design',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    description: 'Creative professional with a passion for user-centered design.',
  },
  {
    name: 'Sarah Williams',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    description: 'Expert developer specializing in full-stack development and cloud architecture.',
  },
  {
    name: 'David Brown',
    role: 'Marketing Director',
    image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg',
    description: 'Strategic marketer with a track record of successful campaigns and brand building.',
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
    description: 'Experienced product manager focused on delivering exceptional user experiences.',
  },
];

export default MembersPage;