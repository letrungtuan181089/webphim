document.addEventListener("DOMContentLoaded", function () {

    const menuTitles = document.querySelectorAll(".menu-title");

menuTitles.forEach(title => {
  title.addEventListener("click", function () {

    if (window.innerWidth <= 768) {
      const parent = this.parentElement;
      parent.classList.toggle("active");
    }

  });
});

  const toggleBtn = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      document.body.classList.toggle("sidebar-open");
    });
  }

  const submenuItems = document.querySelectorAll(".submenu li");

  submenuItems.forEach(item => {
    item.addEventListener("click", function () {

      const filter = this.getAttribute("data-filter");
      if (!filter) return;

      const [key, value] = filter.split("=");

      fetch('/api/movies')
        .then(res => res.json())
        .then(data => {

          const container = document.getElementById("movieList");
          if (!container) return;

          container.innerHTML = "";

          const filtered = data.filter(movie =>
            String(movie[key]) === value
          );

          filtered.forEach(movie => {
            const div = document.createElement('div');
            div.className = 'card';

            div.innerHTML = `
              <img src="/${movie.thumbnail}" style="width:100%;border-radius:10px;margin-bottom:10px;">
              <h3>${movie.title}</h3>
              <p>${movie.year}</p>
              <p style="color:#aaa;font-size:14px;">
                ${movie.description}
              </p>
            `;

            div.onclick = () => {
           window.location.href = "/watch.html?video=" + movie.file;
            };

            container.appendChild(div);
          });

        });

    });
  });

});