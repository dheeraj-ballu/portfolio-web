
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Beaker } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Gurpreet Kaur - Chemistry & English Linguistics Tutor</title>
        <meta name="description" content="Expert tutoring in Chemistry and English Linguistics. Personalized learning plans to help you achieve academic excellence." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1687600154329-150952c73169)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <Beaker className="w-4 h-4" />
                    <span>Professional tutoring services</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                    Master Science & Mathematics and English Linguistics with expert guidance
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                    I'm Gurpreet Kaur, a dedicated educator specializing in Chemistry and English Linguistics. With personalized teaching methods and years of experience, I help students build confidence and achieve their academic goals.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                      <Link to="/services">
                        Explore services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="transition-all duration-200 active:scale-[0.98]">
                      <Link to="/contact">
                        Get in touch
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <Beaker className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Chemistry expertise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive tutoring covering all chemistry topics with practical examples
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary mb-4">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Linguistics mastery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deep understanding of English Linguistics with structured learning approaches
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-accent-foreground mb-4">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Personalized plans</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tailored learning strategies designed to match your unique goals and pace
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

export default HomePage;
