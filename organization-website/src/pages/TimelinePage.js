import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';

const TimelinePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#0A0F30] mb-4">Our Journey</h1>
          <p className="text-xl text-gray-600">
            Explore the key milestones that have shaped our organization
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={index}
                date={event.date}
                title={event.title}
                description={event.description}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const timelineEvents = [
  {
    date: 'January 2020',
    title: 'Organization Founded',
    description: 'Our journey began with a vision to transform the industry through innovation and collaboration.',
  },
  {
    date: 'June 2020',
    title: 'First Major Project',
    description: 'Successfully launched our flagship project, reaching over 10,000 users in the first month.',
  },
  {
    date: 'December 2020',
    title: 'Team Expansion',
    description: 'Welcomed talented individuals to our team, doubling our capacity for innovation.',
  },
  {
    date: 'March 2021',
    title: 'Industry Recognition',
    description: 'Received multiple awards for our contributions to technological advancement.',
  },
  {
    date: 'September 2021',
    title: 'Global Expansion',
    description: 'Established presence in multiple countries, bringing our solutions to a global audience.',
  },
  {
    date: 'January 2022',
    title: 'Community Milestone',
    description: 'Reached 100,000 active community members across our platforms.',
  },
  {
    date: 'June 2022',
    title: 'Innovation Hub Launch',
    description: 'Opened our first innovation hub, fostering collaboration and creativity.',
  },
  {
    date: 'Present',
    title: 'Continuing Growth',
    description: 'Continuously expanding our impact and working on exciting new initiatives.',
  },
];

export default TimelinePage;