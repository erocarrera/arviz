az.plot_ess(
    idata, kind="quantile", var_names=['~thet'], filter_vars="like", coords=coords
)
