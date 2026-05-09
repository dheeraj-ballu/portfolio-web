
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Gurpreet Kaur</title>
        <meta name="description" content="Get in touch with Gurpreet Kaur for Chemistry and English Linguistics tutoring. Send a message or find contact information." />
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
                  Get in touch
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ready to start your learning journey? Send me a message and I'll get back to you within 24 hours
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-lg h-full">
                    <h2 className="text-2xl font-semibold mb-6">Send a message</h2>
                    <ContactForm />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-muted rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Send me an email anytime
                        </p>
                        <a
                          href="mailto:gurpreet.kaur@example.com"
                          className="text-sm text-primary hover:underline"
                        >
                          gurpreet.kaur@example.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Location</h3>
                        <p className="text-sm text-muted-foreground">
                          Online tutoring available worldwide
                        </p>
                        <p className="text-sm text-muted-foreground">
                          In-person sessions in select areas
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-accent-foreground shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Availability</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          Monday - Friday: 2:00 PM - 8:00 PM
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          Saturday: 10:00 AM - 6:00 PM
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Sunday: By appointment
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6">
                    <h3 className="font-semibold mb-3">What to expect</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Response within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Free initial consultation to discuss your goals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Personalized learning plan tailored to your needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Flexible scheduling options</span>
                      </li>
                    </ul>
                  </div>
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

export default ContactPage;
