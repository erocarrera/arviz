import arviz as az
data = az.load_arviz_data('centered_eight')
az.plot_rank(data)
