import { useState } from "react";
// import Modal from "../layouts/Modal";
import workshopEventImg from "../assets/reactjsworkshop.jpeg";
// import azureEventImg from "../assets/azurechallenge.jpeg";
// import styles from './Events.module.css';
import SqlWorkshop from "../assets/SqlWorkshop.jpg";
import scogoTuring from "../assets/Scogo_Turing.jpg";
const Events = ({count}) => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(!isModalOpen);
  };

 const eventsData = [
    {
      title: "SQL Workshop by Kantascrypt",
      Speaker: "Mr. Samtani Edwin",
      imgSrc: SqlWorkshop,
      description: `Microsoft Learn Students Club hosted a SQL workshop featuring guest speaker Mr. Samtani Edwin, Lead Database Architect of Kantascrypt, offering hands-on training in SQL fundamentals. Participants gained practical skills in database management, query optimization, and data manipulation techniques, culminating in a certificate of completion.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 175 },
        { label: "Date and Time", value: `22nd Feb, 2 PM` },
        { label: "Event Span", value: `1 day` },
      ],
    },
    {
      title: "Guest Lecture by Scogo Networks",
      Speaker: "Mr. Karan Singh",
      imgSrc: scogoTuring,
      description: `Microsoft Learn Students Club organized a seminar titled "From Turing to Transformers: AI's Revolutionary Tale" featuring guest speaker Mr. Karan Singh, Co-founder and CTO of Scogo Networks, elucidating AI's transformative journey. Attendees delved into AI's impact across diverse sectors, gaining valuable insights, and received certificates recognizing their participation and engagement in the event.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 171 },
        { label: "Date and Time", value: `20th Feb, 11:30 AM` },
        { label: "Event Span", value: `1 day` },
      ],
    },
    {
      title: "ReactJS Workshop",
      imgSrc: workshopEventImg,
      description: `Participants in MLSC's recent React JS workshop engaged in hands-on coding sessions under expert guidance, gaining insights into cutting-edge developments. The workshop included an exclusive Q&A with Coding Adda's instructors. Certificates were awarded to those demonstrating commitment and outstanding achievements.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 194 },
        { label: "Date and Time", value: `8th to 10th Dec 2023, 6:30 PM` },
        { label: "Event Span", value: `3 days` },
      ],
    },
    {
      title: "Git Going",
      Speaker: "Club leads",
      imgSrc: "https://i.imgur.com/S84VLt8.jpeg",
      description: `A hands-on workshop where students gained practical experience with Git commands, version control, and collaborative workflows. They learned how to efficiently manage code repositories, track changes, and resolve merge conflicts in real-world projects.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 171 },
        { label: "Date and Time", value: `20th Feb, 11:30 AM` },
        { label: "Event Span", value: `1 day` },
      ],
    },
    {
      title: "Mission Career Seminar",
      Speaker: "Mr Gauam Umashankar",
      imgSrc:  "https://i.imgur.com/4mAKREa.jpeg",
      description: `The Career Guidance Seminar by Mission Career provided students with a valuable opportunity to gain insights, guidance, and strategies to advance their careers. By leveraging the expertise of MissionCareer, attendees were equipped with the tools and knowledge necessary to make informed decisions and pursue their career goals with confidence.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 171 },
        { label: "Date and Time", value: `20th Feb, 11:30 AM` },
        { label: "Event Span", value: `1 day` },
      ],
    },
    {
      title: "Product showcase challenge",
      Speaker: "",
      imgSrc: "https://i.imgur.com/989R6rL.jpeg",
      description: `The VCET Product Showcase, organized by the Microsoft Learn Student Club, was a successful platform for showcasing innovative, Microsoft-centric projects and enhancing the technical skills of students. By promoting teamwork, creativity, and mentorship, the event aligned with MLSC's vision to empower students and prepare them for future career opportunities in the tech industry.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 171 },
        { label: "Date and Time", value: `20th Feb, 11:30 AM` },
        { label: "Event Span", value: `1 day` },
      ],
    },
  ]

  const styles = {
    container: {
      minHeight: "100vh",
      // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "2rem 1rem",
      marginTop: "2rem"
    },
    header: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    title: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      fontWeight: "700",
      color: "white",
      marginBottom: "1rem",
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    },
    subtitle: {
      fontSize: "clamp(1rem, 3vw, 1.25rem)",
      color: "rgba(255,255,255,0.9)",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    eventsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    eventCard: {
      background: "white",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    eventCardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
    },
    eventImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    eventContent: {
      padding: "1.5rem",
    },
    eventTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "#2d3748",
      marginBottom: "0.5rem",
      lineHeight: "1.3",
    },
    eventSpeaker: {
      fontSize: "0.9rem",
      color: "#667eea",
      fontWeight: "500",
      marginBottom: "1rem",
    },
    eventDescription: {
      fontSize: "0.9rem",
      color: "#4a5568",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    eventButton: {
      background: "linear-gradient(135deg, #99aaf8ff 0%, #201dcaff 100%)",
      color: "white",
      border: "none",
      padding: "0.75rem 1.5rem",
      borderRadius: "25px",
      fontSize: "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: "100%",
    },
    eventButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 20px rgba(102, 126, 234, 0.3)",
    },
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "1rem",
    },
    modalContent: {
      background: "white",
      borderRadius: "20px",
      maxWidth: "600px",
      width: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      position: "relative",
    },
    modalImage: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
    },
    modalBody: {
      padding: "2rem",
    },
    modalTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#2d3748",
      marginBottom: "0.5rem",
    },
    modalSpeaker: {
      fontSize: "1rem",
      color: "#667eea",
      fontWeight: "500",
      marginBottom: "1rem",
    },
    modalDescription: {
      fontSize: "1rem",
      color: "#4a5568",
      lineHeight: "1.7",
      marginBottom: "2rem",
    },
    modalInfo: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1rem",
      marginBottom: "2rem",
    },
    infoItem: {
      background: "#f7fafc",
      padding: "1rem",
      borderRadius: "10px",
      textAlign: "center",
    },
    infoLabel: {
      fontSize: "0.8rem",
      color: "#718096",
      fontWeight: "500",
      marginBottom: "0.5rem",
    },
    infoValue: {
      fontSize: "1.1rem",
      color: "#2d3748",
      fontWeight: "600",
    },
    closeButton: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      background: "rgba(0,0,0,0.5)",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "1.2rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }

  const [hoveredCard, setHoveredCard] = useState(null)
  const [hoveredButton, setHoveredButton] = useState(null)

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Dive into the Tech Universe with us</h1>
        {/* <p style={styles.subtitle}>
          Explore our exciting events, workshops, and seminars designed to enhance your technical skills and career
          prospects
        </p> */}
      </div>

      <div style={styles.eventsGrid}>
        {eventsData.slice(0, count ? count : eventsData.length).map((event, index) => (
          <div
            key={index}
            style={{
              ...styles.eventCard,
              ...(hoveredCard === index ? styles.eventCardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => toggleModal(event)}
          >
            <img
              style={styles.eventImage}
              src={event.imgSrc || "/placeholder.svg"}
              alt={event.title}
              onError={(e) => {
                e.target.src = "/tech-event-workshop.png"
              }}
            />
            <div style={styles.eventContent}>
              <h2 style={styles.eventTitle}>{event.title}</h2>
              {event.Speaker && <p style={styles.eventSpeaker}>Speaker: {event.Speaker}</p>}
              <p style={styles.eventDescription}>{event.description}</p>
              <button
                style={{
                  ...styles.eventButton,
                  ...(hoveredButton === index ? styles.eventButtonHover : {}),
                }}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleModal(event)
                }}
              >
                Know More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedEvent && (
        <div style={styles.modal} onClick={() => setModalIsOpen(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setModalIsOpen(false)}>
              ×
            </button>
            <img
              style={styles.modalImage}
              src={selectedEvent.imgSrc || "/placeholder.svg"}
              alt={selectedEvent.title}
              onError={(e) => {
                e.target.src = "/tech-event-workshop.png"
              }}
            />
            <div style={styles.modalBody}>
              <h2 style={styles.modalTitle}>{selectedEvent.title}</h2>
              {selectedEvent.Speaker && <p style={styles.modalSpeaker}>Speaker: {selectedEvent.Speaker}</p>}
              <p style={styles.modalDescription}>{selectedEvent.description}</p>
              <div style={styles.modalInfo}>
                {selectedEvent.info.map((item, index) => (
                  <div key={index} style={styles.infoItem}>
                    <div style={styles.infoLabel}>{item.label}</div>
                    <div style={styles.infoValue}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Events
