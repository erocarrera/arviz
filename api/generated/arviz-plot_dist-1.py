import numpy as np
import arviz as az
a = np.random.poisson(4, 1000)
az.plot_dist(a)
