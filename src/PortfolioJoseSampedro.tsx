import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Code2, Server, Boxes, Cloud, Shield, FileText } from "lucide-react";

// === Utilidades ===
const Section = ({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 lg:px-8 py-16 scroll-mt-24">
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground mt-2">
        {subtitle}
      </motion.p>
    )}
    <div className="mt-8">{children}</div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <Badge variant="secondary" className="rounded-2xl px-3 py-1 text-sm mr-2 mb-2">
    {children}
  </Badge>
);

// === Datos (extraídos de tu CV) ===
const CONTACTO = {
  nombre: "Jose Sampedro Cid",
  titulo: "Ingeniero Informático — Backend Java & Microservicios",
  email: "jsampedro@helicoide.com",
  telefono: "678 470 789",
  ubicacion: "A Coruña, España",
  github: "#", // pon aquí tu URL de GitHub
  linkedin: "#", // pon aquí tu URL de LinkedIn
  cvUrl: "#", // apunta al PDF si lo publicas (por ejemplo /cv/jose-sampedro-cid.pdf)
};

const STACK = {
  lenguajes: ["Java", "PL/1", "SQL", "JavaScript", "HTML5", "CSS3"],
  frameworks: ["Spring Boot", "Spring Data", "Spring Security", "Hibernate", "Struts", "JPA", "Kafka Streams"],
  devops: ["Docker", "Jenkins", "Bamboo", "OpenShift", "Nexus", "Sonar", "Bitbucket"],
  bases: ["PostgreSQL", "DB2", "MongoDB", "Couchbase", "Oracle"],
  cloud: ["AWS", "Azure", "OpenShift"],
  testing: ["JUnit", "Postman", "Mockito"],
  otros: ["Apicurio", "Keycloak", "Swagger", "Graylog", "Grafana", "Prometheus"],
};

const EXPERIENCIA = [
  {
    empresa: "KNOWMADMOOD (Autoridad Portuaria Bahía de Algeciras)",
    rol: "Software Engineer",
    periodo: "nov 2024 – Actualidad",
    tareas: [
      "Evolutivos y mantenimiento en aplicativos críticos.",
      "Pruebas unitarias, funcionales y de carga.",
      "Stack: Java 11, Spring 2.6, JUnit, PostgreSQL, Kafka, REST, Apicurio, Keycloak, Maven, Docker, Bamboo, Jira, Bitbucket.",
    ],
  },
  {
    empresa: "KNOWMADMOOD (El Corte Inglés)",
    rol: "Software Engineer",
    periodo: "nov 2023 – nov 2024",
    tareas: [
      "Desarrollo correctivo y evolutivo en entorno corporativo.",
      "Stack: Java, Spring Boot, Kafka, MongoDB, OpenShift, Jenkins, Nexus, Confluence, Bitbucket.",
    ],
  },
  {
    empresa: "atsistemas (MAPFRE)",
    rol: "Software Engineer",
    periodo: "feb 2021 – nov 2023",
    tareas: [
      "Desarrollo correctivo y evolutivo en entorno corporativo.",
      "Stack: Java, Spring Boot, Kafka, MongoDB, OpenShift, Jenkins, Nexus, Confluence, Bitbucket.",
    ],
  },
  {
    empresa: "Corunet (ZARA.COM)",
    rol: "Analista Programador",
    periodo: "ene 2017 – feb 2021",
    tareas: [
      "Desarrollo de aplicaciones web y APIs REST. Refactorización y documentación.",
      "Metodología Scrum. Stack: Java 8, Spring Boot, Spring Data, Hibernate, REST, DB2, Couchbase, OpenShift, Maven.",
    ],
  },
  {
    empresa: "DESINOR (EDP)",
    rol: "Analista Programador",
    periodo: "ene 2016 – dic 2016",
    tareas: [
      "Módulos para comunicación masiva de clientes y nuevas funcionalidades.",
      "Stack: Streamserve, Java, Spring Boot, Hibernate, DB2, PL/1, SOAP, Eclipse, SVN.",
    ],
  },
  {
    empresa: "ZEMSANIA (ABANCA)",
    rol: "Analista Programador",
    periodo: "ene 2015 – nov 2016",
    tareas: [
      "Correctivos y evolutivos. Refactorización de modelo estructurado a orientado a objetos.",
      "Stack: Java, Spring Boot, Hibernate, DB2, PL/1, SOAP, Eclipse, SVN.",
    ],
  },
  {
    empresa: "ALTIA (Servicio Gallego de Salud)",
    rol: "Desarrollador Senior",
    periodo: "oct 2007 – sep 2012",
    tareas: [
      "Aplicaciones corporativas de salud pública (REGAT, SITUB), integraciones HCE, validaciones y cargas ETL.",
      "Stack: Java EE, Struts, Spring, Hibernate, JSP, Oracle, SOAP, Pentaho, Jenkins, Ant.",
    ],
  },
];

