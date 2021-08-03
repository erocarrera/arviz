az.plot_joint(data,
            var_names=['theta'],
            coords={'school': ['Choate', 'Phillips Andover']},
            kind='hexbin',
            figsize=(6, 6))
