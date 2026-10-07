/* Funções compartilhadas de renderização dos cases. */
function esc(value){
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function createProjectCard(project){
  const link = document.createElement('a');
  link.className = 'project-card';
  link.href = projectUrl(project);
  link.dataset.category = project.category;
  link.dataset.status = project.status;
  const cover = project.cover || (project.images && project.images[0] && project.images[0].src) || '';
  const sub = [project.segment, project.category].filter(Boolean);
  link.innerHTML = `
    <div class="frame${cover ? '' : ' image-fallback'}">
      ${cover ? `<img src="${esc(cover)}" alt="${esc(project.name)}${project.segment ? ' — ' + esc(project.segment) : ''}" loading="lazy" onerror="this.closest('.frame').classList.add('image-fallback');this.remove();">` : ''}
      ${project.status ? `<span class="project-status">${esc(project.status)}</span>` : ''}
    </div>
    <div class="meta">
      <div><h3>${esc(project.name)}</h3><span>${esc(project.segment || '')}</span></div>
      <span>${esc(project.category || '')}</span>
    </div>`;
  return link;
}

function renderProjectGrid(container, projects){
  if (!container) return;
  container.innerHTML = '';
  projects.forEach(project => container.appendChild(createProjectCard(project)));
}
