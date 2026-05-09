
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ExperienceCard from '@/components/ExperienceCard.jsx';

const ExperiencesPage = () => {
  const experiences = [
    {
      date: '2019 - Present',
      title: 'Private tutor',
      institution: 'Independent practice',
      description: 'Providing personalized tutoring services in Chemistry and English Linguistics to students from diverse academic backgrounds. Developed custom curriculum materials and achieved a 94% student satisfaction rate.',
      skills: ['Chemistry', 'English Linguistics', 'Curriculum design', 'Student assessment']
    },
    {
      date: '2017 - 2019',
      title: 'Chemistry instructor',
      institution: 'Riverside Academy',
      description: 'Taught advanced chemistry courses to high school students. Implemented innovative teaching methods that improved average test scores by 23% and increased student engagement in laboratory work.',
      skills: ['Organic chemistry', 'Laboratory instruction', 'Exam preparation', 'Student mentoring']
    },
    {
      date: '2015 - 2017',
      title: 'English Linguistics teaching assistant',
      institution: 'Metropolitan University',
      description: 'Assisted professors with undergraduate linguistics courses. Conducted tutorial sessions, graded assignments, and provided one-on-one support to students struggling with complex linguistic concepts.',
      skills: ['Phonetics', 'Syntax', 'Semantics', 'Academic writing']
    }
  ];

  const qualifications = [
    {
      date: '2015',
      title: 'Master of Science in Chemistry',
      institution: 'Metropolitan University',
      description: 'Specialized in organic chemistry with research focus on sustainable synthesis methods. Graduated with distinction and published two peer-reviewed papers.',
      skills: ['Research methodology', 'Analytical chemistry', 'Scientific writing']
    },
    {
      date: '2014',
      title: 'Bachelor of Arts in English Linguistics',
      institution: 'State University',
      description: 'Comprehensive study of language structure, phonology, morphology, and sociolinguistics. Completed honors thesis on language acquisition patterns.',
      skills: ['Linguistic analysis', 'Language theory', 'Research design']
    },
    {
      date: '2020',
      title: 'Certified educator',
      institution: 'National Teaching Board',
      description: 'Professional teaching certification with specialization in secondary education. Completed advanced training in differentiated instruction and assessment strategies.',
      skills: ['Pedagogy', 'Classroom management', 'Educational psychology']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Experiences - Gurpreet Kaur</title>
        <meta name="description" content="Explore Gurpreet Kaur's professional teaching experience, qualifications, and certifications in Chemistry and English Linguistics education." />
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
                  Professional experience
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Years of dedicated teaching and continuous professional development in Chemistry and English Linguistics
                </p>
              </motion.div>

              <div className="mb-20">
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-8">
                  Teaching experience
                </h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <ExperienceCard
                      key={index}
                      date={exp.date}
                      title={exp.title}
                      institution={exp.institution}
                      description={exp.description}
                      skills={exp.skills}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-8">
                  Education & certifications
                </h2>
                <div className="space-y-6">
                  {qualifications.map((qual, index) => (
                    <ExperienceCard
                      key={index}
                      date={qual.date}
                      title={qual.title}
                      institution={qual.institution}
                      description={qual.description}
                      skills={qual.skills}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-20 bg-muted rounded-2xl p-8 md:p-12"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">7+</div>
                    <div className="text-sm text-muted-foreground">Years teaching</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">247</div>
                    <div className="text-sm text-muted-foreground">Students taught</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">94%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction rate</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2</div>
                    <div className="text-sm text-muted-foreground">Subject areas</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ExperiencesPage;
