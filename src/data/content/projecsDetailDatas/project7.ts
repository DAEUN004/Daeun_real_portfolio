export const project7 = {
  name: 'machine unlearning',
  pointcolor: 'before:bg-[#373737]',
  title: 'Machine Unlearning',
  subtext:
    'Reimplemented machine unlearning algorithms to effectively remove "Les Miserable" from 7b-llama model.\n\n Machine unlearning is crucial for ensuring data privacy and compliance, as it allows us to retract specific information from models while maintaining their overall functionality.',
  data: '2024.05 - 2024.07',
  team: '2 members (Research Engineer, Intern)',
  tag: ['Machine Unlearning', 'LLM', 'LoRa', 'PEFT'],
  imgurl: 'https://raw.githubusercontent.com/daeun004/icon/main/unlearning.webp',
  detailimginfo: [
    {
      imgurl: 'https://raw.githubusercontent.com/daeun004/icon/main/unlearning.webp',
      subject: 'Different answers by original model and unlearned model',
    },
  ],

  featinfo: [
    'Enables removal of a specific dataset without requiring a full model retrain.',
    'Enhances user security by ensuring selective data removal and privacy.',
    'Deployment allows users to select and compare different models with the original model.',
  ],
  tools: [
    {
      title: 'LoRA (Low Rank Adaptation)',
      detail:
        'A technique that efficiently adapts pre-trained models by introducing low-rank updates, reducing the computational cost of fine-tuning.',
    },
    {
      title: 'Machine Unlearning',
      detail:
        'A process for removing specific data from a trained model to ensure data privacy and compliance without needing to retrain the entire model from scratch.',
    },
    {
      title: 'Hugging Face Transformers',
      detail:
        'Libraries for working with large language models and unlearning techniques.',
    },
    {
      title: 'Streamlit',
      detail:
        'Framework for building and sharing interactive web applications to visualize model comparisons.',
    },
  ],
  parts: [
    {
      title: 'Machine Unlearning Pipeline Construction',
      detailList: [
        "Designed and implemented a \`machine unlearning\`pipeline to efficiently remove specific datasets from models.",
        "Ensured smooth operation and minimized the computational overhead typically associated with data removal.",
      ],
    },
    {
      title: 'Implementation of Various Fine-Tuning Methods',
      detailList: [
        `Applied multiple fine-tuning techniques to identify the most effective models:\n \`Hugging Face\`, \`PEFT\`, \`LoRA\``,
        
      ],
    },
    {
      title: 'Side-by-Side Comparison of LLM Models:',
      detailList: [
        `Developed a feature allowing users to compare the outputs of different large language models side by side. `,
        `Direct and simultaneous evaluation of model performance, helping users make informed decisions based on comparative results.`,
      ],
    },
    {
      title: 'Lightweight Algorithm Optimization',
      detailList: [
        `Achieved a more efficient algorithm by optimizing computational resources and reducing complexity.`,
        `Utilized \`model pruning\` and \`quantization\`, leading to faster execution times and reduced memory usage without compromising performance.`,
      ],
    },
  ],
};
