import arviz as az
idata = az.load_arviz_data("centered_eight")
az.apply_test_function(idata, lambda y, theta: np.min(y))
T = np.asscalar(idata.observed_data.T)
az.plot_posterior(idata, var_names=["T"], group="posterior_predictive", ref_val=T)
