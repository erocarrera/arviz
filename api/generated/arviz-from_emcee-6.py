def lnprob_8school_blobs(theta, y, s):
    prior = log_prior_8school(theta)
    like_vect = log_likelihood_8school(theta, y, s)
    like = np.sum(like_vect)
    return like + prior, like_vect
sampler_blobs = emcee.EnsembleSampler(
    nwalkers,
    ndim,
    lnprob_8school_blobs,
    args=(y_obs, sigma)
)
sampler_blobs.run_mcmc(pos, draws);
