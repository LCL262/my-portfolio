import React from 'react';

const ProjectDetail = ({ project, onBack }) => {
    return (
        <div className="project-detail-wrapper">
            <button onClick={onBack} className="back-btn">&larr; Back</button>

            <div className="detail-container">
                <span className="project-category">{project.type}</span>
                <h2 className="detail-title">{project.title}</h2>
                <div className="title-underline"></div>

                {/* Media Section */}
                <div className="detail-media-container">
                    {project.type === 'AR/VR' && project.video ? (
                        <div className="video-responsive">
                            <iframe
                                width="100%"
                                height="315"
                                src={project.video}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="main-detail-video"
                            ></iframe>
                        </div>
                    ) : (
                        <img src={project.image} alt={project.title} className="main-detail-img" />
                    )}
                </div>

                {/* URL - Simple text link only if provided */}
                {project.url && project.url !== 'N/A' && (
                    <div className="project-url-link">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            {project.url}
                        </a>
                    </div>
                )}

                {/* Content Section */}
                {project.isPDFProject ? (
                    <div className="pdf-showcase-box">
                        <h3>Design Plan & Documentation</h3>
                        <p>Detailed conceptualization, planning, and development phases are available in the full project report.</p>
                        <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="pdf-btn">
                            View Full Design Plan (PDF)
                        </a>
                    </div>
                ) : (
                    <div className="process-grid">
                        <div className="process-step">
                            <h3>01 Conceptualization</h3>
                            <p>{project.conceptualization}</p>
                        </div>

                        <div className="process-step">
                            <h3>02 Planning</h3>
                            <p>{project.planning}</p>
                        </div>

                        <div className="process-step">
                            <h3>03 Development</h3>
                            <p>{project.development}</p>
                        </div>
                    </div>
                )}

                {/* Key Contributions Section - Black Text */}
                <div className="technical-summary">
                    <h3 className="summary-title">Key Contributions</h3>
                    <ul className="contribution-list">
                        {project.tasks.map((task, i) => (
                            <li key={i} className="contribution-item">
                                {task}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;