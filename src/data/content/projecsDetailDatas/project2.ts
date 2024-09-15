export const project2 = {
  name: 'Text Summarization Tool',
  pointcolor: 'before:bg-[#373737]',
  title: 'Text Summarization Tool',
  subtext:
    "Developed an advanced image classification and segmentation system to differentiate between tumor and non-tumor images and precisely identify brain tumors from MRI scans.\n\n. This innovative solution accelerates tumor detection, significantly reducing diagnostic time and costs.\nBy streamlining the diagnostic process, it provides critical support during the 2024 South Korean doctors' strike, addressing the shortage of medical professionals and enhancing early cancer detection capabilities.\n\n Future work: To add more parts of the brain segmentations for better analysis and create 3D point cloud model.",
  data: '2024.01 - 2024.03',
  team: '4 Members',
  tag: ['Transformer', 'LSTM', 'Text Summarization'],
  imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_pokedex.webp',
  giturl: 'https://github.com/DAEUN004/Transformer_Summarization_Tool/tree/main',
  detailimginfo: [
    {
      imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_poke1.webp',
      subject: 'Different answers by original model and unlearned model',
    },
  ],

  featinfo: [
    'Abstractive Summarization Comparison: Evaluated Seq2Seq with LSTM versus Transformer models for summarizing articles, focusing on performance across different datasets.',
    'Handling Long-Range Dependencies: Compared the effectiveness of LSTM and Transformer models in managing long-range dependencies and summarization accuracy.',
    'Dataset Utilization: Used large and small datasets to test model performance, ensuring thorough evaluation under various conditions.'
    ],
  tools: [
    {
      title: 'Seq2Seq with LSTM',
      detail:
        'An architecture featuring an encoder-decoder setup with LSTM units, used to capture long-range dependencies for text summarization.',
    },
    {
      title: 'Transformer',
      detail:
        'A model leveraging self-attention mechanisms and positional encoding to handle long-range dependencies and provide improved summarization performance.',
    },
    {
      title: 'SPACY',
      detail:
        'A library used for text preprocessing, including tokenization and text normalization, to prepare data for model input.',
    },
    {
      title: 'Keras',
      detail:
        'A high-level neural networks API used to build and train the Seq2Seq LSTM model, including tokenization, padding, and model fitting.',
    },
    {
      title: 'TensorFlow',
      detail:
        'An open-source machine learning library utilized for implementing and training both Seq2Seq LSTM and Transformer models.',
    },
  ],
  parts: [
    {
        title: 'Dataset Selection',
        detailList: [
            'Used the Alpaca CNN/Daily Mail dataset with 286,817 training pairs for comprehensive evaluation.',
            'Included a smaller dataset of 4,515 news articles from Hindu, Indian Times, and Guardian to test model performance on limited data.'
        ]
    },
    {
        title: 'Seq2Seq LSTM Model Implementation',
        detailList: [
            'Constructed an encoder-decoder model with LSTM units, trained on both small and large datasets, achieving insights on model scalability and performance.',
            'Observed model limitations with large datasets due to memory constraints and high model complexity.'
        ]
    },
    {
        title: 'Transformer Model Implementation',
        detailList: [
            'Built using positional encoding, multi-head attention, and other key components to handle long-range dependencies and improve summarization quality.',
            'Trained the Transformer model on the smaller dataset for 30 epochs, achieving a training loss of 3.2204 and a test loss of 3.6428.'
        ]
    },
    {
        title: 'Model Analysis and Results',
        detailList: [
            'Evaluated model performance based on training and validation losses, and summarized findings for both Seq2Seq LSTM and Transformer models.',
            'Identified strengths and limitations, including the Transformer model’s superior handling of long-range dependencies and scalability over LSTM.'
        ]
    }
  ]
  
};
