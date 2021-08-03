import arviz as az
data = az.load_arviz_data("regression1d")
az.plot_bpv(data, kind="p_value")
