/*
 * xtrica-request v1.0.1514484464 (https://xtrica.com)
 * Copyright 2017 (or 2150?) Xtrica
 * Licensed under MIT
 */
const dispatchRequest=(type,url,data)=>{return new Promise((resolve,reject)=>{try{let xhr=new XMLHttpRequest()
xhr.open(type,url,!0)
xhr.setRequestHeader('Accept','application/json')
xhr.onerror=()=>{reject(0)}
xhr.onload=()=>{let status=parseInt(xhr.status)>0?parseInt(xhr.status):0
if(status>=200&&status<300){resolve(xhr.response?JSON.parse(xhr.response):{})}else{reject(status)}}
if(type.toLowerCase()==='post'){let form=new FormData()
for(let property in data){if(data.hasOwnProperty(property)){if(data[property].hasOwnProperty('files')){form.append(property,data[property].files[0])}else{form.append(property,data[property])}}}
xhr.send(form)}else{xhr.setRequestHeader('Content-Type','application/json')
xhr.send(JSON.stringify(data))}}catch(err){let status=parseInt(err)>0?parseInt(err):0
reject(status)}})}
const fetchRequest=(type,url)=>{return new Promise((resolve,reject)=>{try{let xhr=new XMLHttpRequest()
xhr.open(type,url,!0)
xhr.setRequestHeader('Accept','application/json')
xhr.onerror=()=>{reject(0)}
xhr.onload=()=>{let status=parseInt(xhr.status)>0?parseInt(xhr.status):0
if(status>=200&&status<300){resolve(xhr.response?JSON.parse(xhr.response):{})}else{reject(status)}}
xhr.send()}catch(err){let status=parseInt(err)>0?parseInt(err):0
reject(status)}})}
const requestDelete=(url)=>{return fetchRequest('DELETE',url)}
const requestGet=(url)=>{return fetchRequest('GET',url)}
const requestPatch=(url,data)=>{return dispatchRequest('PATCH',url,data)}
const requestPost=(url,data)=>{return dispatchRequest('POST',url,data)}
const requestPut=(url,data)=>{return dispatchRequest('PUT',url,data)}
const Request={delete:requestDelete,get:requestGet,patch:requestPatch,post:requestPost,put:requestPut}
export default Request