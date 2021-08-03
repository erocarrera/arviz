import arviz as az
centered = az.load_arviz_data('centered_eight')
non_centered = az.load_arviz_data('non_centered_eight')
az.plot_density([centered, non_centered])
