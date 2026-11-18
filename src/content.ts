export const NAME = "Nandhu";

export const heroLine = "Every beautiful story starts with a single moment...";

export type Memory = {
  image: string;
  video: string;
  title: string;
  caption: string;
  tall: boolean;
};

export const memories: Memory[] = [
  {
    image: "/story/1-office.jpg",
    video: "/story/1-office.mp4",
    title: "Where it all began",
    caption:
      "Just another day at the office: same desk, same coffee, same deadlines. I had no idea my whole story was about to walk through that door.",
    tall: true,
  },
  {
    image: "/story/2-arrival.jpg",
    video: "/story/2-arrival.mp4",
    title: "The day you walked in",
    caption:
      "The day you walked in, neither of us knew. You came to study, and somehow my whole life quietly decided to change.",
    tall: false,
  },
  {
    image: "/story/3-hello.jpg",
    video: "/story/3-hello.mp4",
    title: "Hello, you",
    caption:
      "Little by little we learned each other. A shared table, a shy laugh, a conversation that never wanted to end.",
    tall: true,
  },
  {
    image: "/story/4-friends.jpg",
    video: "/story/4-friends.mp4",
    title: "Best friends first",
    caption:
      "Before anything else, you became my favorite person to tell things to. Tea breaks turned into the best part of the day.",
    tall: false,
  },
  {
    image: "/story/5-date.jpg?v=4",
    video: "/story/5-date.mp4?v=4",
    title: "Our first date",
    caption:
      "Our first date was in front of a temple. Lamps glowing, your hand in mine, and I already knew I wanted every quiet evening beside you.",
    tall: true,
  },
];

export const letter = [
  `${NAME}, I love the way you make the world feel kinder just by being in it.`,
  "I love your laugh, and the quiet that follows it, and how both of them feel like home.",
  "I love the courage you lend me without ever making it feel like a debt.",
  "I love the life we have already built, in glances and promises and days that turned into a life.",
  "And I love the thought of every tomorrow that still has you in it.",
];

export const proposalQuestion = `${NAME}, will you marry me?`;

export const closingMessage =
  "Then it is settled. Every tomorrow is ours, and I will spend them choosing you.";

export const finalImage = "/story/6-proposal.jpg";
export const finalVideo = "/story/6-proposal.mp4";
