axes = az.plot_forest(non_centered_data,
                           kind='ridgeplot',
                           var_names=['theta'],
                           combined=True,
                           ridgeplot_overlap=3,
                           colors='white',
                           figsize=(9, 7))
axes[0].set_title('Estimated theta for 8 schools model')
