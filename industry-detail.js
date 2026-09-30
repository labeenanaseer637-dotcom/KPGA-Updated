// Industry content displayed by the selected category.
const industryCategories = {
  "traders-miners": {
    number: "01 / TRADE & SOURCING",
    image: "assets/img/placeholders/Slide.jpg",
    title: "Gemstone Traders & Miners",
    summary: "People and businesses involved in gemstone trading and mining.",
    description:
      "KPGJA brings together gemstone traders and miners as part of the wider provincial gems and jewellery sector. The association aims to encourage responsible business practices and stronger connections with local, national and international markets.",
    topics: [
      "Gemstone traders and dealers",
      "Mining stakeholders",
      "Responsible business practices",
    ],
  },
  jewellery: {
    number: "02 / BUSINESSES",
    image: "assets/img/placeholders/Slider2.jpg",
    title: "Jewellery Businesses",
    summary: "Jewellery businesses and manufacturers represented by KPGJA.",
    description:
      "Jewellery businesses are among the stakeholders represented by KPGJA. The association supports value addition, skills, digital business and opportunities for stronger market connections.",
    topics: [
      "Jewellery businesses",
      "Manufacturers and makers",
      "Skills and value addition",
    ],
  },
  lapidary: {
    number: "03 / VALUE ADDITION",
    image: "assets/img/placeholders/Slider1.jpg",
    title: "Lapidaries",
    summary: "Cutters and polishers who add specialist skill and value.",
    description:
      "Lapidaries, including gemstone cutters and polishers, are part of the community KPGJA brings together. The association’s priorities include modern cutting, polishing, grading, finishing and value addition.",
    topics: [
      "Cutting and polishing",
      "Grading and finishing",
      "Skills development",
    ],
  },
  artisans: {
    number: "04 / CRAFT",
    image: "assets/img/official/women-empowerment.webp",
    title: "Artisans",
    summary: "Skilled artisans contributing to the gems and jewellery sector.",
    description:
      "Artisans are among the stakeholders represented by KPGJA. The association aims to support skills development, employment, entrepreneurship and recognition of the region’s craftsmanship.",
    topics: [
      "Artisans and craftspeople",
      "Skills and training",
      "Entrepreneurship and employment",
    ],
  },
  "export-ecommerce": {
    number: "05 / MARKETS",
    image: "assets/img/official/who-we-are.webp",
    title: "Export & E-commerce",
    summary:
      "Exporters and digital business professionals connecting to markets.",
    description:
      "KPGJA’s supplied priorities include facilitating access to national and international markets and promoting e-commerce and digital business across the sector.",
    topics: [
      "Exporters and trade stakeholders",
      "E-commerce and digital business",
      "National and international market access",
    ],
  },
};
// Read the selected category and fill the page from its content.
const selectedKey = new URLSearchParams(window.location.search).get("category");
const category =
  industryCategories[selectedKey] || industryCategories["traders-miners"];
document.title = `${category.title} | KPGJA Industry`;
document.getElementById("industry-kicker").textContent = category.number;
document.getElementById("industry-title").textContent = category.title;
document.getElementById("industry-breadcrumb").textContent = category.title;
document.getElementById("industry-summary").textContent = category.summary;
document.getElementById("industry-heading").textContent = category.title;
document.getElementById("industry-description").textContent =
  category.description;
const industryImage = document.getElementById("industry-image");
industryImage.src = category.image;
industryImage.alt = `${category.title} in the KPGJA community`;
const topicList = document.getElementById("industry-topics");
category.topics.forEach((topic) => {
  const item = document.createElement("li");
  item.textContent = topic;
  topicList.appendChild(item);
});
