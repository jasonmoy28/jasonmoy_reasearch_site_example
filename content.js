// #Set global variable
const global = {
  web_title: "Project Title",
  brand_name: "Project Title",
  // # I would appreciate it if you give me the credit. But it is a MIT license, so do whatever you want.
  footer: "© Jason Moy | Created & designed by Jason Moy",
};

const indexHTML = {
  main_title: "Thesis Title",
  // #Wrap <strong> </strong> around bold content
  abstract: `<strong> Abstract </strong>:  Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Perspiciatis soluta magnam ratione dolor optio ex,
  explicabo veritatis modi consequatur, non at tempora numquam ipsum
  aliquam. Architecto quos numquam debitis dicta! Lorem ipsum dolor
  sit, amet consectetur adipisicing elit. Ea veritatis cupiditate
  cumque quibusdam laborum voluptatem nemo. Nobis velit aperiam dolor,
  delectus aut provident exercitationem et ducimus nisi, aliquid,
  reprehenderit alias! Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Sequi, deleniti quod officiis voluptatum
  doloremque minima, adipisci aliquid iste fugit, possimus saepe! Hic
  odit, vitae fuga itaque excepturi deleniti commodi cupiditate!"`,
  // # Add as many author as you want. You must use the same format of {author: [name, link] }.
  // # If authors has no link use null. All links must include "https://"
  authors: [
    { author1: ["Jason Moy", "https://jasonmoy.us"] },
    { author2: ["Author 2", null] },
    { author3: ["Author 3", "https://jasonmoy.us"] },
  ],
  affiliation_name: "Institution Name",
  lab_name: "Lab Name",
  lab_link: "#",
  github_link: "https://github.com/jasonmoy28/jasonmoy_reasearch_site_example",
};

const manuscript = {
  // #If "show_manuscript" is set to false, it will show "Not Yet Avaliable" instead of "Download it here". The iframe box will also be removed
  show_manuscript: true,
  manuscript_source: "static/manuscript/example_thesis.pdf",
};

const visualization = {
  // *You can add or delete images as you want, just use the same format
  img1_src: "static/visualization/demo-image 1.png",
  img2_src: "static/visualization/demo-image 2.png",
  img3_src: "static/visualization/demo-image 3.png",
  img4_src: "static/visualization/demo-image 4.png",
  img5_src: "static/visualization/demo-image 5.png",
  img6_src: "static/visualization/demo-image 6.png",
};

const poster = {
  // #If "show_poster" is set to false, it will show "Not Yet Avaliable" instead of "Download it here". The iframe box will also be removed
  show_poster: true,
  poster_source: "static/posters/example_poster.pdf",
};
