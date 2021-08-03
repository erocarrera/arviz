import arviz as az
centered = az.load_arviz_data('centered_eight')
coords = {'school': ['Choate', 'Deerfield']}
az.plot_pair(centered,
            var_names=['theta', 'mu', 'tau'],
            kind='kde',
            coords=coords,
            divergences=True,
            textsize=18)
