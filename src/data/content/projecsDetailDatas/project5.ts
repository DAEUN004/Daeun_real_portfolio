export const project5 = {
  name: 'Real-Time Visual SLAM on Embedded Platforms',
  pointcolor: 'before:bg-[#373737]',
  title: 'Real-Time Visual SLAM on Embedded Platforms',
  subtext:
    "Developed an advanced image classification and segmentation system to differentiate between tumor and non-tumor images and precisely identify brain tumors from MRI scans.\n\n. This innovative solution accelerates tumor detection, significantly reducing diagnostic time and costs.\nBy streamlining the diagnostic process, it provides critical support during the 2024 South Korean doctors' strike, addressing the shortage of medical professionals and enhancing early cancer detection capabilities.\n\n Future work: To add more parts of the brain segmentations for better analysis and create 3D point cloud model.",
  data: '2023.08 - Ongoing',
  team: 'AI Master Project',
  tag: ['Vi-SLAM', 'Keypoint Detection'],
  imgurl: 'https://raw.githubusercontent.com/daeun004/icon/main/master.webp',
  featinfo: [
    'Built a **deep learning-based** keypoint detector for Vi-SLAM, offering improved efficiency in adverse conditions such as low illumination, rainy weather, and varying viewpoints.',
  ],
  tools: [
    {
      title: 'PyTorch',
      detail:
        'A library for machine learning that provides tools for model evaluation, data preprocessing, and implementing algorithms.',
    },
    {
      title: 'Tensorflow',
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
      title: 'Developed Deep Learning-Based Keypoint Detector',
      detailList: [
        "Designed and implemented a keypoint detector using deep learning techniques, aiming to improve efficiency in challenging environments compared to traditional methods like ORB-SLAM.",
        "Focused on handling adverse conditions, including low illumination, rainy weather, and changing viewpoints.",
      ],
    },
    {
      title: 'Evaluated Various Deep Learning Keypoint Detectors',
      detailList: [
        `Assessed the performance of the developed keypoint detector against other 10 deep learning models like using 5 different evaluation metrics.`,
        
      ],
    },
  ],
};
