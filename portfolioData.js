// categories: Flutter, LLM, Game, React, Typographic, Randomness, Python, Package

const projectsData = [
  {
    title: "Mega Search",
    blurb:
      "This very simple chat interface uses LangChain to provide OpenAI with access to SerpApi (Google searches) for more current and in-depth responses to queries.",
    categories: ["LLM"],
    description:
      "The frontend of this site simply forwards the user's query to the backend and awaits a response. The backend is built with Express and uses LangChain to provide OpenAI with access to SerpApi. There is a limit of 10 queries per 48 hours.",
    link: ["q72.site/mega-search", "https://q72.site/mega-search"],
    gitHubUrl: "https://github.com/stuart-rickard/mega-search",
  },
  {
    title: "Mond Random",
    blurb:
      "This site generates random Mondrian-style images. It was built with HTML and JavaScript.",
    categories: ["Randomness"],
    description:
      "This site randomly generates orthagonal black lines and fills the resulting rectangles with white and primary colors. If you refresh the page a few times you may see compositions that you feel are more or less pleasing or 'Mondrian-like.'",
    link: ["q72.site/mond-random", "https://q72.site/mond-random"],
    gitHubUrl: "https://github.com/stuart-rickard/mond-random",
  },
  {
    title: "Reporter",
    blurb:
      "A chat-interface game where you play as a reporter who pursues a story about Pancho Villa. The game will also generate images of scenes. Utilizes ChatGPT.",
    categories: ["LLM", "Game"],
    description:
      "Pancho Villa was Mexican revolutionary active in Northern Mexico who attacked Columbus, New Mexico in 1916. The game is set in 1916 and the player is a reporter who is trying to get the story of Villa's life and activities. The game will generate images of scenes. The game uses ChatGPT to generate responses to the player's input.",
    link: ["q72.site/reporter", "https://q72.site/reporter"],
    gitHubUrl: "https://github.com/stuart-rickard/reporter-site", // TODO: add backend repo
  },
  {
    title: "Chessir",
    blurb:
      "A PyPI package for a chess board model that will import and export FEN, generate valid moves, and provide game status.",
    categories: ["Python", "Package"],
    description:
      "Chessir is a fork of the Chessnut PyPI package. It is a chess board model written in Python that is intentionally simple. Like Chessnut, Chessir is not written for speed, but it is about twenty times faster than Chessnut at generating valid chess moves from a given position on a chess board.",
    link: ["Chessir on PyPI", "https://pypi.org/project/Chessir/"],
    gitHubUrl: "https://github.com/stuart-rickard/Chessir",
  },
  // {
  //   title: "",
  //   blurb:
  //     "",
  //   categories: ["", ""],
  //   description:
  //     "",
  //   link: ["q72.site/", "https://q72.site/"],
  //   gitHubUrl: "https://github.com/stuart-rickard/",
  // },
  // {
  //   title: "Test",
  //   blurb: "This is a test blurb.",
  //   categories: [
  //     "a",
  //     "b",
  //     "q",
  //     "w",
  //     "e",
  //     "r",
  //     "t",
  //     "y",
  //     "u",
  //     "i",
  //     "o",
  //     "p",
  //     "s",
  //   ],
  //   description: "This is the test description.",
  //   link: ["q72.site/nowhere", "https://q72.site/nowhere"],
  //   gitHubUrl: "https://github.com/stuart-rickard/nowhere",
  // },
];
