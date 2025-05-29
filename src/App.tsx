import './App.css'
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function PortfolioPage() {
  const projects = [
    {
      title: "SQR - Windows Forms",
      description: "Versão original do teste técnico solicitado pela Sequor, desenvolvida em .NET C# com Windows Forms.",
      tech: [".NET", "Windows Forms", "C#"],
      github: "https://github.com/thiagopolycarpo/SQR-WindowsForm",
    },
    {
      title: "SQR - Backend",
      description: "API RESTful com Node.js e Express baseada no teste técnico da Sequor. Documentada com Swagger e pronta para Docker.",
      tech: ["Node.js", "Express", "Swagger", "Docker"],
      github: "https://github.com/thiagopolycarpo/SQR-Backend",
    },
    {
      title: "SQR - Frontend Angular",
      description: "Interface web moderna desenvolvida com Angular 16, consumindo a API do projeto SQR.",
      tech: ["Angular", "TypeScript", "RxJS"],
      github: "https://github.com/thiagopolycarpo/SQR-Frontend-Angular",
    },
    {
      title: "SQR - Frontend React",
      description: "Interface web moderna desenvolvida com React + Vite + TypeScript, consumindo a API do projeto SQR.",
      tech: ["React", "Vite", "TypeScript"],
      github: "https://github.com/thiagopolycarpo/SQR-Frontend-React",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4 md:p-10 text-gray-900 dark:from-gray-900 dark:to-gray-950 dark:text-gray-100">
      <section className="max-w-6xl mx-auto">
        {/* Seção Hero */}
        <div className="mb-16 text-center md:text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thiago Polycarpo</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Desenvolvedor Full Stack | .NET | Node.js | Angular | React
          </h2>
          <p className="text-center max-w-2xl mx-auto">
            Desenvolvedor com experiência em sistemas legados e modernos. Apaixonado por transformar lógica técnica em soluções reais.
          </p>
          <div className="mt-6 flex justify-center md:justify-right gap-4">
            <a href="https://github.com/thiagopolycarpo" target="_blank" rel="noreferrer">
              <Button variant="default" className="gap-2">
                <GithubIcon className="w-5 h-5" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/thiagopolycarpo" target="_blank" rel="noreferrer">
              <Button variant="outline" className="gap-2">
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>

        {/* Seção Projetos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-center">Projetos Destacados</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400 flex-grow">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2 justify-center">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs inline-flex items-center bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="mt-auto">
                    <Button variant="outline" className="inline-flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                      Ver no GitHub
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Seção Contato */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Vamos conversar!</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
          </p>
          <Button asChild>
            <a href="mailto:seu-email@example.com">Enviar Email</a>
          </Button>
        </section>
      </section>
    </main>
  );
}

// Componentes de ícones (você pode substituir por ícones de alguma biblioteca como lucide-react)
function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}