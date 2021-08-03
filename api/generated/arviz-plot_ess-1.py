import arviz as az
idata = az.load_arviz_data("centered_eight")
coords = {"school": ["Choate", "Lawrenceville"]}
az.plot_ess(
    idata, kind="local", var_names=["mu", "theta"], coords=coords
)
