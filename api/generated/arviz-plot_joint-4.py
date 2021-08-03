data2 = az.load_arviz_data("centered_eight")
kde_kwargs = {"contourf_kwargs": {"alpha": 0}, "contour_kwargs": {"colors": "k"}}
ax = az.plot_joint(
    data, var_names=("mu", "tau"), kind="kde", fill_last=False,
    joint_kwargs=kde_kwargs, marginal_kwargs={"color": "k"}
)
kde_kwargs["contour_kwargs"]["colors"] = "r"
az.plot_joint(
    data2, var_names=("mu", "tau"), kind="kde", fill_last=False,
    joint_kwargs=kde_kwargs, marginal_kwargs={"color": "r"}, ax=ax
)
