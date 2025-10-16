import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Code2, Server, Boxes, Cloud, Shield, FileText } from "lucide-react";
// === Utilidades ===
const Section = ({ id, title, subtitle, children }) => (_jsxs("section", { id: id, className: "max-w-6xl mx-auto px-6 lg:px-8 py-16 scroll-mt-24", children: [_jsx(motion.h2, { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "text-3xl md:text-4xl font-bold tracking-tight", children: title }), subtitle && (_jsx(motion.p, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, className: "text-muted-foreground mt-2", children: subtitle })), _jsx("div", { className: "mt-8", children: children })] }));
const Pill = ({ children }) => (_jsx(Badge, { variant: "secondary", className: "rounded-2xl px-3 py-1 text-sm mr-2 mb-2", children: children }));
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
    return (_jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [_jsx("header", { className: "sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between", children: [_jsxs("a", { href: "#home", className: "font-semibold tracking-tight", children: [CONTACTO.nombre.split(" ")[0], _jsx("span", { className: "text-primary", children: "." })] }), _jsx("nav", { className: "hidden md:flex items-center gap-4", children: NAV.map((item) => (_jsx("a", { href: item.href, className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: item.label }, item.href))) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { asChild: true, variant: "outline", size: "sm", children: _jsxs("a", { href: CONTACTO.cvUrl, target: "_blank", rel: "noreferrer", children: [_jsx(FileText, { className: "mr-2 h-4 w-4" }), "CV (PDF)"] }) }), _jsx(Button, { asChild: true, size: "sm", children: _jsxs("a", { href: "#contact", children: [_jsx(Download, { className: "mr-2 h-4 w-4" }), "Contacto"] }) })] })] }) }), _jsx("section", { id: "home", className: "max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-10", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [_jsxs("div", { children: [_jsx(motion.h1, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "text-4xl md:text-5xl font-bold leading-tight", children: CONTACTO.nombre }), _jsx("p", { className: "mt-3 text-xl text-muted-foreground", children: CONTACTO.titulo }), _jsxs("div", { className: "mt-6 flex flex-wrap gap-2", children: [_jsxs(Badge, { className: "rounded-2xl", children: [_jsx(Server, { className: "mr-1 h-4 w-4" }), "Java / Spring"] }), _jsxs(Badge, { variant: "secondary", className: "rounded-2xl", children: [_jsx(Boxes, { className: "mr-1 h-4 w-4" }), "Microservicios"] }), _jsxs(Badge, { variant: "secondary", className: "rounded-2xl", children: [_jsx(Cloud, { className: "mr-1 h-4 w-4" }), "Cloud & DevOps"] }), _jsxs(Badge, { variant: "secondary", className: "rounded-2xl", children: [_jsx(Shield, { className: "mr-1 h-4 w-4" }), "Seguridad (Keycloak)"] }), _jsxs(Badge, { variant: "secondary", className: "rounded-2xl", children: [_jsx(Code2, { className: "mr-1 h-4 w-4" }), "Kafka / REST"] })] }), _jsxs("div", { className: "mt-8 flex gap-3", children: [_jsx(Button, { asChild: true, children: _jsxs("a", { href: "#projects", children: [_jsx(ExternalLink, { className: "mr-2 h-4 w-4" }), "Ver proyectos"] }) }), _jsx(Button, { asChild: true, variant: "outline", children: _jsxs("a", { href: CONTACTO.cvUrl, target: "_blank", rel: "noreferrer", children: [_jsx(Download, { className: "mr-2 h-4 w-4" }), "Descargar CV"] }) })] })] }), _jsx("div", { className: "md:justify-self-end", children: _jsxs(Card, { className: "md:max-w-md", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Resumen profesional" }) }), _jsxs(CardContent, { className: "text-sm text-muted-foreground space-y-3", children: [_jsx("p", { children: "Ingeniero inform\u00E1tico con m\u00E1s de 17 a\u00F1os construyendo software corporativo en Java. Especializado en arquitecturas de microservicios, APIs REST, mensajer\u00EDa as\u00EDncrona (Kafka) y despliegues en cloud (Docker / OpenShift / AWS)." }), _jsx("p", { children: "Destaco por liderazgo t\u00E9cnico, capacidad anal\u00EDtica y adaptaci\u00F3n a proyectos complejos de transformaci\u00F3n digital." })] })] }) })] }) }), _jsx(Section, { id: "skills", title: "Tecnolog\u00EDas", subtitle: "Stack principal y herramientas que utilizo en el d\u00EDa a d\u00EDa", children: _jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Lenguajes" }) }), _jsx(CardContent, { className: "flex flex-wrap", children: STACK.lenguajes.map((t) => _jsx(Pill, { children: t }, t)) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Frameworks" }) }), _jsx(CardContent, { className: "flex flex-wrap", children: STACK.frameworks.map((t) => _jsx(Pill, { children: t }, t)) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "DevOps" }) }), _jsx(CardContent, { className: "flex flex-wrap", children: STACK.devops.map((t) => _jsx(Pill, { children: t }, t)) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Bases de datos" }) }), _jsx(CardContent, { className: "flex flex-wrap", children: STACK.bases.map((t) => _jsx(Pill, { children: t }, t)) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Cloud" }) }), _jsx(CardContent, { className: "flex flex-wrap", children: STACK.cloud.map((t) => _jsx(Pill, { children: t }, t)) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Testing & Otros" }) }), _jsx(CardContent, { className: "flex flex-wrap", children: [...STACK.testing, ...STACK.otros].map((t) => _jsx(Pill, { children: t }, t)) })] })] }) }), _jsx(Section, { id: "experience", title: "Experiencia", subtitle: "Responsabilidades clave y entornos tecnol\u00F3gicos", children: _jsx("div", { className: "space-y-4", children: EXPERIENCIA.map((exp, i) => (_jsx(motion.div, { initial: { opacity: 0, y: 8 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, children: _jsxs(Card, { className: "rounded-2xl", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-1", children: [_jsxs("span", { children: [exp.rol, " \u2014 ", _jsx("span", { className: "text-primary font-semibold", children: exp.empresa })] }), _jsx("span", { className: "text-sm text-muted-foreground", children: exp.periodo })] }) }), _jsx(CardContent, { children: _jsx("ul", { className: "list-disc pl-6 text-sm text-muted-foreground space-y-1", children: exp.tareas.map((t, idx) => _jsx("li", { children: t }, idx)) }) })] }) }, exp.empresa))) }) }), _jsxs(Section, { id: "projects", title: "Proyectos destacados", subtitle: "Selecci\u00F3n de trabajos y logros representativos (resumen no confidencial)", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Plataforma de integraci\u00F3n por eventos" }) }), _jsxs(CardContent, { className: "text-sm text-muted-foreground space-y-2", children: [_jsxs("p", { children: ["Arquitectura de microservicios con mensajer\u00EDa as\u00EDncrona en ", _jsx("strong", { children: "Kafka" }), " para integrar sistemas corporativos."] }), _jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [_jsxs("li", { children: ["Dise\u00F1o de APIs REST y esquemas con ", _jsx("strong", { children: "Apicurio" }), "."] }), _jsxs("li", { children: ["Autenticaci\u00F3n y autorizaci\u00F3n con ", _jsx("strong", { children: "Keycloak" }), " (OAuth2/JWT)."] }), _jsxs("li", { children: ["Despliegue en ", _jsx("strong", { children: "OpenShift" }), " con pipelines en Jenkins/Bamboo."] })] }), _jsxs("div", { className: "pt-2", children: [_jsx(Badge, { children: "Java" }), " ", _jsx(Badge, { variant: "secondary", children: "Spring Boot" }), " ", _jsx(Badge, { variant: "secondary", children: "Kafka" }), " ", _jsx(Badge, { variant: "secondary", children: "OpenShift" })] })] })] }), _jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Refactorizaci\u00F3n y modernizaci\u00F3n de APIs" }) }), _jsxs(CardContent, { className: "text-sm text-muted-foreground space-y-2", children: [_jsxs("p", { children: ["Migraci\u00F3n de servicios legacy a ", _jsx("strong", { children: "Spring Boot" }), ", estandarizaci\u00F3n de contratos y mejora de observabilidad."] }), _jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [_jsxs("li", { children: ["Automatizaci\u00F3n de pruebas con ", _jsx("strong", { children: "JUnit" }), " y test de carga."] }), _jsxs("li", { children: ["Monitoreo con ", _jsx("strong", { children: "Grafana/Prometheus" }), " y trazas en Graylog."] }), _jsxs("li", { children: ["Mejoras de rendimiento en consultas ", _jsx("strong", { children: "PostgreSQL/DB2" }), "."] })] }), _jsxs("div", { className: "pt-2", children: [_jsx(Badge, { children: "Java" }), " ", _jsx(Badge, { variant: "secondary", children: "Spring" }), " ", _jsx(Badge, { variant: "secondary", children: "Grafana" }), " ", _jsx(Badge, { variant: "secondary", children: "DB2" })] })] })] }), _jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Integraciones HCE en Salud P\u00FAblica" }) }), _jsxs(CardContent, { className: "text-sm text-muted-foreground space-y-2", children: [_jsx("p", { children: "Integraci\u00F3n de sistemas (REGAT, SITUB) con historias cl\u00EDnicas electr\u00F3nicas y automatizaci\u00F3n ETL." }), _jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [_jsxs("li", { children: ["Procesos ETL con ", _jsx("strong", { children: "Pentaho" }), " y validaciones de calidad."] }), _jsx("li", { children: "Servicios SOAP/REST y batch jobs." })] }), _jsxs("div", { className: "pt-2", children: [_jsx(Badge, { children: "Java EE" }), " ", _jsx(Badge, { variant: "secondary", children: "Spring" }), " ", _jsx(Badge, { variant: "secondary", children: "Pentaho" }), " ", _jsx(Badge, { variant: "secondary", children: "Oracle" })] })] })] }), _jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "E-commerce & mensajer\u00EDa" }) }), _jsxs(CardContent, { className: "text-sm text-muted-foreground space-y-2", children: [_jsx("p", { children: "M\u00F3dulos para comunicaci\u00F3n masiva y servicios de cat\u00E1logo/checkout en entorno retail." }), _jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [_jsx("li", { children: "Optimizaci\u00F3n de latencia y resiliencia de microservicios." }), _jsxs("li", { children: ["Versionado sem\u00E1ntico y documentaci\u00F3n con ", _jsx("strong", { children: "Swagger" }), "."] })] }), _jsxs("div", { className: "pt-2", children: [_jsx(Badge, { children: "Java" }), " ", _jsx(Badge, { variant: "secondary", children: "Spring Boot" }), " ", _jsx(Badge, { variant: "secondary", children: "Swagger" }), " ", _jsx(Badge, { variant: "secondary", children: "Couchbase" })] })] })] })] }), _jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "* Los detalles t\u00E9cnicos se han resumido para respetar la confidencialidad de los clientes." })] }), _jsx(Section, { id: "education", title: "Formaci\u00F3n, certificaciones e idiomas", children: _jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Formaci\u00F3n" }) }), _jsx(CardContent, { className: "space-y-3 text-sm text-muted-foreground", children: FORMACION.map((f) => (_jsxs("div", { children: [_jsx("p", { className: "font-medium text-foreground", children: f.titulo }), _jsx("p", { children: f.centro }), _jsx("p", { className: "text-xs", children: f.anio })] }, f.titulo))) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Certificaciones y cursos" }) }), _jsx(CardContent, { className: "text-sm text-muted-foreground", children: _jsx("ul", { className: "list-disc pl-5 space-y-1", children: CERTS.map((c) => _jsx("li", { children: c }, c)) }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Idiomas" }) }), _jsx(CardContent, { className: "text-sm text-muted-foreground", children: _jsx("ul", { className: "list-disc pl-5 space-y-1", children: IDIOMAS.map((i) => _jsxs("li", { children: [_jsxs("span", { className: "font-medium text-foreground", children: [i.idioma, ":"] }), " ", i.nivel] }, i.idioma)) }) })] })] }) }), _jsxs(Section, { id: "contact", title: "Contacto", subtitle: "\u00BFTienes un proyecto o una vacante? Hablemos", children: [_jsx(Card, { className: "max-w-3xl", children: _jsxs(CardContent, { className: "pt-6 grid md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-3 text-sm", children: [_jsxs("p", { className: "flex items-center gap-2", children: [_jsx(Mail, { className: "h-4 w-4" }), " ", _jsx("a", { className: "underline-offset-2 hover:underline", href: `mailto:${CONTACTO.email}`, children: CONTACTO.email })] }), _jsxs("p", { className: "flex items-center gap-2", children: [_jsx(Phone, { className: "h-4 w-4" }), " ", _jsx("a", { className: "underline-offset-2 hover:underline", href: `tel:${CONTACTO.telefono.replace(/\s/g, '')}`, children: CONTACTO.telefono })] }), _jsxs("p", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-4 w-4" }), " ", CONTACTO.ubicacion] }), _jsx(Separator, {}), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Button, { variant: "outline", asChild: true, children: _jsxs("a", { href: CONTACTO.github, target: "_blank", rel: "noreferrer", children: [_jsx(Github, { className: "mr-2 h-4 w-4" }), "GitHub"] }) }), _jsx(Button, { variant: "outline", asChild: true, children: _jsxs("a", { href: CONTACTO.linkedin, target: "_blank", rel: "noreferrer", children: [_jsx(Linkedin, { className: "mr-2 h-4 w-4" }), "LinkedIn"] }) })] })] }), _jsxs("div", { className: "text-sm text-muted-foreground", children: [_jsxs("p", { children: ["Estoy especialmente interesado en oportunidades backend con ", _jsx("strong", { children: "Java/Spring" }), ", arquitecturas ", _jsx("strong", { children: "event-driven" }), ", y entornos ", _jsx("strong", { children: "cloud" }), " con enfoque en calidad y rendimiento."] }), _jsx("p", { className: "mt-2", children: "Respondo r\u00E1pido por email y LinkedIn. \u00A1Gracias por tu inter\u00E9s!" })] })] }) }), _jsxs("p", { className: "text-xs text-muted-foreground mt-4", children: ["\u00A9 ", year, " ", CONTACTO.nombre, ". Todos los derechos reservados."] })] })] }));
}
