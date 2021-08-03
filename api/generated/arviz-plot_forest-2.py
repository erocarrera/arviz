rope = {'theta': [{'school': 'Choate', 'rope': (2, 4)}], 'mu': [{'rope': (-2, 2)}]}
axes = az.plot_forest(non_centered_data,
                           rope=rope,
                           var_names='~tau',
                           combined=True,
                           figsize=(9, 7))
axes[0].set_title('Estimated theta for 8 schools model')
