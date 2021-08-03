import arviz as az
idata1 = az.load_arviz_data("centered_eight")
idata2 = az.load_arviz_data("non_centered_eight")
az.plot_elpd(
    {"centered model": idata1, "non centered model": idata2},
    xlabels=True
)
