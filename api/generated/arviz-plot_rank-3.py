import matplotlib.pyplot as plt
centered_data = az.load_arviz_data('centered_eight')
noncentered_data = az.load_arviz_data('non_centered_eight')
_, ax = plt.subplots(1, 2, figsize=(12, 3))
az.plot_rank(centered_data, var_names="mu", kind='vlines', ax=ax[0])
az.plot_rank(noncentered_data, var_names="mu", kind='vlines', ax=ax[1])
