
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const ExperienceCard = ({ date, title, institution, description, skills = [], index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="flex items-start justify-between gap-4 mb-2">
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <Badge variant="secondary" className="shrink-0">{date}</Badge>
          </div>
          {institution && (
            <p className="text-sm font-medium text-muted-foreground">{institution}</p>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-base leading-relaxed mb-4">{description}</p>
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
