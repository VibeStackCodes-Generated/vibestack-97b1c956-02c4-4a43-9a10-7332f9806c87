import { motion } from 'framer-motion';
import { Code2, Server, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    icon: Code2,
    title: 'Frontend',
    description: 'React, TypeScript, Next.js, Tailwind CSS, and modern UI frameworks.',
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Node.js, Python, PostgreSQL, REST APIs, and GraphQL.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Figma, responsive design, accessibility, and design systems.',
  },
  {
    icon: Zap,
    title: 'DevOps',
    description: 'AWS, Docker, CI/CD pipelines, and performance optimization.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">About Me</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Passionate about building great software</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src="https://img.vibestack.site/s/developer%20workspace%20dark%20setup/600/400"
                alt="Developer workspace with dark setup"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a full-stack developer based in San Francisco with over 5 years of experience
              building web applications that people love to use. I specialize in React ecosystems
              on the frontend and Node.js on the backend, with a strong focus on clean architecture
              and developer experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring hiking trails, experimenting with
              new coffee brewing methods, or contributing to open-source projects. I believe
              great software is built at the intersection of technical excellence and empathetic design.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Figma'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <skill.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
