obs_county = data.posterior["County"][data.constant_data["county_idx"]]
data = data.assign_coords(obs_id=obs_county, groups="observed_vars")
az.plot_ppc(data, coords={'obs_id': ['ANOKA', 'BELTRAMI']}, flatten=[])
