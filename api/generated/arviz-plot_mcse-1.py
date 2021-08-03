import arviz as az
idata = az.load_arviz_data("centered_eight")
coords = {"school": ["Deerfield", "Lawrenceville"]}
az.plot_mcse(
    idata, var_names=["mu", "theta"], coords=coords
)
