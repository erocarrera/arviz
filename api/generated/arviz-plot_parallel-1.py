import arviz as az
data = az.load_arviz_data('centered_eight')
az.plot_parallel(data, var_names=["mu", "tau"])
