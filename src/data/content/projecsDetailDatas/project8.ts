export const project8 = {
  name: 'Brain Tumor Detector',
  pointcolor: 'before:bg-[#373737]',
  title: 'Brain Tumor Detector',
  subtext:
    "Developed an advanced image classification and segmentation system to differentiate between tumor and non-tumor images and precisely identify brain tumors from MRI scans.\n\n. This innovative solution accelerates tumor detection, significantly reducing diagnostic time and costs.\nBy streamlining the diagnostic process, it provides critical support during the 2024 South Korean doctors' strike, addressing the shortage of medical professionals and enhancing early cancer detection capabilities.\n\n Future work: To add more parts of the brain segmentations for better analysis and create 3D point cloud model.",
  data: '2024.09 - Ongoing',
  team: 'Solo Project',
  tag: ['Image Segmentation', 'Image Classification'],
  imgurl: 'https://raw.githubusercontent.com/daeun004/icon/main/brain_mri.webp',
  giturl: 'https://github.com/DAEUN004/Brain_Tumor_Detector',
  featinfo: [
    'Displays Tumor Segmentation: When an MRI image of the brain is input, the system highlights the tumor-affected region if present; otherwise, it reports "no tumor."',
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
        'Techniques for partitioning an image into regions to identify and localize specific features, such as tumors.',
    },
  ],
  parts: [
    {
      title: 'Trained on 4,000 MRI Images',
      detailList: [
        "Utilized a comprehensive dataset to enhance model accuracy and reliability.",
      ],
    },
    {
      title: 'Implemented ResNet Classifier Mode',
      detailList: [
        `Applied a ResNet deep learning model using \`PyTorch\` to detect brain tumors with high precision`,
        
      ],
    },
    {
      title: 'Developed Custom ResNet Segmentation Model:',
      detailList: [
        `Built a segmentation model to accurately identify and localize tumors in MRI scans.`,
      ],
    },
    {
      title: 'Leveraged Transfer Learning',
      detailList: [
        ` Enhanced model performance by applying transfer learning techniques, utilizing pre-trained networks for improved feature extraction.`,
      ],
    },
  ],
};
