az.plot_kde(mu_posterior, values2=tau_posterior,
            contour_kwargs={"colors":None, "cmap":plt.cm.viridis},
            contourf_kwargs={"alpha":0});
