import numpy as np
import arviz as az
values = np.random.normal(0, 1, 500)
az.plot_dot(values)
