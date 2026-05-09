
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Target, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - Gurpreet Kaur</title>
        <meta name="description" content="Learn about Gurpreet Kaur's teaching philosophy, background, and passion for education in Chemistry and English Linguistics." />
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
                  About me
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate educator dedicated to making complex subjects accessible and engaging for every student
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                      alt="Gurpreet Kaur - Professional educator"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                    Building confidence through knowledge
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    With extensive experience in both Chemistry and English Linguistics, I've developed a teaching approach that combines academic rigor with practical application. My goal is to help students not just memorize facts, but truly understand the underlying principles.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    I believe that every student has unique strengths and learning styles. By identifying these individual characteristics, I create personalized learning plans that build on existing knowledge while addressing areas that need improvement.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    My students consistently achieve their academic goals, whether preparing for exams, improving grades, or developing a deeper understanding of complex topics. I take pride in seeing them grow in confidence and capability.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-2xl p-6 shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Teaching philosophy</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Education should inspire curiosity and foster critical thinking. I create a supportive environment where questions are encouraged and mistakes become learning opportunities.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Student-centered approach</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Each lesson is tailored to individual needs, learning pace, and goals. I adapt my teaching methods to ensure every student can grasp concepts effectively.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card rounded-2xl p-6 shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-accent-foreground mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Passion for education</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Teaching is more than a profession—it's my calling. I'm committed to continuous learning and staying current with educational best practices.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
