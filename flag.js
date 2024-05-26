var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link,true)
xml.send()
xml.onreadystatechange=function(){
  if(this.readyState===4 && this.status===200){
 //console.log((this.response),this.responseText)
    var flagData = (JSON.parse(this.response))
 for(var i in flagData)   console.log(flagData[i]["flag"],flagData[i]["flags"])
  }
}
