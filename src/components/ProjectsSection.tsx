import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'CloudSync Dashboard',
    description:
      'A real-time cloud infrastructure monitoring dashboard with live metrics, alerting, and team collaboration features. Handles 10k+ events per second.',
    image: 'https://img.vibestack.site/s/dashboard%20dark%20analytics%20ui/600/400',
    tags: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Nomad Marketplace',
    description:
      'A peer-to-peer marketplace for digital nomads to buy and sell remote work essentials. Features secure payments, reviews, and real-time chat.',
    image: 'https://img.vibestack.site/s/ecommerce%20marketplace%20dark/600/400',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Pulse Fitness',
    description:
      'An AI-powered fitness tracking app that generates personalized workout plans and nutrition advice based on user goals and biometric data.',
    image: 'https://img.vibestack.site/s/fitness%20app%20dark%20mobile/600/400',
    tags: ['React Native', 'Python', 'TensorFlow', 'FastAPI'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'DevFlow CLI',
    description:
      'An open-source CLI tool that automates development workflows — scaffolding, testing, deployment, and documentation generation from a single config.',
    image: 'https://img.vibestack.site/s/terminal%20code%20dark%20screen/600/400',
    tags: ['Node.js', 'Go', 'Docker', 'GitHub Actions'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Projects</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Things I've built</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my skills across the full stack.
            Each one taught me something new.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="border-border hover:border-primary/50 gap-2" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground gap-2" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} /> Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
