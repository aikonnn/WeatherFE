import React from 'react'
import { AzureMap, AzureMapsProvider, IAzureMapOptions } from 'react-azure-maps'
import { AuthenticationType } from 'azure-maps-control'

const option = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: process.env.REACT_APP_AZURE_PRIMARY_KEY
  },
}

const Map = () => {
  return <div style={{ height: '300px', width: '300px' }}>
    <AzureMapsProvider>
      <AzureMap options={option}>
      </AzureMap>
    </AzureMapsProvider>
  </div>
}

export default Map