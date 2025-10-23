import React, { useState } from 'react'
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
 
const Geocoder = () => {

 
  function onPlaceSelect(value) {
    console.log(value);
  }
 
  function onSuggectionChange(value) {
    console.log(value);
  }
 
  return <GeoapifyContext apiKey="YOUR_API_KEY_HERE">
      <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
        type={type}
        lang={language}
        position={position}
        countryCodes={countryCodes}
        limit={limit}
        value={displayValue}
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
        />
    </GeoapifyContext>
}
 
export default Geocoder
