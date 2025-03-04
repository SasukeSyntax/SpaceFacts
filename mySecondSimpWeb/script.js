const spaceFacts = [
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "A day on Venus is longer than a year on Venus.",
    "The largest volcano in the solar system is on Mars. It's called Olympus Mons.",
    "Neutron stars are so dense that a single teaspoon of material from one would weigh about 6 billion tons.",
    "A full moon is about 1/6th the size of Earth, but it’s 238,855 miles away from Earth.",
    "The Hubble Space Telescope has taken pictures of galaxies that are over 13 billion light-years away.",
    "The longest possible time someone can survive in space without a spacesuit is 15 seconds.",
    "There is a planet made entirely of diamond called 55 Cancri e.",
    "A day on Jupiter lasts just about 10 hours, making it the fastest rotating planet in the solar system."
  ];

  function newFact() {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    document.getElementById('spaceFact').textContent = spaceFacts[randomIndex];
  }

  newFact();