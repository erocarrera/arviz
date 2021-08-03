import arviz as az
radon = az.load_arviz_data("radon")
loo_radon = az.loo(radon, pointwise=True)
az.plot_khat(loo_radon, show_bins=True)
