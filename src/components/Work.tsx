import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { initialProjects, Project } from "./ProjectData";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [editProject, setEditProject] = useState<Project>({
    id: 0,
    name: "",
    category: "",
    tools: "",
    description: "",
    image: "",
    link: ""
  });

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditProject({ ...projects[index] });
  };

  const handleSave = (index: number) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...editProject };
    setProjects(updatedProjects);
    setEditIndex(-1);
  };


  const [newProject, setNewProject] = useState<Project>({
    id: projects.length + 1,
    name: "",
    category: "",
    tools: "",
    description: "",
    image: "",
    link: ""
  });

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.name) return;
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
    setNewProject({
      id: projects.length + 2,
      name: "",
      category: "",
      tools: "",
      description: "",
      image: "",
      link: ""
    });
  };

  const handleNewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewProject({ ...newProject, image: url });
    }
  };

  const handleDelete = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <form onSubmit={handleAddProject} style={{ marginBottom: 40, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Project Name"
            value={newProject.name}
            onChange={e => setNewProject({ ...newProject, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={newProject.category}
            onChange={e => setNewProject({ ...newProject, category: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tools"
            value={newProject.tools}
            onChange={e => setNewProject({ ...newProject, tools: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newProject.description}
            onChange={e => setNewProject({ ...newProject, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Project Link"
            value={newProject.link}
            onChange={e => setNewProject({ ...newProject, link: e.target.value })}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleNewImage}
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={newProject.image.startsWith('blob:') ? '' : newProject.image}
            onChange={e => setNewProject({ ...newProject, image: e.target.value })}
          />
          <button type="submit">Add Project</button>
          {newProject.image && (
            <img src={newProject.image} alt="preview" style={{ height: 40, objectFit: 'contain', marginLeft: 8 }} />
          )}
        </form>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <>
                <div className="work-info">
                  <div className="work-title" style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <h3>0{index + 1}</h3>
                    </div>
                    <button onClick={() => handleDelete(project.id)} style={{ marginLeft: 8, background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 10px', cursor: 'pointer' }}>Delete</button>
                  </div>
                  <div>
                    {editIndex === index ? (
                      <>
                        <input
                          type="text"
                          value={editProject.name}
                          onChange={e => setEditProject({ ...editProject, name: e.target.value })}
                          placeholder="Project Name"
                        />
                        <input
                          type="text"
                          value={editProject.category}
                          onChange={e => setEditProject({ ...editProject, category: e.target.value })}
                          placeholder="Category"
                        />
                      </>
                    ) : (
                      <>
                        <h4>{project.name}</h4>
                        <p>{project.category}</p>
                      </>
                    )}
                  </div>
                  <h4>Tools and features</h4>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editProject.tools}
                      onChange={e => setEditProject({ ...editProject, tools: e.target.value })}
                      placeholder="Tools"
                    />
                  ) : (
                    <p>{project.tools}</p>
                  )}
                  <h4>Description</h4>
                  {editIndex === index ? (
                    <textarea
                      value={editProject.description}
                      onChange={e => setEditProject({ ...editProject, description: e.target.value })}
                      placeholder="Description"
                    />
                  ) : (
                    <p>{project.description}</p>
                  )}
                  <h4>Project Link</h4>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editProject.link}
                      onChange={e => setEditProject({ ...editProject, link: e.target.value })}
                      placeholder="Project Link"
                    />
                  ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
                  )}
                  <div style={{ marginTop: 8 }}>
                    {editIndex === index ? (
                      <>
                        <input
                          type="text"
                          value={editProject.image}
                          onChange={e => setEditProject({ ...editProject, image: e.target.value })}
                          placeholder="Image URL"
                        />
                        <button onClick={() => handleSave(index)}>Save</button>
                        <button onClick={() => setEditIndex(-1)}>Cancel</button>
                      </>
                    ) : (
                      <button onClick={() => handleEdit(index)}>Edit</button>
                    )}
                  </div>
                </div>
                <WorkImage image={editIndex === index ? editProject.image : project.image} alt={project.name} />
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
