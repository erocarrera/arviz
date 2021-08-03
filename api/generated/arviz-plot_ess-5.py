extra_kwargs = {"color": "lightsteelblue"}
az.plot_ess(
    idata, kind="evolution", var_names=["mu"],
    color="royalblue", extra_kwargs=extra_kwargs
)
