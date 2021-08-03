hdi_data = az.hdi(y_data, input_core_dims=[["draw"]])
ax = az.plot_hdi(x_data, hdi_data=hdi_data[0], color="r", fill_kwargs={"alpha": .2})
az.plot_hdi(x_data, hdi_data=hdi_data[1], color="k", ax=ax, fill_kwargs={"alpha": .2})
