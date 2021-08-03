import arviz as az
idata = az.load_arviz_data("radon")
az.plot_loo_pit(idata=idata, y="y")
