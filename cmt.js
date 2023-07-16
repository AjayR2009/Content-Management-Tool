function addBlog() {
    var title = document.getElementById("title").value;
    var image = document.getElementById("image").value;
    var content = document.getElementById("content").value;
    var video = document.getElementById("video").value

    

    var blogPost = document.createElement("div");
    blogPost.className = "blog-post";
    blogPost.innerHTML = `
      <h3 style="text-aling:center;">${title}</h3>
      <br>
  
      <img src="${image}" alt="Blog Image">
  
      <br>
      <p style="color: white; font-size: medium; text-align: center">${content}</p>
      <br>
   
      <iframe width="560" height="315" src="${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
    `;

    var previewSection = document.getElementById("preview");
    previewSection.appendChild(blogPost);

    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
    document.getElementById("content").value = "";
    document.getElementById("video").value = "";
  }