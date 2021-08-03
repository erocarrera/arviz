centered_eight = az.load_arviz_data("centered_eight")
khats = az.loo(centered_eight, pointwise=True).pareto_k
az.plot_khat(khats, xlabels=True, threshold=1)
