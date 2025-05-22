// Sample project data
const projects = {
    "js-projects": [
      { title: "To-Do List", link: "https://debrafab.github.io/to-do-list/", description: "A simple to-do app.", year: 2023 },
    ],
    "python-projects": [
      { title: "Budget / Personal Fianance Tracker", link: "https://github.com/example3", description: "Tracks your expenses.", year: 2023 }
    ],
    "htmlcss-projects": [
      { title: "This Website Landing Page", link: "https://debrafab.github.io/Portfolio-Website/", description: "Basic responsive poertfolio  page.", year: 2025 }
    ],
    "c++-projects": [
      { title: "", link: "", description: "", year: 2025 }
    ]
  };
  
  // Toggle dropdown visibility
  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
  
  // Dynamically insert project items
  window.onload = () => {
    for (const category in projects) {
      const container = document.getElementById(category);
      const sortedProjects = projects[category].sort((a, b) => a.year - b.year); // Sort oldest to newest
  
      sortedProjects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'project-item';
  
        const link = document.createElement('a');
        link.href = project.link;
        link.target = "_blank";
        link.textContent = project.title;
  
        const tooltip = document.createElement('div');
        tooltip.className = 'description-box';
        tooltip.textContent = project.description;
  
        item.appendChild(link);
        item.appendChild(tooltip);
        container.appendChild(item);
      });
    }
  };  