export const project6 = {
  name: 'French Lesson Planner',
  pointcolor: 'before:bg-[#373737]',
  title: 'French Lesson Planner',
  subtext:
    'Developed a French lesson planning tool for educators, enabling them to generate various lesson plans with customizable options for grammar, vocabulary, question quantities, and types.\n\n Worked on prompt engineering to generate diverse lesson plans based on JSON data received from the front end,\n and utilized AWS DynamoDB for efficient storage and retrieval of lesson plans',
  data: '2024.04 - 2024.07',
  team: '3 Members (1 Backend, 1 Frontend, 1 Database/Prompt Engineering)',
  tag: ['Prompt Engineering', 'DynamoDB', 'AWS Lambda'],
  imgurl: 'https://raw.githubusercontent.com/daeun004/icon/main/prompt_main.webp',
  detailimginfo: [
    {
      imgurl:
        'https://raw.githubusercontent.com/daeun004/icon/main/prompt_main.webp',
      subject: 'Main page',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/daeun004/icon/main/prompt_2.webp',
      subject: 'Creating lesson page',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/daeun004/icon/main/prompt_3.webp',
      subject: 'Lesson questions and answers generated',
    },
  ],
  featinfo: [
    'Users can seamlessly log in using their Google accounts for secure and convenient access.',
    'Users can retrieve or delete lesson plans as needed, providing flexibility in managing their content.',
    'Enables the creation of lesson plans with varying numbers of questions, answer types, and difficulty levels to tailor to different educational needs',
    'Supports a high volume of users for creating or retrieving lesson plans by leveraging AWS services, ensuring reliability and performance for a large user base.',
  ],
  tools: [
    {
      title: 'AWS DynamoDB',
      detail:
        'For storing and managing lesson plans, providing scalable and efficient database services.',
    },
    {
      title: 'AWS Lambda',
      detail:
        'For serverless functions that handle operations like creating, retrieving, or deleting lesson plans.',
    },
    {
      title: 'OpenAI GPT Models',
      detail:
        'For generating and fine-tuning prompts to produce specific outputs based on given instructions.',
    },
  ],
  parts: [
    {
      title: 'Prompt Engineering for Grammar and Vocabulary Lesson Plans',
      detailList: [
        `Developed **customized prompts** to generate diverse grammar and vocabulary lesson plans tailored to various educational needs and settings, focusing on user relevance and effectiveness of the content.`,
        'Continually refined prompts based on user feedback and educational requirements to ensure high-quality and engaging lesson plans.'
      ],
    },
    {
      title: 'Lesson Plan Management Through CRUD Operations',
      detailList: [
        `Implemented **\`CRUD\`** (Create, Read, Update, Delete) functionality to manage lesson plans efficiently.`,
        `Utilized AWS DynamoDB and backend APIs to ensure seamless data management and retrieval.`,
      ],
    },
    {
      title: 'Handling a Large Number of Customers',
      detailList: [
        `Deployed scalable AWS services, including \`Lambda\` and \`DynamoDB\`, to efficiently handle a **high volume of user requests** and ensure reliable performance during peak usage times.`,
        `Implemented **load balancing** and **auto-scaling** features to manage traffic and resource allocation dynamically`,
      ],
    },
  ],
};
