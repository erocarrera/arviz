import arviz as az
idata = az.load_arviz_data('regression1d')
x = xr.DataArray(np.linspace(0, 1, 100))
data.posterior["y_model"] = data.posterior["intercept"] + data.posterior["slope"]*x
az.plot_lm(idata=data, y="y", x="x")
