
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Beaker, BookOpen, Target, Users, Award, Lightbulb } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

const ServicesPage = () => {
  const services = [
    {
      icon: Beaker,
      title: 'Chemistry tutoring',
      description: 'Comprehensive chemistry instruction covering organic, inorganic, and physical chemistry. From basic concepts to advanced topics, I help students build a solid foundation and excel in their studies.'
    },
    {
      icon: BookOpen,
      title: 'English Linguistics tutoring',
      description: 'In-depth exploration of language structure, phonetics, syntax, and semantics. Perfect for students pursuing linguistics or looking to strengthen their understanding of English language mechanics.'
    },
    {
      icon: Target,
      title: 'Exam preparation',
      description: 'Focused preparation for school exams, standardized tests, and university entrance exams. Strategic study plans, practice materials, and test-taking techniques to maximize performance.'
    },
    {
      icon: Users,
      title: 'Personalized learning plans',
      description: 'Custom-designed curriculum based on individual learning styles, goals, and current knowledge level. Regular progress assessments ensure continuous improvement and adaptation.'
    },
    {
      icon: Award,
      title: 'Academic support',
      description: 'Ongoing assistance with homework, assignments, and projects. I provide guidance on research methods, writing skills, and critical analysis to develop well-rounded academic abilities.'
    },
    {
      icon: Lightbulb,
      title: 'Concept clarification',
      description: 'Dedicated sessions to address specific topics or concepts that students find challenging. Breaking down complex ideas into understandable components with real-world examples.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Gurpreet Kaur</title>
        <meta name="description" content="Explore tutoring services in Chemistry and English Linguistics, including exam preparation, personalized learning plans, and academic support." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Tutoring services
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive educational support designed to help you achieve academic excellence in Chemistry and English Linguistics
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    index={index}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center"
              >
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
                  Ready to start your learning journey?
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Get in touch to discuss your academic goals and how I can help you achieve them through personalized tutoring sessions.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
                >
                  Contact me
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
