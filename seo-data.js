const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abhiram Vinjamuri",
    "jobTitle": "Forward Deployed Software Engineer",
    "worksFor": {
        "@type": "Organization",
        "name": "Palantir Technologies"
    },
    "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "University of Cambridge"
    },
    "knowsAbout": ["Computer Science", "Deep Learning", "Natural Language Processing", "Machine Learning", "Graph Neural Networks", "Software Engineering"],
    "url": "https://ramstar3000.github.io/",
    "sameAs": [
        "https://www.linkedin.com/in/ram-vinjamuri/",
        "https://github.com/ramstar3000"
    ]
};

const script = document.createElement('script');
script.type = "application/ld+json";
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);
