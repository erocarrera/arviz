X = np.random.normal(0,1,100)
Y = np.random.normal(2 + X * 0.5, 0.5, (10,100))
idata = az.from_dict(posterior={"y": Y}, constant_data={"x":X})
x_data = idata.constant_data.x
y_data = idata.posterior.y
az.plot_hdi(x_data, y_data)
