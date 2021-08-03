def lnprob_8school_blobs(theta, y, sigma):
    mu, tau, eta = theta[0], theta[1], theta[2:]
    prior = log_prior_8school(theta)
    like_vect = log_likelihood_8school(theta, y, sigma)
    like = np.sum(like_vect)
    return like + prior, (like_vect, np.random.normal((mu + tau * eta), sigma))
sampler_blobs = emcee.EnsembleSampler(
    nwalkers,
    ndim,
    lnprob_8school_blobs,
    args=(y_obs, sigma),
)
sampler_blobs.run_mcmc(pos, draws);
dims = {"eta": ["school"], "log_likelihood": ["school"], "y": ["school"]}
data = az.from_emcee(
    sampler_blobs,
    var_names = ["mu", "tau", "eta"],
    slices=[0, 1, slice(2,None)],
    arg_names=["y","sigma"],
    arg_groups=["observed_data", "constant_data"],
    blob_names=["log_likelihood", "y"],
    blob_groups=["log_likelihood", "posterior_predictive"],
    dims=dims,
    coords={"school": range(8)}
)
