import arviz as az
data = az.load_arviz_data('non_centered_eight')
az.plot_joint(data,
            var_names=['theta'],
            coords={'school': ['Choate', 'Phillips Andover']},
            kind='scatter',
            figsize=(6, 6))
