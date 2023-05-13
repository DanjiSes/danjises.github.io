(()=>{"use strict";function e(e){this.points=e}e.prototype.geocode=function(e,o){for(var n=new ymaps.vow.defer,s=new ymaps.GeoObjectCollection,a=o.skip||0,r=o.results||20,t=[],d=0,c=this.points.length;d<c;d++)-1==(i=this.points[d]).name.toLowerCase().indexOf(e.toLowerCase())&&-1==i.address.toLowerCase().indexOf(e.toLowerCase())||t.push(i);for(d=0,c=(t=t.splice(a,r)).length;d<c;d++){var i,p=(i=t[d]).coords,l=i.name;s.add(new ymaps.Placemark(p,{name:l,description:i.address,balloonContentBody:"",boundedBy:[p,p]}))}return n.resolve({geoObjects:s,metaData:{geocoder:{request:e,found:s.getLength(),results:r,skip:a}}}),n.promise().then((function(e){var o;return console.log(null===(o=window.__shMap__)||void 0===o?void 0:o.getZoom()),e}))};const o=JSON.parse('[{"name":"Дискаунтер43","city":"Киров","address":"г.Киров, ул. Блюхера, дом 8а","phones":["8(8332) 377-123"],"coords":[58.585071,49.685261]},{"name":"Аксесс","city":"Киров","address":"г.Киров, ул. Московская,дом 15,  (этаж цокольный)","phones":["8(8332) 47-91-48","8(912) 827-91-48"],"coords":[58.603956,49.678371]},{"name":"СИБ-ФЛЭШ","city":"Омск","address":"г.Омск ул Декабристов д.108","phones":["8-3812-488990"],"coords":[54.96945,73.395045]},{"name":"СИБ-ФЛЭШ","city":"Омск","address":"г.Омск ул Химиков,9/Малунцева,1 ТК Гранат","phones":["8-3812-487807"],"coords":[55.030297,73.285127]},{"name":"ИП Файзулаев Р.А","city":"Санкт-Петербург","address":"г. Санкт-Петербург ул Садовая  28/30 корпус 10 место А8","phones":["8-966-757-25-24"],"coords":[59.930755,30.327932]},{"name":"ООО \\"Рубин\\"","city":"Москва","address":"Москва Митинский рынок ПАВ 147","phones":["8-966-757-25-24"],"coords":[55.844334,37.383633]},{"name":"ИП Высоченко Ю.В","city":"Москва","address":"Москва Митинский рынок ПАВ 282","phones":["8-903- 000- 06- 15"],"coords":[55.844333,37.383632]},{"name":"ИП Высоченко Ю.В","city":"Москва","address":"Москва Савеловский ТК Сущевский Вал д 5 стр 12 ПАВ Л-133","phones":["8-903- 000- 06- 15"],"coords":[55.796675,37.593761]},{"name":"Оптово-розничная компания Dataland","city":"Ижевск","address":"г. Ижевск, Красноармейская 127, 2 этаж","phones":["(3412) 51-47-57","+7 (912) 011-90-49"],"coords":[56.840857,53.209227]},{"name":"м-н «ЦЕНТР-ВИДЕО»","city":"Норильск","address":"г. Норильск , Красноярского края, ул. Комсомольская д.35","phones":["+7 (3919) 494847","+7 (3919) 463366"],"coords":[69.348526,88.188788]},{"name":"И.П. Елисеев С.Н. Торговая марка Dvplay","city":"Cанкт-Петербург","address":"г. Cанкт-Петербург , ул. Маршала Казакова,  дом 35,  Магазин № 199","phones":["+7(952)288-20-50","+7(812)-7470218"],"coords":[59.862506,30.211044]},{"name":"ООО Баткомплект","city":"Пермь","address":"Пермский край, Пермь г, Героев Хасана ул, д. 105, кор. 70","phones":["(342) 207-65-00"],"coords":[57.965164,56.264028]},{"name":"ООО \\"Дата-Медиа\\"","city":"Казань","address":"г. Казань, Ямашева д.38, офис 113","phones":["+7 (843)-519-97-59"],"coords":[55.829507,49.103944]},{"name":"магазин Батарейка (розница)","city":"Уфа","address":"г. Уфа Проспект Октября 93","phones":["+7 347 216-43-07"],"coords":[54.778045,56.029883]},{"name":"магазин Батарейка (розница)","city":"Уфа","address":"г. Уфа Проспект Октября 162/1а","phones":["+7 347 286-51-62"],"coords":[54.789052,56.03697]},{"name":"Склад Уфа (опт)/ИП Муратназаров К.Х.","city":"Уфа","address":"г.Уфа Трамвайная 2","phones":["8-(347)-284-82-88","+8-961-370-54-45"],"coords":[54.79676,56.060659]}]');var n=window.sMarkerColor||"#ef6b03",s=window.sMapData||o;$((function(){!function(o){var a=$("#".concat(o," .sh-mapMarkers"));a.height(a.parent().height());var r=s.reduce((function(e,o){var n=o.coords;return[e[0]+=n[0],e[1]+=n[1]]}),[0,0]);r[0]/=s.length,r[1]/=s.length,ymaps.ready((function(){var o=new ymaps.Map(a[0],{center:r,zoom:4,controls:["zoomControl"]});window.__shMap__=o;for(var t=new ymaps.GeoObjectCollection,d=0;d<s.length;d++){var c=s[d];t.add(new ymaps.Placemark(c.coords,{balloonContentHeader:c.name,balloonContentBody:"\n            <p>\n              <b>Телефон:</b>\n              ".concat(c.phones.map((function(e){return'<a href="tel:'.concat(e,'" target="_blank">').concat(e,"</a>")})).join(", "),"\n            </p>\n          "),balloonContentFooter:c.address,hintContent:c.address},{iconColor:n}))}o.geoObjects.add(t);var i=new ymaps.control.SearchControl({options:{provider:new e(s),noPlacemark:!0,resultsPerPage:5}});i.events.add("resultshow",(function(){__shMap__.setZoom(17)})),window.__mySearchControl__=i,o.controls.add(i)})),$('[href^="#sh-mapMarkers:"').on("click",(function(e){e.preventDefault();var o=$(this).attr("href").split(":")[1],n=s.filter((function(e){return e.city.toLocaleLowerCase()===o.toLocaleLowerCase()})),a=n.reduce((function(e,o){var n=o.coords;return[e[0]+=n[0],e[1]+=n[1]]}),[0,0]);a[0]/=n.length,a[1]/=n.length,__shMap__.setZoom(10),__shMap__.setCenter(a)}))}(window.shRecId||"rec315540300")})),console.log("Tilda Custom Map: Developed by savchenko.dev")})();