import numpy as np
import arviz as az
x_data = np.random.normal(0, 1, 100)
y_data = np.random.normal(2 + x_data * 0.5, 0.5, (2, 50, 100))
az.plot_hdi(x_data, y_data)
