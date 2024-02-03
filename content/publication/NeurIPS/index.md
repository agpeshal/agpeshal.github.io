---
title: "SnapBoost: A Heterogeneous Boosting Machine"
authors:
- Thomas Parnell
- Andreea Anghel
- Małgorzata Łazuka
- Nikolas Ioannou
- Sebastian Kurella
- admin
- Nikolaos Papandreou
- Haralampos Pozidis

author_notes:
- "Equal contribution"
- "Equal contribution"
date: "2020-09-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-12-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["conference-paper"]

# Publication name and optional abbreviated publication name.
publication: "Conference on Neural Information Processing Systems"
publication_short: "NeurIPS 2020"

abstract: Modern gradient boosting software frameworks, such as XGBoost and LightGBM, implement Newton descent in a functional space. At each boosting iteration, their goal is to find the base hypothesis, selected from some base hypothesis class, that is closest to the Newton descent direction in a Euclidean sense. Typically, the base hypothesis class is fixed to be all binary decision trees up to a given depth. In this work, we study a Heterogeneous Newton Boosting Machine (HNBM) in which the base hypothesis class may vary across boosting iterations. Specifically, at each boosting iteration, the base hypothesis class is chosen, from a fixed set of subclasses, by sampling from a probability distribution. We derive a global linear convergence rate for the HNBM under certain assumptions, and show that it agrees with existing rates for Newton's method when the Newton direction can be perfectly fitted by the base hypothesis at each boosting iteration. We then describe a particular realization of a HNBM, SnapBoost, that, at each boosting iteration, randomly selects between either a decision tree of variable depth or a linear regressor with random Fourier features. We describe how SnapBoost is implemented, with a focus on the training complexity. Finally, we present experimental results, using OpenML and Kaggle datasets, that show that SnapBoost is able to achieve better generalization loss than competing boosting frameworks, without taking significantly longer to tune.

# Summary. An optional shortened abstract.
summary:

tags:
- Source Themes
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://proceedings.neurips.cc/paper/2020/file/7fd3b80fb1884e2927df46a7139bb8bf-Paper.pdf
url_code: 'https://github.com/IBM/snapboost-neurips'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: 'https://research.ibm.com/publications/snapboost-a-heterogeneous-boosting-machine'
url_video: ''


# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides:
---

