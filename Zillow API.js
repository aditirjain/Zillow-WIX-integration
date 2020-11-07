import {fetch} from 'wix-fetch';  

export function getZohoLead(zohoid) {
  const url = 'https://www.zohoapis.com/crm/v2/functions/leadstatusupdate_api/actions/execute?auth_type=apikey';
  const key = '1003.f494138174fc7212fb005850a7fa145d.3ba955149e5cd74ba8b02363f194c4ce';
    
  let fullUrl = url + '&zapikey=' + key + '&id='+zohoid; 
  console.log("url = "+fullUrl);
  
  return fetch(fullUrl, {method: 'get'})
    .then(response => response.json());
}

export function createZohoLead_address(unit, address, source) {
  const url = 'https://www.zohoapis.com/crm/v2/functions/createwixleads1/actions/execute?auth_type=apikey';
  const key = '1003.f494138174fc7212fb005850a7fa145d.3ba955149e5cd74ba8b02363f194c4ce';
  let fullUrl = url + '&zapikey=' + key  + '&unit='+unit + '&address='+address + '&source='+source; 
  console.log("url = "+fullUrl);
  
  return fetch(fullUrl, {method: 'get'})
    .then(response => response.json());
}


export function updateZohoLead(beds, sqft, email, phone, purpose, agent, cashOffer,zId) {
  const url = 'https://www.zohoapis.com/crm/v2/functions/valuationleadupdate_api/actions/execute?auth_type=apikey';
  const key = '1003.f494138174fc7212fb005850a7fa145d.3ba955149e5cd74ba8b02363f194c4ce';
  let fullUrl = url + '&zapikey=' + key + '&beds='+beds + '&sqft='+sqft + '&email='+email + '&phone='+phone + '&purpose='+purpose + '&agent='+agent + '&cashOffer='+cashOffer + '&zId='+zId ; 
  console.log("url = "+fullUrl);
  
  return fetch(fullUrl, {method: 'get'})
    .then(response => response.json());
}

export function createZohoLead(beds, sqft, unit, email, phone, purpose, address, source) {
  const url = 'https://www.zohoapis.com/crm/v2/functions/createwixleads/actions/execute?auth_type=apikey';
  const key = '1003.f494138174fc7212fb005850a7fa145d.3ba955149e5cd74ba8b02363f194c4ce';
  let fullUrl = url + '&zapikey=' + key + '&beds='+beds + '&sqft='+sqft + '&unit='+unit + '&email='+email + '&phone='+phone + '&purpose='+purpose + '&address='+address + '&source='+source; 
  console.log("url = "+fullUrl);
  
  return fetch(fullUrl, {method: 'get'})
    .then(response => response.json());
}

export function getZohoValueZip(zip) {
  const url = 'https://api.bridgedataoutput.com/api/v2/zgecon/region?access_token=3f730ff233a605610990c79daf817fbb';
  // const key = '1003.f494138174fc7212fb005850a7fa145d.3ba955149e5cd74ba8b02363f194c4ce';
  let fullUrl = url + '&region='+zip; 


  // let len = zip.length;
  // console.log(len)
  return fetch(fullUrl, {method: 'get'})
    .then(response => response.json())
    .then(json => json.bundle[0].regionCity ); 
}


export function getZohoHomeValue(zip) {
  const url = 'https://api.bridgedataoutput.com/api/v2/zgecon/marketreport?access_token=3f730ff233a605610990c79daf817fbb&metricTypeKey=zhvi&cutTypeKey=uc_sfrcondo&regionTypeID=7&timePeriodEndDateTime.gt=2020-09-01&timePeriodEndDateTime.lt=2020-10-01';
  // const key = '1003.f494138174fc7212fb005850a7fa145d.3ba955149e5cd74ba8b02363f194c4ce';
  // let fullUrl = url + '&region='+zip; 
  let fullUrl = url + '&region='+zip + '&limit=1'; 
  // let len = zip.length;
  // console.log(len)
  console.log( fetch(fullUrl, {method: 'get'})
    .then(response => response.json()));

  return fetch(fullUrl, {method: 'get'})
    .then(response => response.json())
    .then(json => json.bundle[0].dataValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(".00","").toString());
}