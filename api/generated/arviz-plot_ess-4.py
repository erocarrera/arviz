az.plot_ess(
    idata, kind="local", var_names=["mu"], drawstyle="steps-mid", color="k",
    linestyle="-", marker=None, rug=True, rug_kwargs={"color": "r"}
)
