export const project4 = {
  name: 'French-English Translator',
  pointcolor: 'before:bg-[#373737]',
  title: 'French-English Translator',
  subtext:
    "Developed an advanced image classification and segmentation system to differentiate between tumor and non-tumor images and precisely identify brain tumors from MRI scans.\n\n. This innovative solution accelerates tumor detection, significantly reducing diagnostic time and costs.\nBy streamlining the diagnostic process, it provides critical support during the 2024 South Korean doctors' strike, addressing the shortage of medical professionals and enhancing early cancer detection capabilities.\n\n Future work: To add more parts of the brain segmentations for better analysis and create 3D point cloud model.",
  data: '2024.01 - 2024.03',
  team: 'Solo Project',
  tag: ['Attention', 'Translator'],

  giturl: 'https://github.com/DAEUN004/French-English_Translator/tree/main',

  featinfo: [
    'Developed a machine translator to convert between French and English, enhancing user interaction on a chatbot with improved language processing capabilities.',
  ],
  tools: [
    {
      title: 'PyTorch',
      detail:
        'A deep learning framework used to build and train the keypoint detection model, providing tools for developing neural networks and evaluating performance.',
    },
    {
      title: 'scikit-learn',
      detail:
        'A library for machine learning that provides tools for model evaluation, data preprocessing, and implementing algorithms.',
    },
    {
      title: 'OpenCV',
      detail:
        'A library for computer vision tasks, including image processing and analysis.',
    },
    {
      title: 'Image Segmentation',
      detail:
        'Techniques for partitioning an image into regions to identify and localize specific features, such as tumors..',
    },
  ],
  parts: [
    {
      title: 'Machine Translation Development',
      detailList: [
        "Created a machine translation system for French-English translation, using multiple machine learning models to improve user interaction on a chatbot.",
        "Integrated attention mechanisms to improve the model’s ability to handle context and relevance in both the encoding and decoding processes.",
      ],
    },
    {
      title: 'Trained on 22,000 Translation Pairs',
      detailList: [
        `Trained the translation model using a dataset of 22,000 English-French translation pairs, after thorough data preprocessing.`,
        'Achieved a precision score of 0.68, indicating the effectiveness of the model in translating between languages.',
        
      ],
    },
  ],
};
