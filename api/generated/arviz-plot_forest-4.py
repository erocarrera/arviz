axes = az.plot_forest(non_centered_data,
                           kind='ridgeplot',
                           var_names=['theta'],
                           combined=True,
                           ridgeplot_truncate=False,
                           ridgeplot_quantiles=[.25, .5, .75],
                           ridgeplot_overlap=0.7,
                           colors='white',
                           figsize=(9, 7))
axes[0].set_title('Estimated theta for 8 schools model')
