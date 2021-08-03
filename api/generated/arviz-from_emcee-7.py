dims = {"eta": ["school"], "log_likelihood": ["school"]}
data = az.from_emcee(
    sampler_blobs,
    var_names = ["mu", "tau", "eta"],
    slices=[0, 1, slice(2,None)],
    blob_names=["log_likelihood"],
    dims=dims,
    coords={"school": range(8)}
)
