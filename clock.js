function clock(){var e=new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat"),t=new Date,n=t.getFullYear(),o=t.getMonth()+1,r=t.getDate(),c=e[t.getDay()],u=t.getHours(),g=t.getMinutes(),a=t.getSeconds();o<10&&(o="0"+o),r<10&&(r="0"+r),g<10&&(g="0"+g),a<10&&(a="0"+a),document.getElementById("clock_date").innerHTML=n+"/"+o+"/"+r+" ("+c+")",document.getElementById("clock_time").innerHTML=u+":"+g+":"+a}var localToEorzea=function(){var e=new Date,t=(e.getTime(),e.getMonth(),e.getDate(),e.getDay(),e.getHours(),e.getMinutes(),e.getSeconds(),1440/70),n=0;return{setTime:function(e){n=e*t},setEtTime:function(e){n=e},getMonth:function(){return Math.floor(n/27648e5)%12},getDate:function(){return Math.floor(n/864e5)%32},getHours:function(){return Math.floor(n/36e5)%24},getMinutes:function(){return Math.floor(n/6e4)%60},getSeconds:function(){return Math.floor(n/1e3)%60},getMilliseconds:function(){return n%1e3},getTime:function(){return n},getSpeed:function(){return Math.floor(1e3/t)}}};function etClock(){var e=(new Date).getTime(),t=localToEorzea();t.setTime(e);t.getTime(),t.getSpeed();var n=t.getMonth()+1,o=t.getDate()+1,r=t.getHours(),c=t.getMinutes(),u=t.getSeconds();document.getElementById("etClock_date").innerHTML=n+"/"+o,document.getElementById("etClock_time").innerHTML=r+":"+c+":"+u}setInterval(clock,1e3),setInterval(etClock,localToEorzea().getSpeed());
