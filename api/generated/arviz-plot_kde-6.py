rvs = np.random.vonmises(mu=np.pi, kappa=2, size=500)
az.plot_kde(rvs, is_circular=True)
