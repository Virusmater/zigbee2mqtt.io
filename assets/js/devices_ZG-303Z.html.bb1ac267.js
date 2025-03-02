"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90806],{16804:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>n,data:()=>r});var a=t(6254);const o={},n=(0,t(52753).A)(o,[["render",function(e,i){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i[8]||(i[8]=(0,a.Lk)("h1",{id:"hobeian-zg-303z",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#hobeian-zg-303z"},[(0,a.Lk)("span",null,"HOBEIAN ZG-303Z")])],-1)),(0,a.Lk)("table",null,[i[6]||(i[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[i[2]||(i[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZG-303Z")],-1)),(0,a.Lk)("tr",null,[i[1]||(i[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=HOBEIAN"},{default:(0,a.k6)((()=>i[0]||(i[0]=[(0,a.eW)("HOBEIAN")]))),_:1})])]),i[3]||(i[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Soil moisture sensor")],-1)),i[4]||(i[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"water_warning, temperature, humidity, soil_moisture, temperature_unit, temperature_calibration, humidity_calibration, soil_calibration, temperature_sampling, soil_sampling, soil_warning, battery")],-1)),i[5]||(i[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZG-303Z.png",alt:"HOBEIAN ZG-303Z"})])],-1))])]),i[9]||(i[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>i[7]||(i[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),i[10]||(i[10]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>soil_moisture_calibration</code>: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>soil_moisture_precision</code>: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="water-warning-enum" tabindex="-1"><a class="header-anchor" href="#water-warning-enum"><span>Water warning (enum)</span></a></h3><p>Water shortage warning. Value can be found in the published state on the <code>water_warning</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>alarm</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="soil-moisture-numeric" tabindex="-1"><a class="header-anchor" href="#soil-moisture-numeric"><span>Soil moisture (numeric)</span></a></h3><p>Measured soil moisture value. Value can be found in the published state on the <code>soil_moisture</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="temperature-unit-enum" tabindex="-1"><a class="header-anchor" href="#temperature-unit-enum"><span>Temperature unit (enum)</span></a></h3><p>Temperature unit. Value can be found in the published state on the <code>temperature_unit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_unit&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="temperature-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-calibration-numeric"><span>Temperature calibration (numeric)</span></a></h3><p>Temperature calibration. Value can be found in the published state on the <code>temperature_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-2</code> and the maximum value is <code>2</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-calibration-numeric"><span>Humidity calibration (numeric)</span></a></h3><p>Humidity calibration. Value can be found in the published state on the <code>humidity_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-30</code> and the maximum value is <code>30</code>. The unit of this value is <code>%</code>.</p><h3 id="soil-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#soil-calibration-numeric"><span>Soil calibration (numeric)</span></a></h3><p>Soil Humidity calibration. Value can be found in the published state on the <code>soil_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;soil_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-30</code> and the maximum value is <code>30</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-sampling-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-sampling-numeric"><span>Temperature sampling (numeric)</span></a></h3><p>Air temperature and humidity sampling. Value can be found in the published state on the <code>temperature_sampling</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_sampling&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="soil-sampling-numeric" tabindex="-1"><a class="header-anchor" href="#soil-sampling-numeric"><span>Soil sampling (numeric)</span></a></h3><p>Soil humidity sampling. Value can be found in the published state on the <code>soil_sampling</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;soil_sampling&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="soil-warning-numeric" tabindex="-1"><a class="header-anchor" href="#soil-warning-numeric"><span>Soil warning (numeric)</span></a></h3><p>Soil water shortage humidity value. Value can be found in the published state on the <code>soil_warning</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;soil_warning&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>',26))])}]]),r=JSON.parse('{"path":"/devices/ZG-303Z.html","title":"HOBEIAN ZG-303Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"HOBEIAN ZG-303Z control via MQTT","description":"Integrate your HOBEIAN ZG-303Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-24T08:59:10.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Water warning (enum)","slug":"water-warning-enum","link":"#water-warning-enum","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Soil moisture (numeric)","slug":"soil-moisture-numeric","link":"#soil-moisture-numeric","children":[]},{"level":3,"title":"Temperature unit (enum)","slug":"temperature-unit-enum","link":"#temperature-unit-enum","children":[]},{"level":3,"title":"Temperature calibration (numeric)","slug":"temperature-calibration-numeric","link":"#temperature-calibration-numeric","children":[]},{"level":3,"title":"Humidity calibration (numeric)","slug":"humidity-calibration-numeric","link":"#humidity-calibration-numeric","children":[]},{"level":3,"title":"Soil calibration (numeric)","slug":"soil-calibration-numeric","link":"#soil-calibration-numeric","children":[]},{"level":3,"title":"Temperature sampling (numeric)","slug":"temperature-sampling-numeric","link":"#temperature-sampling-numeric","children":[]},{"level":3,"title":"Soil sampling (numeric)","slug":"soil-sampling-numeric","link":"#soil-sampling-numeric","children":[]},{"level":3,"title":"Soil warning (numeric)","slug":"soil-warning-numeric","link":"#soil-warning-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]}]}],"git":{"updatedTime":1740949400000},"filePathRelative":"devices/ZG-303Z.md"}')}}]);