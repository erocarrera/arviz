counties = radon.posterior.County[radon.constant_data.county_idx].values
colors = [
    "blue" if county[-1] in ("A", "N") else "green" for county in counties
]
az.plot_khat(loo_radon, color=colors)
