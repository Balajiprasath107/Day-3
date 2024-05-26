//Extracting name,region,subregion,population
var link = "https://restcountries.com/v3.1/all"
var xml = new XMLHttpRequest()
xml.open("GET",link,true)
xml.send()
xml.onreadystatechange=function(){
  if(this.readyState===4 && this.status===200){
    var flagData = (JSON.parse(this.response))
    for(var i in flagData) { 
        console.log(" name: "+flagData[i]["name"]["common"],'\n',"region: "+flagData[i]["region"],'\n',"subregion: "+flagData[i]["subregion"],'\n',"population: "+flagData[i]["population"])
  }
  }
}

