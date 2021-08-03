import arviz as az
data = az.load_arviz_data("regression1d")
az.plot_bpv(data, kind="t_stat", t_stat=lambda x:np.percentile(x, q=50, axis=-1))
