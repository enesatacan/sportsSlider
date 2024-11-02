let sports = [
  {
    id: 1,
    name: "Football",
    imageUrl:
      "https://cdn.prod.website-files.com/5ca5fe687e34be0992df1fbe/6235ea7fbaf601e8d3980228_boy-kicking-ball-on-football-field-2021-09-24-03-47-56-utc-min-min.jpg",
    aboutUrl: "https://en.wikipedia.org/wiki/Football",
  },
  {
    id: 2,
    name: "Basketball",
    imageUrl:
      "https://static.owayo-cdn.com/newhp/img/magazin/basketballstatistikEN/basketball-statistics-670.jpg",
    aboutUrl: "https://en.wikipedia.org/wiki/Basketball",
  },
  {
    id: 3,
    name: "Tennis",
    imageUrl:
      "https://magazine.fortevillageresort.com/wp-content/uploads/2022/01/tennis.jpg",
    aboutUrl: "https://en.wikipedia.org/wiki/Tennis",
  },
  {
    id: 4,
    name: "Cricket",
    imageUrl:
      "https://resources.cricket-australia.pulselive.com/photo-resources/2024/11/02/cd4c4c90-8d13-4851-b154-9face2b97ab4/McSweeney-Pulls-Australia-A-Mackay.jpg?width=950&height=535",
    aboutUrl: "https://en.wikipedia.org/wiki/Cricket",
  },
  {
    id: 5,
    name: "Baseball",
    imageUrl:
      "https://i.abcnewsfe.com/a/54508fa4-688e-4072-bbf0-67930d1d0336/baseball-1-ap-gmh-230901_1693579673197_hpMain.jpg?w=1500",
    aboutUrl: "https://en.wikipedia.org/wiki/Baseball",
  },
  {
    id: 6,
    name: "Golf",
    imageUrl:
      "https://www.hepsiburada.com/hayatburada/wp-content/uploads/2023/10/yesilin-sessiz-oyunu-golf-1.jpg",
    aboutUrl: "https://en.wikipedia.org/wiki/Golf",
  },
  {
    id: 7,
    name: "Rugby",
    imageUrl:
      "https://static01.nyt.com/images/2023/09/06/multimedia/06sp-rugby-pools-inyt-01-wcgp/06sp-rugby-pools-inyt-01-wcgp-videoSixteenByNine3000.jpg?year=2023&h=1688&w=3000&s=1330d8966ecdba8713898ea8bfae5a753fa41921319faa78761b9951f6ae9829&k=ZQJBKqZ0VN&tw=1",
    aboutUrl: "https://en.wikipedia.org/wiki/Rugby",
  },
  {
    id: 8,
    name: "Hockey",
    imageUrl:
      "https://rmucolonials.com/images/2024/10/31/deelstra_pic.png?width=1416&height=797&mode=crop&scale=both&format=jpg&quality=80&anchor=middlecenter",
    aboutUrl: "https://en.wikipedia.org/wiki/Hockey",
  },
  {
    id: 9,
    name: "Volleyball",
    imageUrl:
      "https://d2779tscntxxsw.cloudfront.net/587545ab5a65e.jpeg?width=1200&quality=80",
    aboutUrl: "https://en.wikipedia.org/wiki/Volleyball",
  },
  {
    id: 10,
    name: "Table Tennis",
    imageUrl:
      "https://www.customtabletennis.co.uk/wp-content/uploads/2019/05/famous-table-tennis-players.png",
    aboutUrl: "https://en.wikipedia.org/wiki/Table_tennis",
  },
];

let count = 0;

let cardTitle = document.querySelector(".card-title");
let img = document.querySelector(".img");
let readMore = document.querySelector(".read-more");
let prevBtn = document.querySelector(".prev-button");
let nextBtn = document.querySelector(".next-button");

function updateCard() {
  cardTitle.innerHTML = sports[count].name;
  img.src = sports[count].imageUrl;
  img.alt = sports[count].name;
  readMore.href = sports[count].aboutUrl;
}

updateCard();

nextBtn.addEventListener("click", function () {
  count = (count + 1) % sports.length;
  updateCard();
  console.log("next");
});
prevBtn.addEventListener("click", function () {
  count = (count - 1 + sports.length) % sports.length;
  updateCard();
  console.log("prev");
});
