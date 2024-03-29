import React from "react";
import { useState, useContext } from "react";
import Spinner from "../../Spinner/Spinner";
import { Link } from "react-router-dom";
import { DataContext } from "../../CartContext/CartContext";
import { useEffect } from "react";

const Shipping = () => {
  const [loading, setLoading] = useState(true);
  const { shippingInformation, setShippingInformation } =
    useContext(DataContext);

  useEffect(() => {}, [shippingInformation]);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) return <Spinner />;

  const handleChange = (e) => {
    const val = e.target.value ? e.target.value : null;
    
    setShippingInformation({
      ...shippingInformation,
      [e.target.id]: val,
    });
  };

  const areEmailsEquals = () => {
    if (shippingInformation) {
      if (shippingInformation['emailAddress'] && shippingInformation['re-emailAddress']) {
        return shippingInformation['emailAddress'] === shippingInformation['re-emailAddress'];
      }
  
      return false;
    }
  };

  const areFieldsCompleted = () => {
    if (shippingInformation) {
      const shipInfoLength = Object.keys(shippingInformation).length;

      if (shipInfoLength === 0 || shipInfoLength !== 9) {
        return false;
      }

      let areAllCompleted = true;
      Object.values(shippingInformation).forEach(value => {
        if (value === undefined || value === null || value === "") {
          areAllCompleted = false;
        }
      });

      return areAllCompleted;
    }

    return false;
  };

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <div className="mt-10 sm:mt-2">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Información de envío
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Ingresa una dirección de correo electrónico a la cual
                    podamos enviarte notificaciones acerca de tu paquete
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nombre
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            onChange={handleChange}
                            id="firstName"
                            required
                            autoComplete="given-name"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Apellido
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="lastName"
                            onChange={handleChange}
                            autoComplete="family-name"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Correo electrónico
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="emailAddress"
                            onChange={handleChange}
                            autoComplete="email"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="re-email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Reingrese su correo electrónico
                          </label>
                          <input
                            type="text"
                            name="re-email-address"
                            id="re-emailAddress"
                            onChange={handleChange}
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            País
                          </label>
                          <select
                            id="country"
                            name="country"
                            defaultValue={null}
                            onChange={handleChange}
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-custbrown focus:border-custbrown sm:text-sm"
                          >
                            <option value={''}></option>
                            <option>Argentina</option>
                            <option>Chile</option>
                            <option>Uruguay</option>
                          </select>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Domicilio
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="streetAddress"
                            onChange={handleChange}
                            autoComplete="street-address"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Ciudad
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            onChange={handleChange}
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Provincia
                          </label>
                          <input
                            type="text"
                            name="region"
                            id="region"
                            onChange={handleChange}
                            autoComplete="address-level1"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Código postal
                          </label>
                          <input
                            type="text"
                            name="postal-code"
                            id="postalCode"
                            onChange={handleChange}
                            required
                            autoComplete="postal-code"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    {(areFieldsCompleted() && areEmailsEquals()) && (
                      <Link to={"/checkout/payment"}>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custgreen hover:bg-custbrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custbrown"
                          >
                            Continuar
                          </button>
                        </div>
                      </Link>
                    )}
                    {!areFieldsCompleted() && (
                      <p className="block text-sm font-medium text-right p-2 text-custbrown">
                        Complete todos los campos para continuar
                      </p>
                    )}
                    {(!areEmailsEquals() && areFieldsCompleted()) && (
                      <p className="block text-sm font-medium text-right p-2 text-custbrown">
                        Las direcciones de correo electrónico deben coincidir
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
