const data = [
  {
    title: "Continual Learning",
    image: require("../assets/imagenet-c.png"),
    summary:
      "(Master Thesis in progress) Working on implicit modeling of data from label space for continual learning.",
    report: "none",
    github: "none",
  },
  {
    title: "Patient ratings and reviews",
    image: require("../assets/drug_rating.png"),
    summary:
      "Analysed data of 280k patients' drug reviews and ratings under different conditions and treatments. Implemented RNNs to accurately predict drug ratings based on their reviews.",
    report: "none",
    github: "https://colab.research.google.com/drive/1bDopddB67FAyV8A_51O6Z6ra_obHY5M8",
  },
  {
    title: "Neural Network Verification",
    image: require("../assets/deeppoly.png"),
    summary:
      "Build a precise and scalable automated verifier for proving the robustness of fully connected and convolutional neural networks against adversarial attacks",
    report: require("../assets/pdf/Report_RIAI.pdf"),
    github: "https://github.com/agpeshal/Verifier",
  },
  {
    title: "Adversarial ML",
    image: require("../assets/robustness.png"),
    summary:
      "Implemented Fast Gradient Sign Method (FGSM) and Projected Gradient Descent (PGD) attacks on networks trained over CIFAR10 and MNIST.",
    report: "none",
    github: "https://github.com/agpeshal/Robustness",
  },
  {
    title: "Topic Modeling with meta-data",
    image: require("../assets/topic_modeling.png"),
    summary:
      "Analysed Dirichlet-Multinomial Regression (DMR) model for topic modeling with metadata. Derived and implemented Stochastic Gradient Riemann Langevin Dynamics on DMR model.",
    report: require("../assets/pdf/TPMI_PPT.pdf"),
    github: "none",
  },
  {
    title: "Tissue Classification",
    image: require("../assets/gene_2.png"),
    summary:
      "Predicted epithelial to mesenchymal transition and tissue hypoxia by using gene expression level of 35 genes for over 10k imbalanced samples for multiple domains. XGBoost performed the best among other methods.",
    report: require("../assets/pdf/Report_tissue.pdf"),
    github: "https://github.com/agpeshal/Gene-Expression",
  },
  {
    title: "Bayesian Analysis of GSN",
    image: require("../assets/skew_normal_2.png"),
    summary:
      "Formulated suitable parameters on all the three parameters of Geometric Skew Normal distribution to perform Bayesian analysis and evaluated the fit on multiple datasets using Kolmogorov-Smirnov test statistic.",
    report: require("../assets/pdf/PGP_PPT.pdf"),
    github: "none",
  },
  {
    title: "Price Change Indicator",
    image: require("../assets/price_change.png"),
    summary:
      "Analysed data with 700 attributes of 18 key commodities covering 140 markets across 100 districts of Syria over 22 months collected by IMPACT Initiatives (NGO) and predicted volatility and trend to assess the amount of cash transfer.",
    report: require("../assets/pdf/Report_Hack4Good.pdf"),
    github: "https://gitlab.com/analytics-club/hack4good/hs19/wonderwoman/-/tree/master",
  },
];

export default data;
