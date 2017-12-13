/*
 * xtrica-request v1.0.1513131952 (https://xtrica.com)
 * Copyright 2017 (or 2150?) Xtrica
 * Licensed under MIT
 */
const dispatchRequest=(type:string,url:string,data:any)=>{let xhr=new XMLHttpRequest()
xhr.open(type,url,!0)
xhr.setRequestHeader('Accept','application/json')
return new Promise((resolve,reject)=>{xhr.onload=()=>{if(xhr.status>=200&&xhr.status<300){resolve(xhr.response?JSON.parse(xhr.response):{})}else{reject(xhr.status)}}
if(type.toLowerCase()==='post'){let form=new FormData()
for(let property in data){if(data.hasOwnProperty(property)){if(data[property].hasOwnProperty('files')){form.append(property,data[property].files[0])}else{form.append(property,data[property])}}}
xhr.send(form)}else{xhr.setRequestHeader('Content-Type','application/json')
xhr.send(JSON.stringify(data))}})}
const fetchRequest=(type:string,url:string)=>{let xhr=new XMLHttpRequest()
xhr.open(type,url,!0)
xhr.setRequestHeader('Accept','application/json')
return new Promise((resolve,reject)=>{xhr.onload=()=>{if(xhr.status>=200&&xhr.status<300){resolve(xhr.response?JSON.parse(xhr.response):{})}else{reject(xhr.status)}}
xhr.send()})}
const requestDelete=(url:string)=>{return fetchRequest('DELETE',url)}
const requestGet=(url:string)=>{return fetchRequest('GET',url)}
const requestPatch=(url:string,data:any)=>{return dispatchRequest('PATCH',url,data)}
const requestPost=(url:string,data:any)=>{return dispatchRequest('POST',url,data)}
const requestPut=(url:string,data:any)=>{return dispatchRequest('PUT',url,data)}
const Request={delete:requestDelete,get:requestGet,patch:requestPatch,post:requestPost,put:requestPut}
export default Request