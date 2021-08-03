import arviz as az
non_centered_data = az.load_arviz_data('non_centered_eight')
axes = az.plot_forest(non_centered_data,
                           kind='forestplot',
                           var_names=["^the"],
                           filter_vars="regex",
                           combined=True,
                           figsize=(9, 7))
axes[0].set_title('Estimated theta for 8 schools model')