const FORMACION = [
  { titulo: "Máster Universitario en Ingeniería Informática", centro: "Universidad de A Coruña", anio: "2012 – 2014" },
  { titulo: "Grado en Ingeniería Informática", centro: "Universidad de A Coruña", anio: "2012 – 2014" },
  { titulo: "T.S.U. en Computación (homologado a Ingeniería Técnica en Gestión)", centro: "Instituto Universitario de Nuevas Profesiones", anio: "2001 – 2004" },
];

const CERTS = [
  "Scrum Fundamentals Certified (SCRUMstudy)",
  "Master ThePowerMBA",
  "Apache Kafka Fundamentals / for Beginners",
  "MongoDB Basics / MongoDB for Java Developers",
  "Java Avanzado 2 (Udemy)",
  "Microservicios con Spring Boot (Udemy)",
];

const IDIOMAS = [
  { idioma: "Castellano", nivel: "Nativo" },
  { idioma: "Inglés", nivel: "Lectura y comprensión (B1–B2)" },
];

const NAV = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Tecnologías" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#education", label: "Formación" },
  { href: "#contact", label: "Contacto" },
];

export default function PortfolioJoseSampedro() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{CONTACTO.nombre.split(" ")[0]}<span className="text-primary">.</span></a>
          <nav className="hidden md:flex items-center gap-4">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={CONTACTO.cvUrl} target="_blank" rel="noreferrer"><FileText className="mr-2 h-4 w-4"/>CV (PDF)</a>
            </Button>
            <Button asChild size="sm">
              <a href="#contact"><Download className="mr-2 h-4 w-4"/>Contacto</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold leading-tight">
              {CONTACTO.nombre}
            </motion.h1>
            <p className="mt-3 text-xl text-muted-foreground">
              {CONTACTO.titulo}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="rounded-2xl"><Server className="mr-1 h-4 w-4"/>Java / Spring</Badge>
              <Badge variant="secondary" className="rounded-2xl"><Boxes className="mr-1 h-4 w-4"/>Microservicios</Badge>
              <Badge variant="secondary" className="rounded-2xl"><Cloud className="mr-1 h-4 w-4"/>Cloud & DevOps</Badge>
              <Badge variant="secondary" className="rounded-2xl"><Shield className="mr-1 h-4 w-4"/>Seguridad (Keycloak)</Badge>
              <Badge variant="secondary" className="rounded-2xl"><Code2 className="mr-1 h-4 w-4"/>Kafka / REST</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button asChild>
                <a href="#projects"><ExternalLink className="mr-2 h-4 w-4"/>Ver proyectos</a>
              </Button>
              <Button asChild variant="outline">
                <a href={CONTACTO.cvUrl} target="_blank" rel="noreferrer"><Download className="mr-2 h-4 w-4"/>Descargar CV</a>
              </Button>
            </div>
          </div>
          <div className="md:justify-self-end">
            <Card className="md:max-w-md">
              <CardHeader>
                <CardTitle>Resumen profesional</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>
                  Ingeniero informático con más de 17 años construyendo software corporativo en Java.
                  Especializado en arquitecturas de microservicios, APIs REST, mensajería asíncrona (Kafka) y despliegues en cloud (Docker / OpenShift / AWS).
                </p>
                <p>
                  Destaco por liderazgo técnico, capacidad analítica y adaptación a proyectos complejos de transformación digital.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <Section id="skills" title="Tecnologías" subtitle="Stack principal y herramientas que utilizo en el día a día">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader><CardTitle>Lenguajes</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap">{STACK.lenguajes.map((t) => <Pill key={t}>{t}</Pill>)}</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Frameworks</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap">{STACK.frameworks.map((t) => <Pill key={t}>{t}</Pill>)}</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>DevOps</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap">{STACK.devops.map((t) => <Pill key={t}>{t}</Pill>)}</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Bases de datos</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap">{STACK.bases.map((t) => <Pill key={t}>{t}</Pill>)}</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Cloud</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap">{STACK.cloud.map((t) => <Pill key={t}>{t}</Pill>)}</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Testing & Otros</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap">{[...STACK.testing, ...STACK.otros].map((t) => <Pill key={t}>{t}</Pill>)}</CardContent>
          </Card>
        </div>
      </Section>

      {/* EXPERIENCIA */}
      <Section id="experience" title="Experiencia" subtitle="Responsabilidades clave y entornos tecnológicos">
        <div className="space-y-4">
          {EXPERIENCIA.map((exp, i) => (
            <motion.div key={exp.empresa} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <span>{exp.rol} — <span className="text-primary font-semibold">{exp.empresa}</span></span>
                    <span className="text-sm text-muted-foreground">{exp.periodo}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    {exp.tareas.map((t, idx) => <li key={idx}>{t}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROYECTOS */}
      <Section id="projects" title="Proyectos destacados" subtitle="Selección de trabajos y logros representativos (resumen no confidencial)">
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Plataforma de integración por eventos</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Arquitectura de microservicios con mensajería asíncrona en <strong>Kafka</strong> para integrar sistemas corporativos.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Diseño de APIs REST y esquemas con <strong>Apicurio</strong>.</li>
                <li>Autenticación y autorización con <strong>Keycloak</strong> (OAuth2/JWT).</li>
                <li>Despliegue en <strong>OpenShift</strong> con pipelines en Jenkins/Bamboo.</li>
              </ul>
              <div className="pt-2"><Badge>Java</Badge> <Badge variant="secondary">Spring Boot</Badge> <Badge variant="secondary">Kafka</Badge> <Badge variant="secondary">OpenShift</Badge></div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Refactorización y modernización de APIs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Migración de servicios legacy a <strong>Spring Boot</strong>, estandarización de contratos y mejora de observabilidad.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Automatización de pruebas con <strong>JUnit</strong> y test de carga.</li>
                <li>Monitoreo con <strong>Grafana/Prometheus</strong> y trazas en Graylog.</li>
                <li>Mejoras de rendimiento en consultas <strong>PostgreSQL/DB2</strong>.</li>
              </ul>
              <div className="pt-2"><Badge>Java</Badge> <Badge variant="secondary">Spring</Badge> <Badge variant="secondary">Grafana</Badge> <Badge variant="secondary">DB2</Badge></div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Integraciones HCE en Salud Pública</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Integración de sistemas (REGAT, SITUB) con historias clínicas electrónicas y automatización ETL.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Procesos ETL con <strong>Pentaho</strong> y validaciones de calidad.</li>
                <li>Servicios SOAP/REST y batch jobs.</li>
              </ul>
              <div className="pt-2"><Badge>Java EE</Badge> <Badge variant="secondary">Spring</Badge> <Badge variant="secondary">Pentaho</Badge> <Badge variant="secondary">Oracle</Badge></div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>E-commerce & mensajería</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Módulos para comunicación masiva y servicios de catálogo/checkout en entorno retail.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Optimización de latencia y resiliencia de microservicios.</li>
                <li>Versionado semántico y documentación con <strong>Swagger</strong>.</li>
              </ul>
              <div className="pt-2"><Badge>Java</Badge> <Badge variant="secondary">Spring Boot</Badge> <Badge variant="secondary">Swagger</Badge> <Badge variant="secondary">Couchbase</Badge></div>
            </CardContent>
          </Card>
        </div>
        <p className="text-xs text-muted-foreground mt-4">* Los detalles técnicos se han resumido para respetar la confidencialidad de los clientes.</p>
      </Section>

      {/* EDUCACION / CERTS / IDIOMAS */}
      <Section id="education" title="Formación, certificaciones e idiomas">
        <div className="grid lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader><CardTitle>Formación</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {FORMACION.map((f) => (
                <div key={f.titulo}>
                  <p className="font-medium text-foreground">{f.titulo}</p>
                  <p>{f.centro}</p>
                  <p className="text-xs">{f.anio}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Certificaciones y cursos</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                {CERTS.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Idiomas</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                {IDIOMAS.map((i) => <li key={i.idioma}><span className="font-medium text-foreground">{i.idioma}:</span> {i.nivel}</li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contact" title="Contacto" subtitle="¿Tienes un proyecto o una vacante? Hablemos">
        <Card className="max-w-3xl">
          <CardContent className="pt-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a className="underline-offset-2 hover:underline" href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a></p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a className="underline-offset-2 hover:underline" href={`tel:${CONTACTO.telefono.replace(/\s/g, '')}`}>{CONTACTO.telefono}</a></p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {CONTACTO.ubicacion}</p>
              <Separator/>
              <div className="flex items-center gap-3">
                <Button variant="outline" asChild>
                  <a href={CONTACTO.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4"/>GitHub</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={CONTACTO.linkedin} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4"/>LinkedIn</a>
                </Button>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>
                Estoy especialmente interesado en oportunidades backend con <strong>Java/Spring</strong>, arquitecturas <strong>event-driven</strong>, y entornos <strong>cloud</strong> con enfoque en calidad y rendimiento.
              </p>
              <p className="mt-2">
                Respondo rápido por email y LinkedIn. ¡Gracias por tu interés!
              </p>
            </div>
          </CardContent>
        </Card>
        <p className="text-xs text-muted-foreground mt-4">&copy; {year} {CONTACTO.nombre}. Todos los derechos reservados.</p>
      </Section>
    </div>
  );
}
