export type Project = {
    title: string;
    src: string;
    href: string;
    description: string;
    stack: string[];
}

export const projects: Project[] = [
    {
      title: "Macbook Mockup",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
      href: "#",
      description:
        "A mockup of a Macbook that showcases the product and its features",
      stack: ["React", "Next.js", "Tailwind CSS"],
    },

    {
      title: "Instant Feedback",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/animated-testimonials.webp",
      description:
        "An interactive feedback system that provides instant responses to user actions",
      href: "#",
      stack: ["Vue", "Nuxt.js", "Tailwind CSS"],
    },
    {
      title: "Apple Clone",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/apple-cards-carousel.png",
      description:
        "A clone of Apple's website that showcases their products and services",
      href: "#",
      stack: ["HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Flight Simulator",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/background-lines.webp",
      description:
        "A flight simulator that allows you to experience the thrill of flying over any location.",
      href: "#",
    stack: ["React", "Three.js", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/floating-dock.png",
      description:
        "A modern portfolio website showcasing my projects and professional experience",
      href: "#",
      stack: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Blog Platform",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/hero-sections.webp",
      description:
        "A full-featured blog platform with markdown support and responsive design",
      href: "#",
      stack: ["React", "Next.js", "Tailwind CSS"],
    },
  ];