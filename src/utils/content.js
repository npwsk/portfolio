import { config } from '@/content/config';

export const getDefaultSkill = (name) => ({
  id: name,
  name,
  color: 'lightgray',
  icon: null,
});

export const getProjects = () =>
  config.projects.map((proj) => {
    const stack = proj.stack.map(
      (itemId) => config.skills.find((skill) => skill.id === itemId) ?? getDefaultSkill(itemId)
    );
    return { ...proj, stack };
  });

export const getProjectById = (id) => {
  const foundProject = config.projects.find((project) => project.id === id);
  if (!foundProject) return null;
  const stack = foundProject.stack.map(
    (itemId) => config.skills.find((skill) => skill.id === itemId) ?? getDefaultSkill(itemId)
  );
  return { ...foundProject, stack };
};
