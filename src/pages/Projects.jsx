"use client"

import { useState } from "react"

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const projectData = {
    webDev: [
      {
        name: "MLSC VCET official website",
        imgSrc: "https://i.imgur.com/pNA4KkM.jpeg",
        category: "Hosted website for MLSC-VCET which showcased club activities",
      },
      {
        name: "Grow educators",
        imgSrc: "https://i.imgur.com/C1j66K8.png",
        category: "Created a website for a coaching classes which digitalized their platform",
      },
      {
        name: "Coherence Hackathon website",
        imgSrc: "https://i.imgur.com/9kSpQwG.jpeg",
        category: "Coherence, Hackathon conducted by MLSC created a website for the same",
      },
      {
        name: "Aspiring celebrations",
        imgSrc: "https://i.imgur.com/3AhWQXw.jpeg",
        category: "Integrated Automated tally integration feature on their existing platform banquet easy",
      },
    ],
    aiMl: [
      {
        name: "Feedback",
        imgSrc: "https://i.imgur.com/REzAgtv.jpeg",
        category: "Built and deployed an AI chatbot to answer participant queries on the MLSC website.",
      },
      {
        name: "Aspiring celebrationss",
        imgSrc: "https://i.imgur.com/sCgDtum.jpeg",
        category:
          "Developed and deployed an enterprise-level OCR solution for Merchant Navy documents using microservices and Docker on a Linux server.",
      },
      {
        name: "AI Chatbot",
        imgSrc: "/images/dataanalysis.jpg",
        category: "Devloped an AI Chatbot to solve the FAQs and Questions of the Hackathon Participants",
      },
    ],
    app: [
      {
        name: "Grow educators APP",
        imgSrc: "https://i.imgur.com/C1j66K8.png",
        category: "Created a App for a coaching classes which digitalized their platform",
      },
      {
        name: "Aspiring celebrations APP",
        imgSrc: "https://i.imgur.com/IkrhN0n.jpeg",
        category: "Developed an Property Managment System App for their exsisting software",
      },
    ],
  }

  const projectDetails = [
    {
      title: "MLSC VCET Official Website",
      text: "Comprehensive website for Microsoft Learn Student Chapter at VCET showcasing club activities, events, and member achievements. Built with modern web technologies and responsive design.",
      link: "#",
    },
    {
      title: "Grow Educators Platform",
      text: "Digital transformation solution for coaching classes featuring online course management, student tracking, and interactive learning modules. Streamlined educational processes with modern UI/UX.",
      link: "#",
    },
    {
      title: "Coherence Hackathon Website",
      text: "Event website for MLSC's flagship hackathon featuring participant registration, project submissions, and real-time updates. Designed to handle high traffic during the event.",
      link: "#",
    },
    {
      title: "Aspiring Celebrations Integration",
      text: "Enterprise-level tally integration system for banquet management platform. Automated financial processes and streamlined event management workflows.",
      link: "#",
    },
    {
      title: "AI Feedback Chatbot",
      text: "Intelligent chatbot deployed on MLSC website to handle participant queries using natural language processing. Provides instant responses and improves user engagement.",
      link: "#",
    },
    {
      title: "OCR Document Processing",
      text: "Enterprise OCR solution for Merchant Navy documents using microservices architecture. Deployed with Docker on Linux servers for scalable document processing.",
      link: "#",
    },
    {
      title: "Hackathon FAQ Chatbot",
      text: "AI-powered chatbot specifically designed to answer frequently asked questions during hackathon events. Reduces support workload and improves participant experience.",
      link: "#",
    },
    {
      title: "Grow Educators Mobile App",
      text: "Mobile application companion for the coaching platform featuring offline content access, push notifications, and seamless synchronization with the web platform.",
      link: "#",
    },
    {
      title: "Property Management System App",
      text: "Comprehensive mobile application for property management featuring tenant management, maintenance tracking, and financial reporting capabilities.",
      link: "#",
    },
  ]

  const projectImages = [
    "https://i.imgur.com/pNA4KkM.jpeg",
    "https://i.imgur.com/C1j66K8.png",
    "https://i.imgur.com/9kSpQwG.jpeg",
    "https://i.imgur.com/3AhWQXw.jpeg",
    "https://i.imgur.com/REzAgtv.jpeg",
    "https://i.imgur.com/sCgDtum.jpeg",
    "/images/dataanalysis.jpg",
  ]

  const allProjects = [...projectData.webDev, ...projectData.aiMl, ...projectData.app]

  const getFilteredProjects = () => {
    switch (selectedCategory) {
      case "web":
        return projectData.webDev
      case "ai":
        return projectData.aiMl
      case "app":
        return projectData.app
      default:
        return allProjects
    }
  }

  const styles = {
    container: {
      minHeight: "100vh",
      // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#ffffff",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    header: {
      textAlign: "center",
      padding: "4rem 2rem 2rem",
      marginTop: "2rem"
    },
    title: {
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      fontWeight: "700",
      marginBottom: "1rem",
      background: "linear-gradient(45deg, #fff, #e0e7ff)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 4px 8px rgba(0,0,0,0.3)",
    },
    subtitle: {
      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
      opacity: 0.9,
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    navigation: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      padding: "2rem",
      flexWrap: "wrap",
    },
    navButton: {
      padding: "0.75rem 1.5rem",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "50px",
      background: "rgba(255, 255, 255, 0.1)",
      color: "#fff",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "0.95rem",
      fontWeight: "500",
      backdropFilter: "blur(10px)",
      textTransform: "capitalize",
    },
    navButtonActive: {
      background: "rgba(255, 255, 255, 0.25)",
      borderColor: "rgba(255, 255, 255, 0.6)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    },
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "2rem",
      padding: "2rem",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    projectCard: {
      background: "rgba(255, 255, 255, 0.15)",
      borderRadius: "20px",
      overflow: "hidden",
      backdropFilter: "blur(15px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      position: "relative",
    },
    projectCardHover: {
      transform: "translateY(-10px) scale(1.02)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      background: "rgba(255, 255, 255, 0.2)",
    },
    projectImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      transition: "transform 0.4s ease",
    },
    projectContent: {
      padding: "1.5rem",
    },
    projectName: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      color: "#fff",
    },
    projectCategory: {
      fontSize: "0.9rem",
      opacity: 0.8,
      color: "#e0e7ff",
      marginBottom: "1rem",
    },
    viewButton: {
      background: "linear-gradient(45deg, #4f46e5, #7c3aed)",
      border: "none",
      borderRadius: "25px",
      padding: "0.75rem 1.5rem",
      color: "#fff",
      cursor: "pointer",
      fontSize: "0.9rem",
      fontWeight: "500",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "1rem",
    },
    modalContent: {
      background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
      borderRadius: "20px",
      padding: "2rem",
      maxWidth: "800px",
      width: "100%",
      maxHeight: "90vh",
      overflowY: "auto",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      position: "relative",
    },
    closeButton: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      background: "rgba(255, 255, 255, 0.2)",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      color: "#fff",
      cursor: "pointer",
      fontSize: "1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalImage: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "1.5rem",
    },
    modalTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "1rem",
      color: "#fff",
    },
    modalText: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
      marginBottom: "1.5rem",
      color: "rgba(255, 255, 255, 0.9)",
    },
    techStack: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "2rem",
    },
    techTag: {
      background: "rgba(255, 255, 255, 0.2)",
      padding: "0.5rem 1rem",
      borderRadius: "20px",
      fontSize: "0.85rem",
      color: "#fff",
      border: "1px solid rgba(255, 255, 255, 0.3)",
    },
    modalButton: {
      background: "linear-gradient(45deg, #4f46e5, #7c3aed)",
      border: "none",
      borderRadius: "25px",
      padding: "1rem 2rem",
      color: "#fff",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "600",
      transition: "all 0.3s ease",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    // Mobile responsive styles
    "@media (max-width: 768px)": {
      projectsGrid: {
        gridTemplateColumns: "1fr",
        padding: "1rem",
      },
      navigation: {
        padding: "1rem",
      },
      navButton: {
        padding: "0.6rem 1.2rem",
        fontSize: "0.9rem",
      },
      modalContent: {
        padding: "1.5rem",
        margin: "1rem",
      },
      modalTitle: {
        fontSize: "1.5rem",
      },
    },
  }

  const ProjectCard = ({ project, onClick }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <div
        style={{
          ...styles.projectCard,
          ...(isHovered ? styles.projectCardHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onClick(project)}
      >
        <img
          src={project.imgSrc || "/placeholder.svg"}
          alt={project.name}
          style={{
            ...styles.projectImage,
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
        <div style={styles.projectContent}>
          <h3 style={styles.projectName}>{project.name}</h3>
          <p style={styles.projectCategory}>{project.category}</p>
          <button
            style={styles.viewButton}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "none"
            }}
          >
            View Details
            <span style={{ fontSize: "1.2rem" }}>→</span>
          </button>
        </div>
      </div>
    )
  }

  const Modal = ({ project, onClose }) => {
    if (!project) return null

    const projectIndex = allProjects.findIndex((p) => p.name === project.name)
    const details = projectDetails[projectIndex] || {
      title: project.name,
      text: "Project details coming soon.",
      link: "#",
    }

    return (
      <div style={styles.modal} onClick={onClose}>
        <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button style={styles.closeButton} onClick={onClose}>
            ×
          </button>
          <img src={project.imgSrc || "/placeholder.svg"} alt={details.title} style={styles.modalImage} />
          <h2 style={styles.modalTitle}>{details.title}</h2>
          <p style={styles.modalText}>{details.text}</p>

          <button
            style={styles.modalButton}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "none"
            }}
          >
            View Project
            <span style={{ fontSize: "1.2rem" }}>↗</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Featured Projects</h1>
        <p style={styles.subtitle}>
          Explore my portfolio of innovative web applications, AI solutions, and mobile apps
        </p>
      </header>

      <nav style={styles.navigation}>
        {[
          { key: "all", label: "All Projects" },
          { key: "web", label: "Web Development" },
          { key: "ai", label: "AI/ML" },
          { key: "app", label: "Mobile Apps" },
        ].map(({ key, label }) => (
          <button
            key={key}
            style={{
              ...styles.navButton,
              ...(selectedCategory === key ? styles.navButtonActive : {}),
            }}
            onClick={() => setSelectedCategory(key)}
            onMouseEnter={(e) => {
              if (selectedCategory !== key) {
                e.target.style.background = "rgba(255, 255, 255, 0.2)"
                e.target.style.transform = "translateY(-2px)"
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== key) {
                e.target.style.background = "rgba(255, 255, 255, 0.1)"
                e.target.style.transform = "translateY(0)"
              }
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      <div style={styles.projectsGrid}>
        {getFilteredProjects().map((project, index) => (
          <ProjectCard key={`${project.name}-${index}`} project={project} onClick={setSelectedProject} />
        ))}
      </div>

      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default Projects
